
      chrome.action.onClicked.addListener(tab => {
    // Send a message to the active tab
      console.log("clicked icon on tab ", tab);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
            console.log("clicked icon on tab 555", activeTab);
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });

  });




    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.message=="LOGIN"){
      fetch('https://app.konimbo.co.il/api/v2?storeId=6401&token=6dd043f80df49edb9f50ffd15fdeb8f1b2c76617afe86379ac3f59933cd5b11335cbbd0136192aa9&groupName=group1&modelName=customer')
      .then(response => response.json())
      .then(data => {
        const customerData = data.filter((item) => {return item.email == request.user_name&&item.mobile_phone==request.user_password});
        Promise.all(customerData).then(() => {
          if (customerData.length!=0) {
            console.log("login");
            console.log("login 100% 888",customerData[0].dataRecord.vars.V2_category);
            sendResponse({ response: customerData[0].dataRecord.vars.V2_category }); 
            chrome.storage.local.set({ isLoggedIn: true });    
            chrome.storage.local.set({ v2_category_link: customerData[0].dataRecord.vars.V2_category }); 
            chrome.storage.local.set({ store_name: customerData[0].dataRecord.vars.store_name}); 
            // if (request.remember_me=="checked") {
            //   // Save login information to chrome.storage
            // chrome.storage.local.set({ isLoggedIn: true });    
            // chrome.storage.local.set({ v2_category_link: customerData[0].dataRecord.vars.V2_category }); 
            // }
            
        } else {
          console.log("login erorr");
          sendResponse({ response: 'erorr' });
        }
        });


      }).catch((error) => {
        console.log("שגיאה - לינק קטגוריות לא תקין");
        sendResponse({ response: 'fattal erorr' });
        console.log(error)
      });
    }
    return true;
  });




  


