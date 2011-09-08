/* Event listener in popup */
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    else
      sendResponse({}); // snub them.
  });

/* Listen for tab URL */
window.addEventListener("load", windowLoaded, false);
    function windowLoaded() {
      chrome.tabs.getSelected(null, function(tab) {
        document.getElementById('currentLink').innerHTML = tab.url;
      });
    }