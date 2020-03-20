chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'alert("[" + document.title + "](" + window.location.href + ")")'
    });
  });