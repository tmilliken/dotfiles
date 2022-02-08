var API = (function(){

  var URL = 'https://keywordseverywhere.com/service/2/';
  var _apiKey;
  var _country = 'global';
  var _currency = 'usd';
  var _dataSource = 'cli';

  var getConfigTS = 0;
  var getConfigCachedResponse = {};

  var version = chrome.runtime.getManifest().version;


  var init = function( apiKey, country, currency, dataSource ){
    if (typeof apiKey !== 'undefined') _apiKey = apiKey;
    if (typeof country !== 'undefined') _country = country;
    if (typeof currency !== 'undefined') _currency = currency;
    if (typeof dataSource !== 'undefined') _dataSource = dataSource;
  };


  var isOnline = function(cbProcessResponse){
    var url = URL + 'isOnline.php?version=' + version;
    $.getJSON(url)
      .done(function(json){
        delete localStorage.tsNoReplySince;
        if (typeof json === 'object' && json[0] === true) {
          cbProcessResponse({error: false, data: true});
        }
        else {
          cbProcessResponse({
            error: false,
            data: false,
            message: 'Keywords Everywhere is currently undergoing maintenance.'
          });
        }
      })
      .fail(function(){
        var now = Date.now();
        var diff;
        if (localStorage.tsNoReplySince) {
          diff = now - localStorage.tsNoReplySince;
        }
        else {
          localStorage.tsNoReplySince = now;
        }
        var message = 'Something has gone wrong.';
        if (diff > 24*3600*1000) message += ' Please re-install the extension.';
        if (diff > 10000) message += ' Please re-install the extension.';
        cbProcessResponse({
          error: true,
          data: false,
          message: message
        });
      });
  };


  var getParams = function(){
    return {
      apiKey: _apiKey,
      country: _country,
      currency: _currency,
      dataSource: _dataSource
    };
  };


  var getCredits = function(cbProcessResponse){
    var url = URL + 'getCredits.php';
    if (!_apiKey) {
      cbProcessResponse({
        ext_error: 'Please setup a valid API key'
      });
      return;
    }
    $.getJSON(url, {
      apiKey: _apiKey,
      version: version,
      t: Date.now()
    })
      .done(function(json){
        cbProcessResponse({error: '', data: json[0]});
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        cbProcessResponse({error: true, data: textStatus});
      });
  };


  var getKeywordData = function( params, cbProcessResponse ){
    var keywords = params.keywords;
    var src = params.src;
    var useGlobal = params.global;
    var url = URL + 'getKeywordData.php';
    if (!_apiKey) {
      cbProcessResponse({
        error_code: 'NO_API_KEY',
        ext_error: 'Please setup a valid API key'
      });
      return;
    }
    var data = {
      apiKey: _apiKey,
      country: useGlobal ? '' : _country,
      currency: _currency,
      dataSource: _dataSource,
      source: src,
      version: version,
      kw: keywords,
      t: Date.now()
    };
    if (params.from) data.from = params.from;
    if (params.seed) data.seed = params.seed;
    $.getJSON( url, data )
      .done(function(json){
        if (json.data) {
          formatResponse(json);
        }
        cbProcessResponse(json);
      })
      .fail(function(jqXHR, textStatus, error){
        cbProcessResponse({error: true, data: error});
      });
  };


  var getTagsData = function( params, cbProcessResponse ){
    var keywords = params.keywords;
    var src = params.src;
    var useGlobal = params.global;
    var url = 'https://api.keywordseverywhere.com/v1/get_tag_data';
    if (!_apiKey) {
      cbProcessResponse({
        error_code: 'NO_API_KEY',
        ext_error: 'Please setup a valid API key'
      });
      return;
    }
    var data = {
      apiKey: _apiKey,
      country: useGlobal ? '' : _country,
      currency: _currency,
      dataSource: _dataSource,
      source: src,
      version: version,
      tag: keywords,
      t: Date.now()
    };
    $.ajax({
      method: 'POST',
      url: url,
      headers: {
        'Accept': `application/json`,
        'Authorization': 'Bearer ' + _apiKey
      },
      data: data
    })
      .done(function(json){
        if (json.data) {
          formatResponse(json);
        }
        cbProcessResponse(json);
      })
      .fail(function(jqXHR, textStatus, error){
        cbProcessResponse({error: true, data: error});
      });
  };


  var getCountries = function(cbProcessResponse){
    var url = 'https://keywordseverywhere.com/service/getCountries.php';
    $.getJSON(url).done(function(json){
      cbProcessResponse(json);
    });
  };


  var getCurrencies = function(cbProcessResponse){
    var url = 'https://keywordseverywhere.com/service/getCurrencies.php';
    $.getJSON(url).done(function(json){
      cbProcessResponse(json);
    });
  };


  var checkApiKey = function(key, cbProcessResponse){
    var url = URL + 'checkApiKey.php';
    $.getJSON(url, {
      version: version,
      apiKey: key
    })
      .done(function(json){
        cbProcessResponse({error: '', data: json[0]});
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        cbProcessResponse({error: true, data: textStatus});
      });
  };


  var formatResponse = function(json){
    for (var key in json.data) {
      var item = json.data[key];
      var cpc = item.cpc;
      var vol = parseFloat(item.vol);
      item.cpc = typeof cpc !== 'undefined' ? cpc : '-';
      item.vol = typeof vol !== 'undefined' ? Number( vol ).toLocaleString() : '-';
    }
  };


  var addKeywords = function(keywords, cbProcessResponse){
    var url = URL + 'addKeywords.php?apiKey=' + _apiKey + '&version=' + version;
    $.post(url, {
      kw: keywords
    })
      .done(function(json){
        cbProcessResponse({error: false, data: json});
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var deleteKeywords = function(keywords, cbProcessResponse){
    var url = URL + 'deleteKeywords.php?apiKey=' + _apiKey + '&version=' + version;
    $.post(url, {
      kw: keywords
    })
      .done(function(response){
        cbProcessResponse({error: false, data: response});
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var getFavoriteKeywords = function(cbProcessResponse){
    var url = URL + 'getFavoriteKeywords.php?apiKey=' + _apiKey;
    $.get(url, {
      version: version,
      country: _country,
      currency: _currency
    })
      .done(function(response){
        cbProcessResponse({error: false, data: response});
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var getConfig = function(cbProcessResponse){
    if (Date.now() - getConfigTS < 8*3600*1000) {
      cbProcessResponse(getConfigCachedResponse);
      return;
    }
    var url = URL + 'getConfig.php?apiKey=' + _apiKey + '&version=' + version;
    if (DEV_MODE) {
      url = '/html/mock/getConfigResponse.json';
    }
    $.getJSON(url)
      .done(function(response){
        getConfigCachedResponse = {error: false, data: response};
        getConfigTS = Date.now();
        cbProcessResponse(getConfigCachedResponse);
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var getBulkConfig = function(cbProcessResponse){
    var url = URL + 'getBulkConfig.php?apiKey=' + _apiKey + '&version=' + version;
    $.getJSON(url)
      .done(function(response){
        cbProcessResponse({error: false, data: response});
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var trend = function(query){
    var url = URL + 'trend.php?apiKey=' + _apiKey + '&country=' + _country + '&version=' + version + '&query=' + encodeURIComponent(query);
    $.get(url).then(function(response){});
  };


  var postTrendKeywords = function(params, cbProcessResponse){
    var list = params.list;
    var url = URL + 'GetTrendData.php?apiKey=' + _apiKey + '&version=' + version;
    $.post(url, {
      query: list
    })
      .done(function(json){
        cbProcessResponse({error: false, data: json});
      })
      .fail(function(){
        cbProcessResponse({error: true});
      });
  };


  var getDomainMetrics = function(params, cbProcessResponse){
    var domains = params.domains;
    var country = params.country;
    var url = 'https://data.keywordseverywhere.com/service/get-domain-metrics';
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        domains: domains,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getURLMetrics = function(params, cbProcessResponse){
    var urls = params.urls;
    var country = params.country;
    var url = 'https://data.keywordseverywhere.com/service/get-url-metrics';
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        urls: urls,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getURLKeywords = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-url-keywords';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        url: params.url,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getDomainKeywords = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-domain-keywords';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        domain: params.domain,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getDomainLinkMetrics = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-domain-link-metrics';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        domains: params.domains,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getDomainPages = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-domain-pages';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        domain: params.domain,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getCompetitorKeywords = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-competitor-keywords';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        my_domain: params.myDomain,
        competitors: params.competitors,
        country: country,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  var getMatchingDomains = function(params, cbProcessResponse){
    var url = 'https://data.keywordseverywhere.com/service/get-matching-domains';
    var country = params.country;
    if (!country) country = 'us';
    $.ajax({
      method: 'POST',
      url: url,
      contentType : 'application/json',
      headers: {
        'Accept': `application/x.seometrics.v3+json`,
      },
      data: JSON.stringify({
        match_string: params.matchString,
        version: version,
        api_key: _apiKey || ''
      })
    })
    .then(function(json){
      var res = {error: false, data: json};
      cbProcessResponse(res);
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      cbProcessResponse({error: true, data: textStatus});
    });
  };


  return {
    init: init,
    isOnline: isOnline,
    getCredits: getCredits,
    getParams: getParams,
    getKeywordData: getKeywordData,
    getTagsData: getTagsData,
    getCountries: getCountries,
    getCurrencies: getCurrencies,
    checkApiKey: checkApiKey,
    addKeywords: addKeywords,
    deleteKeywords: deleteKeywords,
    getFavoriteKeywords: getFavoriteKeywords,
    getConfig: getConfig,
    getBulkConfig: getBulkConfig,
    trend: trend,
    postTrendKeywords: postTrendKeywords,
    getDomainMetrics: getDomainMetrics,
    getDomainLinkMetrics: getDomainLinkMetrics,
    getURLMetrics: getURLMetrics,
    getURLKeywords: getURLKeywords,
    getDomainKeywords: getDomainKeywords,
    getDomainPages: getDomainPages,
    getCompetitorKeywords: getCompetitorKeywords,
    getMatchingDomains: getMatchingDomains
  };

})();
