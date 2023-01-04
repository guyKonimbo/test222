// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     console.log(msg);
//     console.log(sender);
//     sendResponse("Front the background Script");
// })
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { type: "EXECUTE_SCRIPT" });
  });
  
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.type === 'ON') {
//       chrome.runtime.sendMessage({ type: 'DATA', data: message.data });
//     }
//   });


chrome.tabs.query({
  active: true
  , currentWindow: true
}, function(tabs) {
  // Send a message to the content script of the active tab
  chrome.tabs.sendMessage(tabs[0].id, {
    type: 'inject-css'
  });
});

 