var TrendsChart = (function(){

  var vendor = (navigator.userAgent.match(/(Chrome|Firefox)/) || [])[1];


  var init = function(params){
    initTrendsChart(params);
  };


  const initTrendsChart = (params) => {
    let query = params.query;
    let metricsPromise = params.metrics;
    let settings = Starter.getSettings();
    let geo = settings.country.toUpperCase();
    if (!geo) geo = 'US';
    if (geo === 'UK') geo = 'GB';
    params.geo = geo;
    let property = params.property;
    let timeRange = params.timeRange || 'All Time';
    chrome.runtime.sendMessage({cmd: 'googleTrendsAPI.multiline', data: {
      keyword: query,
      timeRange: timeRange,
      geo: geo,
      property: property || ''
    }}, async (res) => {
      let data = await processTrendsResponse(res, params, metricsPromise);
      if (!data) return;
      renderTrendsChart(params, data);
    });
  };


  const processTrendsResponse = async (res, params, metricsPromise) => {
    try {
      let resolution = res.req.request.resolution;
      let arrTimeline = res.json.default.timelineData;
      if (!arrTimeline.length) return;
      let labels = [];
      let formattedTime = [];
      let values = [];
      let partial = {};
      arrTimeline.map((item, index) => {
        labels.push(item.time*1000);
        formattedTime.push(item.formattedTime);
        values.push(item.value[0]);
        if (item.isPartial) partial[index] = true;
      });
      let chartValues = values;
      let volumeChart = false;
      if (params.showVolume) {
        let convertedValues = await convertInterestToVolume({labels,
          values,
          metricsPromise: metricsPromise,
          timeRange: params.timeRange,
          property: params.property,
          query: params.query
        });
        if (convertedValues) {
          chartValues = convertedValues;
          volumeChart = true;
        }
      }
      let result = {
        volumeChart: volumeChart,
        labels: labels,
        values: chartValues,
        formattedTime: formattedTime,
        resolution: resolution,
        partial: partial
      };
      // $('#xt-trend-chart-root').append('<pre>' + JSON.stringify({
      //   interestValue: interestValue,
      //   interestIndex: lastVals.interestIndex,
      //   interestDate: (new Date(lastVals.interestTS)).toLocaleString(),
      //   interestTS: lastVals.interestTS,
      //   scaleFactor: scaleFactor,
      //   trendValue: trendValue,
      //   trendVals: trendVals
      // }, '', '  ') + '</pre>');
      return result;
    } catch (e) {
      console.log(e);
      return;
    }
  };


  const convertInterestToVolume = async (params) => {
    let {labels, values, metricsPromise, timeRange, property, query} = params;
    let metrics = await metricsPromise;
    if (metrics.error) return;
    if (!metrics.data) return;
    let trendVals = metrics.data[0].trend.split('|');
    let lastVals = getLastNonZeroValues(trendVals, labels, values);
    let trendValue = lastVals.trendValue;
    if (typeof trendValue === 'undefined') return;
    if (trendVals.join('') === '') trendValue = parseInt(metrics.data[0].vol.replace(/,/g, ''));
    if (trendValue === 0) {
      if (property === 'youtube') return;
      if (lastVals.allZeroes) return;
      chrome.runtime.sendMessage({
        cmd: 'api.trend',
        data: {
          query: query
        }
      });
      return;
    }
    let interestValue = lastVals.interestValue;
    let divider = interestValue;
    if (timeRange.match(/(5yrs|12mo)/)) divider = interestValue * 4;
    else if (timeRange.match(/(3mo|30d)/)) divider = interestValue * 30;
    else if (timeRange === '7d') divider = interestValue * (30*24);
    let scaleFactor = trendValue / divider;
    let convertedValues = values.map(value => {
      let res = value * scaleFactor;
      let formattedRes;
      if (res < 30 && timeRange.match(/(3mo|30d|7d)/)) formattedRes = res.toFixed(2);
      else if (res <= 100) formattedRes = parseInt(res);
      else if (res > 100 && res <= 1000) formattedRes = (Math.round(res / 10) * 10);
      else if (res > 1000) formattedRes = Math.round(res / 100) * 100;
      return formattedRes;
    });
    // console.log(params, values, convertedValues, trendValue, interestValue, scaleFactor, lastVals);
    return convertedValues;
  };


  const getLastNonZeroValues = (arrTrend, arrTime, arrInterest) => {
    let sum = arrTrend.reduce((accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue);
    });
    if (sum === 0) return {
      allZeroes: true,
      trendValue: 0
    };
    let today = new Date();
    let endOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0, 23, 59, 59);
    endOfPrevMonth.setHours(endOfPrevMonth.getHours()-endOfPrevMonth.getTimezoneOffset()/60);
    let endTs = endOfPrevMonth.getTime();
    let startIndex = arrTime.length - 1;
    let found = false;
    for (; startIndex >= 0; startIndex--) {
      if (arrTime[startIndex] < endTs) {
        found = true;
        break;
      }
    }
    // find non-zero
    let interestValue;
    let interestIndex;
    if (!found) {
      startIndex = 0; // for 7d & 30d
      for (let i = 0, len = arrTime.length; i < len; i++) {
        if (arrInterest[i] > 0) {
          interestIndex = i;
          interestValue = arrInterest[i];
          break;
        }
      }
    }
    else {
      for (let i = startIndex; i >= 0; i--) {
        if (arrInterest[i] > 0) {
          interestIndex = i;
          interestValue = arrInterest[i];
          break;
        }
      }
    }
    if (typeof interestIndex === 'undefined') {
      for (let i = 0, len = arrTime.length; i < len; i++) {
        if (arrInterest[i] > 0) {
          interestIndex = i;
          interestValue = arrInterest[i];
          break;
        }
      }
    }
    let nonZeroTS = arrTime[interestIndex];
    let d = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    let trendValue;
    for (let i = 0, len = arrTrend.length; i < len; i++) {
      if (nonZeroTS >= d.getTime()) {
        trendValue = arrTrend[i];
        break;
      }
      d.setMonth(d.getMonth() - 1);
    }
    let res = {
      trendValue: trendValue,
      interestIndex: interestIndex,
      interestValue: interestValue,
      interestTS: nonZeroTS
    };
    return res;
  };


  const renderTrendsChart = async (params, data) => {
    console.log('renderTrendsChart', params);
    let $root = $(params.parentSelector);
    $root.addClass(params.parentClassName);
    let rootId = params.rootId;
    let $widgetRoot = $root.find('#' + rootId);
    if (!$widgetRoot[0]) {
      $widgetRoot = $('<div>', {
        id: rootId,
        class: 'xt-ke-card'
      });
      if (params.addFn) {
        params.addFn($widgetRoot, $root);
      }
      else $widgetRoot[params.addMethod]($root);
    }
    else $widgetRoot.text('');

    let timeRangeSelectorHTML = renderTrendTimeRangeSelector(params.timeRange);
    var settings = Starter.getSettings();
    let country = settings.country.toUpperCase();
    if (!country) country = 'Global';
    let countryTitle = '(' + country + ')';
    params.country = country;
    params.countryTitle = countryTitle;
    let buttonsHiddenClass = data.volumeChart ? '' : 'xt-hidden';
    let version = chrome.runtime.getManifest().version;
    let html = [
      '<div class="xt-close">✖</div>',
      '<table class="xt-ke-google-trend-title"><tr>',
      '<td><img src="' + chrome.extension.getURL('/img/icon24.png') + '" width="24" height="24" style="vertical-align:middle">',
      '</td><td>',
      `<h3>${params.title} "` + Common.escapeHtml(params.query) + `" ${countryTitle}</h3>`,
      '</td></tr></table>',
      '<table class="xt-google-trend-controls">',
      '<tr><td>',
      timeRangeSelectorHTML,
      '</td><td style="text-align:right">',
      '<div class="xt-ke-google-trend-copy-export-row">',
      `<button class="xt-ke-btn xt-google-trend-copy ${buttonsHiddenClass}">${Common.getIcon('copy')} ${params.buttonCopy}</button>`,
      `<button class="xt-ke-btn xt-google-trend-export ${buttonsHiddenClass}">${Common.getIcon('export')} ${params.buttonExport}</button>`,
      '</div>',
      '</td></tr>',
      '</table>',
      '<div class="xt-google-trend-canvas"></div>',
      `<div class="xt-widget-iframe"><iframe src="https://keywordseverywhere.com/ke/widget.php?apiKey=${settings.apiKey}&source=${params.source}&pur=${params.showVolume ? 0 : 1}&country=${settings.country}&version=${version}&darkmode=${params.darkMode}&query=${encodeURIComponent(Common.escapeHtml(params.query))}" scrolling="no"></iframe></div>`
    ].join('\n');
    $widgetRoot.html(html);
    initTrendsChartEventHandlers(params, $widgetRoot, data);

    let $canvas = $('<canvas>', {id: 'xt-trend-chart'}).appendTo($widgetRoot.find('.xt-google-trend-canvas'));
    var ctx = $canvas[0].getContext('2d');

    Chart.defaults.multicolorLine = Chart.defaults.line;
    Chart.controllers.multicolorLine = Chart.controllers.line.extend({
      draw: function(ease) {
        let meta = this.getMeta();
        let points = meta.data || [];
        let regularColor = this.getDataset().borderColor;
        let partialColor = this.getDataset().partialColor;
        let area = this.chart.chartArea;
        let originalDatasets = meta.dataset._children
          .filter(function(data) {
            return !isNaN(data._view.y);
          });

        function _setColor(newColor, meta) {
          meta.dataset._view.borderColor = newColor;
        }

        if (!partialColor) {
          Chart.controllers.line.prototype.draw.call(this, ease);
          return;
        }

        for (let i = 0, len = meta.data.length; i < len; i++) {
          var value = meta.data[i];
          if (data.partial[i]) {
            _setColor(partialColor, meta);
            meta.dataset._children = originalDatasets.slice(i-1, i+1);
            meta.dataset.draw();
          }
          else {
            _setColor(regularColor, meta);
            meta.dataset._children = originalDatasets.slice(i-1, i+1);
            meta.dataset.draw();
          }
        }
        meta.dataset._children = originalDatasets;
        points.forEach(function(point) {
          point.draw(area);
        });
      }
    });

    var grayColor = params.darkMode ? '#aaa' : '#70757a';
    var gridColor = params.darkMode ? '#3e3e3e' : '#d9e2ef';
    var chartColor = '#c0504f';

    var chart = new Chart(ctx, {
      type: 'multicolorLine',
      data: {
        labels: data.labels,
        datasets: [{
          label: '',
          backgroundColor: chartColor,
          borderColor: chartColor,
          // partialColor: '#00f000',
          data: data.values,
          colors: ['', 'red', 'green', 'blue']
        }],
        type: "line",
        pointRadius: 0,
        lineTension: 0,
        borderWidth: 1
      },
      options: {
        aspectRatio: params.aspectRatio || 2,
        elements: {
          point:{
            radius: 0
          }
        },
        legend: {
          display: false
        },
        animation: {
          duration: 0
        },
        scales: {
          xAxes: [{
            type: "time",
            distribution: "series",
            offset: true,
            ticks: {
              major: {
                enabled: true,
                fontStyle: "bold"
              },
              source: "data",
              autoSkip: true,
              autoSkipPadding: 75,
              maxRotation: 0,
              sampleSize: 100,
              fontColor: grayColor,
            },
            gridLines: {
              display: false
            },
          }],
          yAxes: [{
            ticks: {
              display: data.volumeChart,
              beginAtZero: true,
              padding: 10,
              fontColor: grayColor,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            },
            gridLines: {
              borderDashOffset: [2],
              drawBorder: false,
              color: gridColor,

              zeroLineColor: gridColor,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            scaleLabel: {
              display: true,
              fontColor: grayColor,
              labelString: data.volumeChart ? 'Search Volume' : 'Search Interest'
            }
          }]
        },
        tooltips: {
          intersect: false,
          mode: "index",
          callbacks: {
            label: function(e, t) {
              if (!data.volumeChart) return '';
              let res = parseFloat(e.value).toLocaleString();
              return `${res} (${data.resolution.toLowerCase()})`;
            },
            title: function(e, t){
              let index = e[0].index;
              let res = data.formattedTime[index];
              return res;
            }
          }
        }
      }
    });
    chart.update();
  };


  const formatDateString = (resolution, ts) => {
    let res;
    let d = new Date(ts);
    if (resolution === 'HOUR') res = d.toLocaleString();
    if (resolution === 'WEEK' || resolution === 'DAY') {
      res = d.toLocaleDateString();
    }
    else if (resolution === 'MONTH') {
      res = Common.getDate('MON YYYY', d);
    }
    return res;
  };


  const initTrendsChartEventHandlers = (params, $widgetRoot, data) => {
    const getExportArray = (withHeaders) => {
      let arrRes = [];
      if (withHeaders) arrRes.push(['Date', `Search Volume ${params.countryTitle}`]);
      data.formattedTime.map((val, index) => {
        // let date = formatDateString(data.resolution, val);
        let date = val;
        arrRes.push([date, data.values[index]]);
      });
      return arrRes;
    };
    $widgetRoot.find('.xt-close').click(e => {
      e.preventDefault();
      $widgetRoot.remove();
    });
    $widgetRoot.find('.xt-google-trend-canvas').click(e => {
      e.preventDefault();
      let date = '';
      let mapping = {
        'All Time': 'all',
        '5yrs': 'today 5-y',
        '12mo': '',
        '3mo': 'today 3-m',
        '30d': 'today 1-m',
        '7d': 'now 7-d'
      };
      if (mapping[params.timeRange]) date = '&date=' + encodeURIComponent(mapping[params.timeRange]);
      let url = `https://trends.google.com/trends/explore?geo=${params.geo}&q=` + encodeURIComponent(params.query) + date;
      if (params.property === 'youtube') url += '&gprop=youtube';
      chrome.runtime.sendMessage({
        cmd: 'new_tab',
        data: url
      });
    });
    $widgetRoot.find('.xt-trend-time').click(function(e){
      e.preventDefault();
      $widgetRoot.find('.xt-trend-spinner').removeClass('xt-hidden');
      let val = this.dataset.val;
      params.timeRange = val;
      initTrendsChart(params);
      chrome.runtime.sendMessage({
        cmd: 'setting.set',
        data: {key: 'googleTrendChartDefaultTime', value: val}
      });
    });
    $widgetRoot.find('.xt-google-trend-copy').click(e => {
      e.preventDefault();
      Common.clipboardWrite( CSV.stringify(getExportArray(true), '\t') );
    });
    $widgetRoot.find('.xt-google-trend-export').click(e => {
      e.preventDefault();
      let query = params.query;
      let property = params.property;
      if (!property) property = 'google';
      let filename = ['trend', property, query.replace(/\s+/g, '-'), params.country.toLowerCase(), params.timeRange.replace(/\s+/g, '-'), Date.now()].join('-') + '.csv';
      filename = filename.toLowerCase();
      let csv = CSV.stringify( getExportArray(true), ',' );
      if (vendor === 'Firefox') {
        chrome.runtime.sendMessage({
          cmd: 'file.download',
          data: {
            content: csv,
            name: filename
          }
        });
        return;
      }
      var csvData = 'data:application/csv;charset=utf-8,' + '\ufeff' + encodeURIComponent(csv);
      Common.saveToFile(csvData, filename);
    });
  };


  const renderTrendTimeRangeSelector = (active) => {
    if (!active) active = 'All Time';
    let items = ['7d', '30d', '3mo', '12mo', '5yrs', 'All Time'];
    let html = '';
    items.map(item => {
      let activeClass = active === item ? 'xt-trend-time-active' : '';
      html += `<a href="#" class="xt-trend-time ${activeClass}" data-val="${item}">${item}</a>`;
    });
    html += '<span class="xt-trend-spinner xt-hidden"></span>';
    return '<div class="xt-trend-time-row">' + html + '</div>';
  };


  return {
    init: init,
    processTrendsResponse: processTrendsResponse
  };

})();
