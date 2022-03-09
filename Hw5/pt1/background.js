// Called when the user clicks on the browser action (extension icon).
chrome.browserAction.onClicked.addListener(function(tab) {

    alert('Extension icon is clicked, run eastern.js now');

    chrome.tabs.executeScript({
       file: 'eastern.js'
  });
});
