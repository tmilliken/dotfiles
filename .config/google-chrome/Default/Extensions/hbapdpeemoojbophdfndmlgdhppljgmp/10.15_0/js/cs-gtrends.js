var Tool = (function(){

  var source = 'gtrend';

  var urlRE = new RegExp(/(trends\/explore|trends\/story)/i);
  var observerTarget = 'body';
  var observer = null;

  var volBtnTimer = null;


  var init = function(){
    initPage();
  };


  var initPage = function(){
    // wait for table initialization
    checkTarget();
    var timer = setInterval(function(){
      var found = checkTarget();
      if (found) clearInterval(timer);
    }, 500);
  };


  var addSearchVolButtons = function(){
    var s = getPageSettings();
    var showButton = true;
    if (s.date !== 'Past 5 years' && s.date.indexOf(' - present') === -1) showButton = false;
    if (s.prop !== 'YouTube Search' && s.prop !== 'Web Search') showButton = false;
    var text = 'Get Search Volumes from 2004';
    if (s.prop === 'YouTube Search') {
      text = text.replace('2004', '2008');
    }
    var timerange = 'All Time';
    if (s.date === 'Past 5 years') {
      text = 'Get Search Volumes for past 5 years';
      timerange = '5yrs';
    }

    var $btn = $('#xt-gtrends-get-vol-main-btn');
    if ($btn[0]) $btn.remove();
    $btn = $('<button>', {id: 'xt-gtrends-get-vol-main-btn'}).appendTo('.compare-pickers ');
    $btn.text(text);
    $btn.toggleClass('xt-hidden', !showButton);
    $btn.click(function(e){
      e.preventDefault();
      var prop = s.prop === 'YouTube Search' ? 'youtube' : 'google';
      var termsStr = s.terms.join(',');
      var url = chrome.extension.getURL(`html/page.html?page=trends&country=${s.country}&prop=${prop}&timerange=${timerange}&terms=${termsStr}`);
      chrome.runtime.sendMessage({
        cmd: 'new_tab',
        data: url
      });
    });

    var $secBtn = $('.xt-gtrends-get-vol-sec-btn');
    if ($secBtn[0]) $secBtn.remove();
    var $widgets = $('[id^=RELATED_QUERIES]');
    $widgets.map(function(i, widget){
      var $root = $(widget.parentNode);
      var $prependTo = $root.find('.pagination');
      if (!$prependTo[0]) $prependTo = $root.find('.pagination-container');
      $secBtn = $('<button>', {class: 'xt-gtrends-get-vol-sec-btn'}).prependTo($prependTo);
      $secBtn.text(text);
      $secBtn.toggleClass('xt-hidden', !showButton);
      $secBtn.click(function(e){
        e.preventDefault();
        var prop = s.prop === 'YouTube Search' ? 'youtube' : 'google';
        var termsStr = $root.find('[ng-bind="bidiText"]').map(function(j, node){
          return $(node).contents().get(0).nodeValue;
        }).toArray().join(',');
        var url = chrome.extension.getURL(`html/page.html?page=trends&country=${s.country}&prop=${prop}&timerange=${timerange}&terms=${termsStr}`);
        chrome.runtime.sendMessage({
          cmd: 'new_tab',
          data: url
        });
      });

    });
  };


  var getPageSettings = function(){
    var country = $.trim($('.compare-pickers [ng-model="ctrl.model.geo"]').text());
    var date = $.trim($('.compare-pickers custom-date-picker ._md-select-value').text());
    var prop = $.trim($('.compare-pickers [ng-model="ctrl.model.property"] ._md-select-value').text());
    var terms = $('explore-search-term input').map(function(i, input){
      return input.value;
    }).toArray();
    return {country: country, date: date, prop: prop, terms: terms};
  };


  var checkTarget = function(){
    var $target = $( observerTarget );
    if (!$target.length) return;
    initMutationObserver( $target[0] );
    processChildList($('#RELATED_QUERIES').parent().find('.widget-template'), {});
    return true;
  };


  var initMutationObserver = function( target ){
    if (observer) observer.disconnect();
    observer = new MutationObserver(function(mutations) {
      if ( !document.location.href.match(urlRE) ) return;
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          processChildList(mutation.addedNodes, mutation);
        }
      });
    });

    var config = { subtree: true, childList: true, characterData: true };
    observer.observe(target, config);
  };


  var processChildList = function(children, mutation){
    for (var i = 0, len = children.length; i < len; i++) {
      var node = children[i];
      var $node = $(node);
      if (node.id === 'report') {
        processReport( node );
      }
      else if ( $node.hasClass('widget-template') &&
                node.children &&
                $(node.children[0]).hasClass('fe-related-queries') ) {
        processReport( node );
      }
      else if (mutation.target && mutation.target.getAttribute('ng-bind') === 'bidiText' && mutation.addedNodes[0] && mutation.addedNodes[0].nodeType === Node.TEXT_NODE) {
        var $target = $(mutation.target);
        processReport($target.closest('.item'));
      }
    }
  };


  var processReport = function( node ){
    console.log("processReport");
    var keywordsList = [];
    var $node = $(node);
    if ($node.closest('[widget-name="RELATED_TOPICS"]')[0]) return;
    var list = $node.find('.trends-bar-chart-name, .label-text span:first-child');
    for (var i = 0, len = list.length; i < len; i++) {
      var keyword = Common.cleanKeyword( list[i].textContent );
      keywordsList.push({
        keyword: keyword,
        node: list[i]
      });
    }
    var hasCredits = Common.getCredits() > 0;
    if (hasCredits) processKeywords( keywordsList, null );

    if (volBtnTimer) clearTimeout(volBtnTimer);
    volBtnTimer = setTimeout(function(){
      addSearchVolButtons();
    }, 100);
  };


  var processKeywords = function( keywordsList, table ){
    var keywords = {};
    for (var i = 0, len = keywordsList.length; i < len; i++) {
      keywords[ keywordsList[i].keyword ] = '';
    }
    Common.processKeywords({
        keywords: Object.keys( keywords ),
        tableNode: table,
        src: source
      },
      function(json){
        processJSON( json, keywordsList );
      }
    );
  };


  var processJSON = function( json, keywordsList ){
    var data = json.data;
    var dataByKeyword = {};
    for (var key in data) {
      var item = data[key];
      dataByKeyword[ item.keyword ] = item;
    }
    for (var i = 0, len = keywordsList.length; i < len; i++) {
      var keyword = keywordsList[i].keyword;
      var item = dataByKeyword[ keyword];
      if (item) {
        var title = Common.getResultStr(item);
        if (title) title = '[' + title + ']';
        var $res = $('<span/>').addClass('xt-gtrends-line').html(title);
        var color = Common.highlight(item);
        if (color) {
          $res.addClass('xt-highlight');
          $res.css('background', color);
        }
        // Common.appendStar($res, item);
        Common.addKeywords(keyword, item);
        Common.appendKeg($res, json, item);
        var $node = $( keywordsList[i].node );
        if ($node.find('.xt-gtrends-line')[0]) {
          $node.find('.xt-gtrends-line').remove();
        }
        $node.append( $res );
      }
    }
  };


  var getSource = function(){
    return source;
  };


  return {
    init: init,
    getSource: getSource
  };


})();
