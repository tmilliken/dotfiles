const GoogleTrendsAPI = (() => {

  const relatedsearches = async (params) => {
    let reqParams = await getRequestParams(params, "RELATED_QUERIES");
    if (reqParams && reqParams.error) {
      return reqParams;
    }
    let hl = 'en-US';
    let timezone = params.timezone || (new Date).getTimezoneOffset();
    if (!reqParams.token) return {};
    let reqEncoded = encodeURIComponent(JSON.stringify(reqParams.request, '', ''));
    let url = `https://trends.google.com/trends/api/widgetdata/relatedsearches?hl=${hl}&tz=${timezone}&req=${reqEncoded}&token=${reqParams.token}`;
    let response = await fetch(url);
    if (!response.ok) {
      return {
        error: response.status
      };
    }
    let text = await response.text();
    let json;
    let res = {};
    try {
      text = text.replace(/.*?',/s, '');
      json = JSON.parse(text);
      res.json = json;
      res.req = reqParams;
    } catch (e) {
      console.log(e);
      return {};
    }
    return res;
  };


  const multiline = async (params) => {
    let reqParams = await getRequestParams(params, "TIMESERIES");
    if (reqParams && reqParams.error) {
      return reqParams;
    }
    let hl = 'en-US';
    let timezone = params.timezone || (new Date).getTimezoneOffset();
    if (!reqParams.token) return {};
    let reqEncoded = encodeURIComponent(JSON.stringify(reqParams.request, '', ''));
    let url = `https://trends.google.com/trends/api/widgetdata/multiline?hl=${hl}&tz=${timezone}&req=${reqEncoded}&token=${reqParams.token}`;
    let response = await fetch(url);
    if (!response.ok) {
      return {
        error: response.status
      };
    }
    let text = await response.text();
    let json;
    let res = {};
    try {
      text = text.replace(/.*?',/s, '');
      json = JSON.parse(text);
      console.log(json);
      res.json = json;
      res.req = reqParams;
    } catch (e) {
      console.log(e);
      return {};
    }
    return res;
  };


  const getRequestParams = async (params, reqType) => {
    console.log(params);
    let timezone = params.timezone || (new Date).getTimezoneOffset();
    let hl = 'en-US';
    let geo = params.geo || 'US';
    let time = convertTimeRangeToDateStr(params.timeRange, params.property);
    let property = params.property || '';
    let req = {
      "comparisonItem": [
      {
        "keyword": params.keyword,
        "geo": geo,
        "hl": hl,
        "category": 0,
        "timezone": timezone,
        "time": time
      }],
      "category": 0,
      "property": property
    };
    let reqEncoded = encodeURIComponent(JSON.stringify(req, '', ''));
    let url = `https://trends.google.com/trends/api/explore?hl=${hl}&tz=${timezone}&req=${reqEncoded}`;
    console.log(url);
    let response = await fetch(url);
    if (!response.ok) {
      return {
        error: response.status
      };
    }
    let text = await response.text();
    text = text.replace(/.*?'/s, '');
    let request;
    let token;
    try {
      let json = JSON.parse(text);
      console.log(json);
      json.widgets.map((widget) => {
        if (widget.id === reqType) {
          request = widget.request;
          token = widget.token;
        }
      });
    } catch (e) {
      console.log(e);
      return {};
    }
    return {token: token, request: request};
  };


  const convertTimeRangeToDateStr = (timeRange, property) => {
    let time = "";
    let d = new Date();
    if (timeRange === 'All Time') {
      d = new Date('2004-01-01');
      if (property === 'youtube') d = new Date('2008-01-01');
    }
    else if (timeRange === '5yrs') {
      d.setFullYear(d.getFullYear() - 5);
    }
    else if (timeRange === '12mo') {
      d.setFullYear(d.getFullYear() - 1);
    }
    else if (timeRange === '3mo') {
      d.setMonth(d.getMonth() - 3);
    }
    else if (timeRange === '30d') {
      let currMonth = d.getMonth();
      d.setMonth(d.getMonth() - 1);
      let prevMonth = d.getMonth();
      let prevDay = d.getDate();
      if (prevMonth === currMonth && prevDay === 1) {
        d.setDate(0);
      }
    }
    else if (timeRange === '7d') {
      d.setDate(d.getDate() - 7);
    }
    let res = getDate('YYYY-MM-DD', d) + ' ' + getDate('YYYY-MM-DD');
    if (timeRange === '7d') res = 'now 7-d';
    return res;
  };


  const getDate = (format, date) => {
    if (typeof date === 'undefined') date = new Date();
    if (!format) format = 'YYYY-MM-DD hh:mm:ss';
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).substr(-2);
    var day = ('0' + date.getDate()).substr(-2);
    var hours = ('0' + date.getHours()).substr(-2);
    var min = ('0' + date.getMinutes()).substr(-2);
    var sec = ('0' + date.getSeconds()).substr(-2);

    var res = format;
    res = res.replace('YYYY', year);
    res = res.replace(/YY/g, year.toString().substr(-2));
    res = res.replace('MM', month);
    res = res.replace('DD', day);
    res = res.replace('hh', hours);
    res = res.replace('mm', min);
    res = res.replace('ss', sec);
    return res;
  };


  return {
    multiline,
    relatedsearches
  };

})();
