import './contentScript.css'
// chrome.runtime.sendMessage('I am loading content script', (response) => {
//     console.log(response);
//     console.log('I am content script')

// })

chrome.runtime.onMessage.addListener(function(request) {
  console.log('click');  
  console.log(request.message);
  injectedFunction(request.message);
});

window.onload = (event) => {
    console.log('page is fully loaded445');     
    const val11 = "dom pagee";

};



  function injectedFunction(state) {
  switch(state) {
  case "ON":
    // code block
  console.log("switch on");
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
      chrome.runtime.sendMessage({ 
       type: 'checkbox_clicked',
       message: this.value });
    }     
     });  
    }
    break;
  case "OFF":
    // code block
    const checkboxes = document.querySelectorAll('input[type=checkbox].checkbox_konimbo');
   console.log("state off1",state);
   for (let i = 0; i < checkboxes.length; i++) {
  const checkbox = checkboxes[i];
  if(checkbox.classList.contains('checkbox_konimbo')){
  checkbox.parentNode.removeChild(checkbox);
   }
  }  
    break;
  case "clicked_browser_action":
    // code block
          console.log('switch ifrmae_is_on555');  
         if (document.getElementById('iframe_suppliers_extension')) { 
  // At least one iframe element with the class "myClass" exists
          const iframe =  document.getElementById('iframe_suppliers_extension');
           iframe.remove();
        } else {
  // No iframe elements with the class "myClass" exist
    const iframe = document.createElement('iframe');
    iframe.id = 'iframe_suppliers_extension';
    iframe.src = chrome.runtime.getURL('popup.html');
    document.body.appendChild(iframe);
          }
    break;
  default:
    // code block
}

}
