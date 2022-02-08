var Tool = (function(){

  var source = 'bingco';

  var rootSel = '.b_searchboxForm';
  var observer;
  var cachedSuggestions = {};


  var init = function(){
    initWindowMessaging();
    setTimeout( function(){
      processPage();
      initSuggestions();
    }, 500 );
    initURLChangeListener(function(){
      setTimeout( function(){
        processPage();
      }, 500 );
    });
  };


  var initWindowMessaging = function(){
    // console.log('initWindowMessaging');
    window.addEventListener("message", function(event){
      var payload = event.data;
      if (typeof payload !== 'object') return;
      var cmd = payload.cmd;
      var data = payload.data;
      if (!cmd) return;
      if (cmd === 'xt.resize') {
        var height = data.height;
        var source = data.source;
        var selector = '';
        if (source === 'related') selector = '#xt-related-search';
        if (!selector) return;
        if (height <= 0) return;
        $(selector + ' iframe').height(height + 10);
      }
    }, false);
  };


  var initSuggestions = function(){
    var timer = setInterval(function(){
      if (!observer) {
        var node = $('#sw_as')[0];
        if (node) {
          clearInterval(timer);
          initMutationObserver(node);
          // console.log(node);
        }
      }
    }, 500);
  };


  var getQuery = function(){
    return $('#sb_form_q').val();
  };


  var processPage = function(){
    var query = getQuery();
    if (!query) {
      UIHelper.moveButtons(50);
      return;
    }
    else UIHelper.moveButtons(10);
    query = Common.cleanKeyword(query);
    chrome.runtime.sendMessage({
      cmd: 'api.getKeywordData',
      data: {
        keywords: [query],
        src: source
      }
    }, function( json ){
      processQueryResponse( json );
    });
    var settings = Starter.getSettings();
    if (settings.showAutocompleteButton) {
      addFindLongTailKeywordsBtn();
    }
    setTimeout(function(){
      processRelatedSearch();
    }, 1000);
  };


  var processRelatedSearch = function(manual){
    var list = $('.b_rs .b_rich li a, .b_rs .b_vList li a');
    var keywords = {};
    for (var i = 0, len = list.length; i < len; i++) {
      var keyword = Common.cleanKeyword( list[i].textContent );
      keywords[ keyword ] = list[i];
    }
    var settings = Starter.getSettings();
    if ((!settings.sourceList.gprsea && !manual) || !settings.apiKey ) {
      var rows = [];
      for (var keyword in keywords) {
        rows.push({keyword: keyword});
      }
      Common.renderWidgetTable(rows, getRenderParams({json: null}));
      return;
    }
    processKeywords( keywords, {} );
  };


  var processKeywords = function( keywords, table ){
    Common.processKeywords({
        keywords: Object.keys( keywords ),
        tableNode: table,
        src: source
      },
      function(json){
        processRelatedSearchResponse( json, keywords );
      }
    );
  };


  var processQueryResponse = function( json ){
    var data;
    if (json.data) data = json.data[0];
    var $node = $('#xt-info');
    if (!$node.length) {
      $node = $('<link/>', {
          class: 'xt-bing-query'
        })
        .attr('id', 'xt-info');
      var settings = Starter.getSettings();
      $node
        .insertAfter( $(rootSel)[0] )
        .css('margin-left', $(rootSel).position().left);

    }
    if (json.error_code === 'NOCREDITS') {
      return;
    }
    else if (!data) {
      Common.processEmptyData(json, $node);
      return;
    }
    else {
      if(data.vol != '-') {
        Common.addKeywords(data.keyword);
        var html = Common.getResultStrType2(data);
        html = Common.appendStar(html, data);
        html = Common.appendKeg(html, json, data);
        $node.html(html);
        var color = Common.highlight(data);
        if (color) {
          $node.addClass('xt-highlight');
          $node.css({background: color});
        }
      }
      else {
        $node.html('');
      }
    }
  };


  var processRelatedSearchResponse = function( json, keywords ){
    var data = json.data;
    var rows = [];
    if (json.error_code === 'NOCREDITS') {
      for (var keyword in keywords) {
        rows.push({keyword: keyword});
      }
      Common.renderWidgetTable(rows, getRenderParams({json: null, nocredits: true}));
      return;
    }

    if (typeof json.data !== 'object') return;
    for (var key in json.data) {
      var item = json.data[key];
      rows.push(item);
    }
    if (!rows.length) return;
    rows.sort(function(a,b){
      var aVol = parseInt(a.vol.replace(/[,.\s]/g, ''));
      var bVol = parseInt(b.vol.replace(/[,.\s]/g, ''));
      return bVol - aVol;
    });
    Common.renderWidgetTable(rows, getRenderParams({json: json}));
  };


  var initURLChangeListener = function( cbProcessPage ){
    var url = document.location.href;
    var timer = setInterval(function(){
      if ( url !== document.location.href ) {
        url = document.location.href;
        cbProcessPage( url );
      }
    }, 1000);
  };


  var initMutationObserver = function( target ){
    var settings = Starter.getSettings();
    if (!settings.showMetricsForSuggestions) return;
    if (observer) observer.disconnect();
    observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          if (!mutation.addedNodes.length) return;
          processChildList(mutation.addedNodes);
        }
      });
    });

    var config = { subtree: true, childList: true, characterData: true };
    observer.observe(target, config);
  };


  var processChildList = function(children){
    for (var i = 0, len = children.length; i < len; i++) {
      var node = children[i];
      // var $node = $(node);
      if (node.id === 'sa_ul') {
        processSuggestion(node);
      }
    }
  };


  var processSuggestion = function(node){
    var $node = $(node);
    var suggestionsList = {};
    $node.find('.sa_sg .sa_tm').map(function(i, item){
      var keyword = item.textContent;
      // console.log(keyword, item);
      suggestionsList[keyword] = item;
    });
    processSuggestionsList(suggestionsList);
  };



  var processSuggestionsList = function(list){
    var key = Object.keys(list).join('');
    if (cachedSuggestions[key]) {
      processSuggestionsListResponse(cachedSuggestions[key], list);
      return;
    }
    Common.processKeywords({
        keywords: Object.keys( list ),
        tableNode: {},
        src: source
      },
      function(json){
        // console.log(json, list);
        processSuggestionsListResponse( json, list );
        cachedSuggestions[key] = json;
      }
    );
  };


  var processSuggestionsListResponse = function(json, keywords){
    var data = json.data;
    for (var key in data) {
      var item = data[key];
      var node = keywords[ item.keyword ];
      var $node = $(node);
      $node.find('.xt-suggestions-search').remove();
      var $span = $('<span/>').addClass('xt-suggestions-search');
      if (item.vol != '-' && item.vol != '0') {
        var html = Common.getResultStr(item);
        var color = Common.highlight(item);
        if (color) {
          $span.addClass('xt-highlight');
          $span.css({background: color});
        }
        // html = Common.appendStar(html, item);
        // html = Common.appendKeg(html, json, item);
        $span.html(html);
      }
      $node.append( $span );
    }
  };


  var getRenderParams = function(params){
    var nocredits = params.nocredits;
    var settings = Starter.getSettings();
    var query = getQuery() || '';
    var res = {
      settingEnabled: settings.sourceList.bingco,
      type: 'related',
      title: 'Related Keywords',
      query: query,
      columnName: 'Keyword',
      rootSelector: 'xt-related-search',
      addTo: '#b_context',
      addMethod: 'appendTo',
      rootTagName: '<section>',
      iframeSrcParam: 'related',
      filename: 'bing-' + query.replace(/\s+/g, '_'),
      fnGenerateLink: function(keywordEnc){
        return document.location.origin + '/search?q=' + keywordEnc;
      },
      onAdded: function($root){
        // checkWidgetPosition($root, $('#related'));
      },
      onClosed: function(){
        // clearTimeout(checkWidgetPositionTimer);
      },
      loadAll: function(){
        var $this = $(this);
        var $parent = $this.closest('.xt-widget-table');
        if (nocredits || !settings.apiKey) {
          chrome.runtime.sendMessage({
            cmd: 'new_tab',
            data: 'https://keywordseverywhere.com/credits.html'
          });
          return;
        }
        processRelatedSearch('manual');
        $this.remove();
      }
    };
    for (var key in params) {
      res[key] = params[key];
    }
    return res;
  };


  const addFindLongTailKeywordsBtn = () => {
    let params = {
      parentSelector: '#b_context',
      addMethod: 'prependTo',
      rootTagName: '<section>',
      rootId:'xt-ltkbtn-root',
      query: getQuery(),
      title: 'Find Bing keywords for',
      service: 'bing'
    };
    Common.renderFindLongTailKeywordsBtn(params);
  };


  var getSource = function(){
    return source;
  };


  return {
    init: init,
    getSource: getSource
  };

})();
