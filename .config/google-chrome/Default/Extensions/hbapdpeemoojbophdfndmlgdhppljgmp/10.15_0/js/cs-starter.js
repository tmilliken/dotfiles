var Starter = (function(){

  var settings = {};

  var init = function(){
    initSettings();
    initMouseEvents();
    if (typeof UIHelper !== 'undefined') UIHelper.checkAnniversary();
  };


  var initSettings = function( cbContinue, manual ){
    chrome.storage.local.get(null, function( data ){
      if (data.settings) {
        settings = data.settings;
        if (settings.enabled === false && !manual) return;
        if (settings.country) {
          Common.setCountry( settings.country.toUpperCase() );
        }
      }
      var onlinePromise = new Promise(function(resolve){
        chrome.runtime.sendMessage({
          cmd: 'api.isOnline'
        }, resolve);
      });
      onlinePromise.then(function(response){
        var active = response.data;
        if (active) {
          getCredits().then(function(hasCredits){
            if (!cbContinue) checkURL( settings.sourceList, hasCredits );
            else cbContinue();
          });
        }
      });
    });
  };


  var getCredits = function(){
    return new Promise(function(resolve){
      chrome.runtime.sendMessage({
        cmd: 'api.getCredits'
      }, function(json){
        if (json.error) resolve(false);
        else {
          Common.setCredits(json.data);
          var hasCredits = json.data > 0;
          resolve(hasCredits);
        }
      });
    });
  };


  var getSettings = function(){
    return settings;
  };


  var initMouseEvents = function(){
    $('body').on('mousedown', '.xt-keg', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      var url = this.href;
      if (!url) url = 'https://app.keywordkeg.com/?api=google&autostart=1&query=' + encodeURIComponent(this.dataset.keyword);
      chrome.runtime.sendMessage({
        cmd: 'new_tab',
        data: url
      });
    });
    $('body').on('contextmenu', '.xt-star, .xt-keg', function(e){
      e.preventDefault();
      return false;
    });
    $('body').on('click', '.xt-star, .xt-keg', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
    });
    $('body').on('mouseup', '.xt-star, .xt-keg', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
    });
    $('body').on('mousedown', '.xt-star', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if (!this.dataset.keyword) return;
      var self = this;
      var state = this.dataset.state;
      this.classList.add('xt-rotate');
      var cmd = (state === 'on')? 'api.deleteKeywords' : 'api.addKeywords';
      var newState = (state === 'on')? 'off' : 'on';
      chrome.runtime.sendMessage({
        cmd: cmd,
        data: [self.dataset.keyword]
      }, function(json){
        self.classList.remove('xt-rotate');
        if (!json.error) self.dataset.state = newState;
      });
    });
  };


  var checkURL = function( sources, hasCredits ){
    if (!sources) return;
    var source = Tool.getSource();
    if (sources[source]) {
      if (source === 'gsearc' && !isGSearchURL()) return;
      if (source === 'analyt' && window.self === window.parent.self) {
        return;
      }
      if (hasCredits) {
        Tool.init();
        addSettingsButton();
      }
      else {
        if ((source === 'gsearc' && isGSearchURL()) || 'bingco youtub gtrend instgr ebayco etsyco amazon pntrst'.indexOf(source) !== -1) {
          Tool.init();
        }
      }
    }
  };


  var addSettingsButton = function(){
    if ($('.xt-icon[data-type=settings]')[0]) return;
    // UIHelper.showIcon('settings');
    var source = Tool.getSource();
    if (source === 'gsearc') {
      if (document.location.href.indexOf('tbm=') !== -1) return;
    }
    if (source === 'pntrst') {
      if (document.location.host.indexOf('trends') !== -1) return;
    }
    if (source === 'yahoo') {
      if (document.location.host !== 'search.yahoo.com') return;
    }
    if (settings.showAddAllButton) {
      if ('amazon ebayco youtub instgr yahoo'.indexOf(source) === -1) {
        UIHelper.showIcon('addKeywords');
      }
    }
    if (settings.showExportButton) {
      if ('amazon ebayco youtub instgr yahoo'.indexOf(source) === -1) {
        UIHelper.showIcon('exportCSV');
      }
    }
  };


  var isGSearchURL = function(){
    var url = document.location.href;
    if (url.indexOf('sorry/index') !== -1) return false;
    if (url.match(/google\.[\w.]+\/(\?|search|#q=|webhp|\?ion|#[\w&=-]+&q=)/)) return true;
    else if (url.match(/google\.[\w.]+\/?$/)) return true;
    else return false;
    return true;
  };


  return {
    init: init,
    initSettings: initSettings,
    getSettings: getSettings,
    isGSearchURL: isGSearchURL,
    initMouseEvents: initMouseEvents,
    addSettingsButton: addSettingsButton
  };

})();
