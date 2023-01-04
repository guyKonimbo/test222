import './contentScript.css'
// chrome.runtime.sendMessage('I am loading content script', (response) => {
//     console.log(response);
//     console.log('I am content script')

// })

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.message);
  injectedFunction(request.message);

  sendResponse({message: 'hello from the content script'});
});

window.onload = (event) => {
    console.log('page is fully loaded445');     
};
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
   console.log('inject-css',message.type);
  if (message.type === 'inject-css') {
     console.log('inject-css');
      chrome.tabs.insertCSS({
    code: 'input.checkbox_konimbo:after {content: "";background: url(https://konimboimages.s3.amazonaws.com/system/photos/336358/original/6b109bee5978405c70861ccc8d7b7c78.png);width: 15px;height: 15px;display: block;background-size: 15px;position: relative;right: 14px;}' 
  });
  }
});


  function injectedFunction(state) {
    if(state=="ON"){

 console.log("w6666");

  console.log("state on",state);
  const aTags = document.querySelectorAll('a');
  for (let i = 0; i < aTags.length; i++) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox_konimbo';
  checkbox.value = aTags[i].href;
  aTags[i].appendChild(checkbox);
  }
 const checkboxes2 = document.querySelectorAll('input[type=checkbox].checkbox_konimbo');
    for (let i = 0; i < checkboxes2.length; i++) {
       let checkboxactive = checkboxes2[i];
   checkboxactive.addEventListener('change', function() {
    if(this.checked){
        localStorage.setItem('checkboxValue', this.value);
    }
        
     });  
    }

}
  else{
   const checkboxes = document.querySelectorAll('input[type=checkbox].checkbox_konimbo');
   console.log("state off1",state);
   for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  if(checkbox.classList.contains('checkbox_konimbo')){
  checkbox.parentNode.removeChild(checkbox);
   }
  }  
  }
}
