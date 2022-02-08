var App = (function(){

  var appEnabled = true;

  var urlsToAnalyze = {};
  var ytVideoCache = {};
  var googleDifficultyData = {};
  var keywordsPendingList = null;


  var init = function(){
    initMessaging();
    initSettings();
    initContextMenu();
    AutocompleteAPI.init({
      fnGetSettings: () => {
        return new Promise((resolve, reject) => {
          chrome.storage.local.get(null, function(data){
            resolve(data.settings);
          });
        });
      }
    });

    if (typeof chrome.runtime.onInstalled !== 'undefined') {
      chrome.runtime.onInstalled.addListener(function (object) {
        if (object.reason == 'install') {
          onInstallHandler();
        }
        else if (object.reason == 'update') {
          onUpdateHandler();
        }
      });
    }
    else {
      if (!localStorage.installTS) {
        localStorage.installTS = Date.now();
        onInstallHandler();
      }
    }
  };


  var onInstallHandler = function(){
    chrome.tabs.create({url: "https://keywordseverywhere.com/start.html?mode=install"}, function (tab) {});
    //store install date
    if (typeof chrome.storage.sync !== 'undefined') {
      chrome.storage.sync.get('installDate', function(items) {
        if(!items.installDate) {
          var currentDate = new Date().getTime();
          chrome.storage.sync.set({'installDate': currentDate } , function() {});
        }
      });
    }
  };


  var onUpdateHandler = function(){
    //store install date
    chrome.storage.sync.get('installDate', function(items) {
      if(!items.installDate) {
        var currentDate = new Date().getTime();
        chrome.storage.sync.set({'installDate': currentDate } , function() {});
      }
    });
  };


  var initMessaging = function(){
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        var cmd = request.cmd;
        var data = request.data;
        if (cmd === 'api.isOnline') {
          API.isOnline(function(response){
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'api.getCredits') {
          API.getCredits(function( json ){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getKeywordData') {
          console.log(data);
          if (!appEnabled) return;
          API.getKeywordData( data, function( json ){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getTagsData') {
          if (!appEnabled) return;
          API.getTagsData( data, function( json ){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getCountries') {
          API.getCountries(function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getCurrencies') {
          API.getCurrencies(function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.checkApiKey') {
          API.checkApiKey(data.key, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.addKeywords') {
          API.addKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.deleteKeywords') {
          API.deleteKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getFavoriteKeywords') {
          API.getFavoriteKeywords(function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getConfig') {
          API.getConfig(function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getDomainMetrics') {
          API.getDomainMetrics(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getDomainLinkMetrics') {
          API.getDomainLinkMetrics(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getURLMetrics') {
          API.getURLMetrics(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getURLKeywords') {
          API.getURLKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getDomainKeywords') {
          API.getDomainKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getDomainPages') {
          API.getDomainPages(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getCompetitorKeywords') {
          API.getCompetitorKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getMatchingDomains') {
          API.getMatchingDomains(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getBulkConfig') {
          API.getBulkConfig(function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'api.getParams') {
          sendResponse( API.getParams() );
        }
        else if (cmd === 'api.trend') {
          API.trend(data.query);
        }
        else if (cmd === 'api.postTrendKeywords') {
          API.postTrendKeywords(data, function(json){
            sendResponse(json);
          });
          return true;
        }
        else if (cmd === 'setKeywordsPendingList') {
          keywordsPendingList = data;
        }
        else if (cmd === 'getKeywordsPendingList') {
          sendResponse(keywordsPendingList);
          keywordsPendingList = null;
        }
        else if (cmd === 'googleTrendsAPI.multiline') {
          GoogleTrendsAPI.multiline(data).then((response) => {
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'googleTrendsAPI.relatedsearches') {
          GoogleTrendsAPI.relatedsearches(data).then((response) => {
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'pinterestTrendsAPI.exactMatch') {
          PinterestTrendsAPI.exactMatch(data).then((response) => {
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'pinterestTrendsAPI.relatedTerms') {
          PinterestTrendsAPI.relatedTerms(data).then((response) => {
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'autocomplete') {
          AutocompleteAPI.get(data).then(response => {
            sendResponse(response);
          });
          return true;
        }
        else if (cmd === 'new_tab') {
          var url = data;
          chrome.tabs.create({
            url: data
          });
        }
        else if (cmd === 'new_inactive_tab') {
          chrome.tabs.create({
            url: data,
            active: false
          });
        }
        else if (cmd === 'settings.get') {
          chrome.storage.local.get(null, function(data){
            sendResponse(data.settings);
          });
          return true;
        }
        else if (cmd === 'setting.set') {
          chrome.storage.local.get(null, function(obj){
            let settings = obj.settings;
            settings[data.key] = data.value;
            chrome.storage.local.set({settings: settings});
          });
        }
        else if (cmd === 'settings.update') {
          initSettings();
        }
        else if (cmd === 'cache.get') {
          sendResponse(Cache.get(data.key));
        }
        else if (cmd === 'cache.set') {
          Cache.set(data.key, data.res);
        }
        else if (cmd === 'yt.setVideoCache') {
          ytVideoCache = data;
        }
        else if (cmd === 'yt.getVideoCache') {
          sendResponse(ytVideoCache);
        }
        else if (cmd === 'google.setDifficultyData') {
          googleDifficultyData = data;
        }
        else if (cmd === 'google.getDifficultyData') {
          sendResponse(googleDifficultyData);
        }
        else if (cmd === 'app.setState') {
          setIcon(data.state);
          appEnabled = data.state;
          chrome.storage.local.get(['settings'], function(obj){
            if (!obj.settings) return;
            obj.settings.enabled = data.state;
            chrome.storage.local.set(obj);
          });
        }
        else if (cmd === 'urlToAnalyze') {
          urlsToAnalyze[data.id] = data.url;
        }
        else if (cmd === 'ajax.getPageHTML') {
          var url = urlsToAnalyze[data];
          if (!url) sendResponse({error: true, data: 'No URL'});
          else {
            $.get(url)
              .then(function(response){
                sendResponse({error: false, data: response});
              })
              .fail(function(xhr){
                sendResponse({error: true, data: xhr.status});
              });
          }
          return true;
        }
        else if (cmd === 'file.download') {
          downloadFile(data.name, data.content);
        }
      });
  };


  var setIcon = function(state){
    var path = 'img/icon32.png';
    if (!state) path = 'img/gray19.png';
    chrome.browserAction.setIcon({
      path: chrome.extension.getURL(path)
    });
  };


  var initSettings = function(){
    chrome.storage.local.get(null, function( data ){
      var list = {};
      // Default - all pages is on
      if (!data.settings) {
        appEnabled = true;
        for (var src in SourceList) {
          list[src] = true;
        }
        chrome.storage.local.set({
          settings: {
            enabled: true,
            apiKey: '',
            country: '',
            currency: '',
            dataSource: 'cli',
            metricsList: {
              vol: true,
              cpc: true,
              comp: true,
              trend: true
            },
            sourceList: list,
            googlePos: 'default',
            showAddAllButton: true,
            showExportButton: true,
            showAutocompleteButton: true,
            showDifficultyMetrics: true,
            showMetricsForSuggestions: true,
            showGoogleTraffic: true,
            showGoogleMetrics: true,
            showGoogleTrendChart: true,
            showYoutubeAdvancedMetrics: true,
            googleTrendChartDefaultTime: 'All Time',
            widgetKeywordsPerPage: 'All',
            highlightVolumeValue: 1000,
            highlightVolumeCond: 'gt',
            highlightCPCValue: 1.5,
            highlightCPCCond: 'gt',
            highlightCompValue: 0.5,
            highlightCompCond: 'gt',
            highlightVolumeValueSec: '',
            highlightVolumeCondSec: '',
            highlightCPCValueSec: '',
            highlightCPCCondSec: '',
            highlightCompValueSec: '',
            highlightCompCondSec: '',
            highlightColor: '#99ff66',
            defaultPopupAction: 'popup'
          }
        });
      }
      else { // default is on for newly added sources
        for (var src in SourceList) {
          if (data.settings.sourceList && typeof data.settings.sourceList[src] === 'undefined') {
            list[src] = true;
            if (src === 'gpasea' || src === 'gprsea' || src === 'ltkwid') {
              if (!list.gprsea) list[src] = false;
            }
            if (src === 'youtag') {
              if (!list.gprsea) list.youtag = false;
            }
          }
          else if (data.settings.sourceList) {
            list[src] = data.settings.sourceList[src];
          }
        }
        var metricsList = data.settings.metricsList;
        if (!metricsList) {
          metricsList = {
            vol: true,
            cpc: true,
            comp: true,
            trend: true
          };
        }
        else if (typeof metricsList.trend === 'undefined') {
          metricsList.trend = true;
        }
        var res = {
          settings: {
            enabled: data.settings.enabled,
            apiKey: data.settings.apiKey,
            country: data.settings.country,
            currency: data.settings.currency,
            dataSource: data.settings.dataSource,
            metricsList: metricsList,
            sourceList: list,
            showAddAllButton: data.settings.showAddAllButton,
            showExportButton: data.settings.showExportButton,
            showAutocompleteButton: data.settings.showAutocompleteButton,
            showDifficultyMetrics: data.settings.showDifficultyMetrics,
            showMetricsForSuggestions: data.settings.showMetricsForSuggestions,
            showGoogleTraffic: data.settings.showGoogleTraffic,
            showGoogleMetrics: data.settings.showGoogleMetrics,
            showGoogleTrendChart: data.settings.showGoogleTrendChart,
            showYoutubeAdvancedMetrics: data.settings.showYoutubeAdvancedMetrics,
            googleTrendChartDefaultTime: data.settings.googleTrendChartDefaultTime,
            widgetKeywordsPerPage: data.settings.widgetKeywordsPerPage,
            defaultPopupAction: data.settings.defaultPopupAction,
            googlePos: data.settings.googlePos
          }
        };
        for (var key in data.settings) {
          if (key.indexOf('highlight') === 0) res.settings[key] = data.settings[key];
        }
        if (typeof res.settings.dataSource === 'undefined') res.settings.dataSource = 'cli';
        if (typeof res.settings.showExportButton === 'undefined') res.settings.showExportButton = true;
        if (typeof res.settings.showAutocompleteButton === 'undefined') res.settings.showAutocompleteButton = true;
        if (typeof res.settings.showDifficultyMetrics === 'undefined') res.settings.showDifficultyMetrics = true;
        if (typeof res.settings.showMetricsForSuggestions === 'undefined') res.settings.showMetricsForSuggestions = true;
        if (typeof res.settings.showGoogleTraffic === 'undefined') res.settings.showGoogleTraffic = true;
        if (typeof res.settings.showGoogleMetrics === 'undefined') res.settings.showGoogleMetrics = true;
        if (typeof res.settings.showGoogleTrendChart === 'undefined') res.settings.showGoogleTrendChart = true;
        if (typeof res.settings.showYoutubeAdvancedMetrics === 'undefined') res.settings.showYoutubeAdvancedMetrics = true;
        if (typeof res.settings.googleTrendChartDefaultTime === 'undefined') res.settings.googleTrendChartDefaultTime = 'All Time';
        if (typeof res.settings.enabled === 'undefined') res.settings.enabled = true;
        if (typeof res.settings.highlightCPCValue === 'undefined') res.settings.highlightCPCValue = 1.5;
        if (typeof res.settings.highlightVolumeValue === 'undefined') res.settings.highlightVolumeValue = 1000;
        if (typeof res.settings.highlightCompValue === 'undefined') res.settings.highlightCompValue = 0.5;
        if (typeof res.settings.highlightCPCValueSec === 'undefined') res.settings.highlightCPCValueSec = '';
        if (typeof res.settings.highlightVolumeValueSec === 'undefined') res.settings.highlightVolumeValueSec = '';
        if (typeof res.settings.highlightCompValueSec === 'undefined') res.settings.highlightCompValueSec = '';
        if (typeof res.settings.highlightColor === 'undefined') res.settings.highlightColor = '#99ff66';
        'CPC Volume Comp'.split(' ').map(function(key){
          var s = 'highlight' + key + 'Cond';
          if (!res.settings[s]) res.settings[s] = 'gt';
          s = 'highlight' + key + 'CondSec';
          if (!res.settings[s]) res.settings[s] = 'lt';
        });
        appEnabled = data.settings.enabled;
        API.init(res.settings.apiKey, res.settings.country, res.settings.currency, res.settings.dataSource);
        chrome.storage.local.set(res);
        setIcon(res.settings.enabled);
      }
    });
  };


  var initContextMenu = function(){
    chrome.contextMenus.create({
        "title": "Get Keyword Data for '%s'",
        "contexts": ["selection"],
        "onclick": processKeyword
      });
    chrome.contextMenus.create({
        "title": "Analyze this page",
        "contexts": ["page", "frame"],
        "onclick": function(info, tab){
          var id = btoa(tab.url);
          urlsToAnalyze[id] = tab.url;
          chrome.tabs.create({
            url: 'https://keywordseverywhere.com/ke/1/analyze.php?id=' + encodeURIComponent(id)
          });
        }
      });
  };


  var processKeyword = function( info, tab ){
    API.getKeywordData({
      keywords: [info.selectionText],
      src: 'select'
    }, function(json){
      var item;
      if (typeof json.data !== 'object') item = {};
      else {
        item = json.data[Object.keys(json.data)[0]];
        if (!item) item = {};
      }
      chrome.tabs.insertCSS(tab.id, {file: '/css/popover.css'});
      chrome.tabs.insertCSS(tab.id, {file: '/css/style.css'});
      chrome.tabs.executeScript(tab.id, {file: '/lib/jquery-3.6.0.min.js'});
      chrome.tabs.executeScript(tab.id, {file: '/js/cs-starter.js'});
      chrome.tabs.executeScript(tab.id, {file: '/js/cs-common.js'});
      chrome.tabs.executeScript(tab.id, {file: '/js/cs-ui-helper.js'});
      chrome.tabs.executeScript(tab.id, {file: '/js/cs-popover.js'}, function(){
        chrome.tabs.executeScript(tab.id, {
          code: "Starter.initSettings(function(){Popover.show('" + JSON.stringify(item) + "', '" + info.selectionText.replace(/'/g, '&#39;') + "'); Starter.initMouseEvents();}, 'manual');"
        });
      });
    });
  };


  var downloadFile = function(filename, text){
    var blob = new Blob([text], {
        type: 'text/plain'
    });
    var url = URL.createObjectURL(blob);
    var downloadParams = {
      url: url,
      saveAs: true,
      filename: filename
    };
    chrome.downloads.download(
      downloadParams,
      function(downloadId) {}
    );
  };


  return {
    init: init
  };

})();

App.init();
