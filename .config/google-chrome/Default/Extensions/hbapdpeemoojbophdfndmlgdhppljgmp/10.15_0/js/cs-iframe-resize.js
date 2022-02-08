var getURLParam = function(sParam, locationObj) {
  if (!locationObj) locationObj = document.location;
  var sPageURL = locationObj.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
};


window.onload = function() {
  var style = window.getComputedStyle(document.body);
  var marginH = parseInt(style['margin-top']) + parseInt(style['margin-bottom']);
  var isEmpty = document.body.textContent.replace(/\s*/g, '') === '';
  if (document.body.querySelector('img')) isEmpty = false;
  var data = {
    height: document.body.offsetHeight + marginH,
    isEmpty: isEmpty,
    source: getURLParam('source')
  };
  window.parent.postMessage({cmd: 'xt.resize', data: data}, '*');
};
