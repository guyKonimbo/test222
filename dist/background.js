chrome.browserAction.onClicked.addListener((function(e){chrome.tabs.sendMessage(e.id,{type:"EXECUTE_SCRIPT"})})),chrome.runtime.onMessage.addListener((function(e,n,t){"DATA"===e.type&&chrome.runtime.sendMessage({type:"DATA",data:e.data})}));