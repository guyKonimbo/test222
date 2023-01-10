import React, { useState, useEffect  , useRef } from 'react';


const Select = (prop) => {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [erorrMsg, setErorrMsg] = useState("");
   
  
    useEffect(() => {
      chrome.storage.local.get('v2_category_link', result => { 
      if(result.v2_category_link){
        console.log('prop.fetchLink', prop.fetchLink);
      fetch(result.v2_category_link)
        .then(response => response.json())
        .then(data => {
          setOptions(data);
          // setSelectedOption(data[0].id);
          // prop.addVal(data[0].id);
          prop.ErorrIsActive("");
        }).catch((error) => {
          setErorrMsg("שגיאה - לינק קטגוריות לא תקין");
          prop.ErorrIsActive("erorr_btn");
          console.log(error)
        });
      }else{
        console.log('else prop.jsonLinkStoreCategory', prop.fetchLink);
        prop.ErorrIsActive("erorr_btn");
        setErorrMsg('יש לעדכן לינק קטגוריות חנות (ניתן לעדכן בלחיצה על אייקון הגדרות)');
      }
    })
    }, []); // the empty array means the effect will only run once when the component mounts
    



    function handleChange(event) {
      setSelectedOption(event.target.value);
      prop.addVal(event.target.value);
    }

  return (
    <label className={prop.classLabel}>
      {options.length !=0 ? 
      (<select value={selectedOption}  onChange={handleChange} >
          <option disabled={true} value="">{prop.label}</option>
        { options.map((option,index) => (
          <option key={index} value={option.id}>{option.title_he}</option>
        ))
        }
      </select>)      
      :  
      (<div className="erorr_msg">{erorrMsg}</div>)}

    </label>  
  );

};


export default Select;