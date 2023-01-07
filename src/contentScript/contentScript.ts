import './contentScript.css'
// chrome.runtime.sendMessage('I am loading content script', (response) => {
//     console.log(response);
//     console.log('I am content script')

// })

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.message);
  injectedFunction(request.message);
});

window.onload = (event) => {
    console.log('page is fully loaded445');     
    const val11 = "dom pagee";
};



  function injectedFunction(state) {
    if(state=="ON"){

 console.log("wravvvv");

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
      chrome.runtime.sendMessage({ message: this.value});
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
