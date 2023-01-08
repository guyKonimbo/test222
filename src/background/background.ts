
console.log('woro333333333');
const val55 = "valconst"
const objback = { key: 'value2'}
var dataObj = {
urllik: "link",
nameproducy:"namenn"
};
chrome.storage.local.set(dataObj)

chrome.storage.local.get(['urllik'], result => {
    console.log('get val back urllik',result.urllik) // returns value
})


  chrome.action.onClicked.addListener(tab => {
    // Send a message to the active tab
      console.log("clicked icon on tab ", tab);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });



  


