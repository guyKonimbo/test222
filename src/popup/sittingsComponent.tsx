import React, { useState , useRef ,useEffect}  from 'react';

function SittingsComponent(prop) {

  const input_jsonLink = useRef(null);

  console.log('SittingsComponent');
  useEffect(() => {
    try {
      if(localStorage.getItem('jsonLink')){
        input_jsonLink.current.value = localStorage.getItem('jsonLink');
        console.log('get jsonLink');
      }
    }catch (error) {
      console.log(error);
    }
  }, []);


  

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        localStorage.setItem('jsonLink',input_jsonLink.current.value);
         prop.setJsonLink(input_jsonLink.current.value); 
         prop.SittingsIsActive(false); 
         console.log('set jsonLink');       
    }catch (error) {
    console.log(error);
  }
  }



  return (
    <form onSubmit={handleSubmit} >
      <span className="back_btn" onClick={() => prop.SittingsIsActive(false)}></span>
      <label className="suppliers__label">
        הכנס/י לינק קטגוריות החנות 
      <input  type="text" name="jsonLink"  ref={input_jsonLink}  />
      </label>
      <button className='suppliers__button' type="submit">שמירה</button>
    </form>
  );
}

export default SittingsComponent;