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
  const handleClick = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL('newTab.html')});
  };
  return (
  <div className="suppliers_Confirmation_ulWrapper" >
  <span className="back_btn" onClick={() => prop.ConfirmationIsActive(false)}></span>
    <h4 className="suppliers__Confirmation_h4"> נמשכו {listSize} מוצרים </h4>
   <span className="suppliers__Confirmation_span" onClick={handleClick}>לחץ כאן לצפייה בכל המוצרים</span>
   <label className={prop.classLabel}>
     {prop.label}
     <div className="suppliers_ulWrapper" >
     <ul className={prop.classUl} >
    </ul>
    </div>
    </label>
    <button type="button" className={"suppliers__button " + prop.eroorIsActive } > אישור משיכת מוצרים</button>  
   </div>
  );
};

export default ConfirmationComponent;