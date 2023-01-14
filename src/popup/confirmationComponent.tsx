import React, { useState, useEffect } from 'react';



const ConfirmationComponent = (prop) => {

  const [listSize, setlistSize] = useState("");

console.log('new ul555');
  useEffect(() => {
    try {
    chrome.storage.local.get(['productsData'], result => {
            if(result.productsData){
                setlistSize(result.productsData.length);
        }})
    }catch (error) {
      console.log(error);
    }
  }, []);

  chrome.storage.onChanged.addListener(() => {
    try {
      chrome.storage.local.get(['productsData'], result => {
              if(result.productsData){
                  setlistSize(result.productsData.length);
                  prop.setDataFromConfirmation(result.productsData);
          }})


      }catch (error) {
        console.log(error);
      }
  });

  const handleClick = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('newTab.html')});
  };
  return (
  <div className="suppliers_Confirmation_ulWrapper Confirmation__Wrapper" >
    <h4 className="suppliers__Confirmation_h4">נמשכו <span className="suppliers__Confirmation_span" onClick={handleClick}>  {listSize} מוצרים </span> </h4>
   <label className={prop.classLabel}>
     {prop.label}
     <div className="suppliers_ulWrapper Confirmation__ulWrapper" >
     <ul className={prop.classUl} >
    </ul>
    </div>
    </label>
     <label className="suppliers_checkbox__label" ><input className="suppliers__login_checkbox" name="Me" type="checkbox" /><span className="suppliers__login_span"> מאשר/ת את <a href="#" className="suppliers__Confirmation_a" >תנאי השימוש</a> </span></label>
    <div className="btn_Wrapper">
    <span className="back_btn" onClick={() => prop.ConfirmationIsActive(false)}>הקודם</span>
    <button type="button" className={"Confirmation__button " + prop.eroorIsActive } > משוך מוצרים</button>  
    </div>
   </div>
  );
};

export default ConfirmationComponent;