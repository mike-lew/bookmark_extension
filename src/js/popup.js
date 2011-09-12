/* Event listener in popup /
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
  */
 
//chrome.extension.onRequest.addListener(displayNode);
//function displayNode(node) {
//	document.getElementById('currentSelect').innerHTML = "Test";
//}

/* display current tab url */
function windowLoaded() {
 	chrome.tabs.getSelected(null, function(tab) {
 		chrome.extension.sendRequest({method:"getSelection"}, function(response) {
  			document.getElementById('currentSelect').innerHTML = response.s;  
		});
 		document.getElementById('currentLink').innerHTML = tab.url;
    });
}
window.addEventListener("load", windowLoaded, false);
