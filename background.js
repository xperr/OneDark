window.addEventListener('DOMNodeRemoved', function() {
  if (document.getElementById('darkstyle_css') == null) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

    link.id     = 'darkstyle_css';
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = chrome.extension.getURL('css_dark.css');
    link.media  = 'all';

    head.appendChild(link);
    
  }
});

var isExtensionOn = true;

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.cmd == "setOnOffState") {
        isExtensionOn = request.data.value;
    }

    if (request.cmd == "getOnOffState") {
        sendResponse(isExtensionOn);
    }
});