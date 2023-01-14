import React, { useState, useEffect  , useRef } from 'react';


const Select = (prop) => {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [erorrMsg, setErorrMsg] = useState("");
    const ref_cat_name = useRef(null);
  
    useEffect(() => {
      chrome.storage.local.get('v2_category_link', result => { 
      if(result.v2_category_link){
        console.log('prop.fetchLink', prop.fetchLink);
      fetch(result.v2_category_link)
        .then(response => response.json())
        .then(data => {
          setOptions(data);
          setSelectedOption(data[0].id);
          prop.addVal(data[0].id);
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
      prop.addVal(event.target.value );
    }

    useEffect(() => {        
      chrome.runtime.onMessage.addListener((request) => {
        console.log('reqmsg type55',request.type);
         console.log('reqmsg',request.message);
        if(request.type=="checkbox_clicked"){
        chrome.storage.local.get(['productsData'], result => {
                if(result.productsData){
                  fetch(request.message)
                       .then(response => response.text())
                       .then(html => {
                        const doc = new DOMParser().parseFromString(html, "text/html");
                        const title = doc.title;
                        console.log(title);
                            const array = result.productsData;
                            const randomNumber_xx = Math.floor(Math.random() * 10000); 
                            const dataInput = { category_name: ref_cat_name.current.options[ref_cat_name.current.selectedIndex].text , category_id: ref_cat_name.current.value , product_url: request.message ,id: randomNumber_xx ,page_title:title };
                            chrome.storage.local.set({ productsData: [...array,dataInput] }, () => {
                            console.log('Array updated' ,  [...array,dataInput]);
                            prop.getJSON1( [...array,dataInput]);   
                            });
                         });
                }else{
                    fetch(request.message)
                       .then(response => response.text())
                       .then(html => {
                        const doc = new DOMParser().parseFromString(html, "text/html");
                        const title = doc.title;
                        console.log(title);
                        const datainput = {  category_name: ref_cat_name.current.options[ref_cat_name.current.selectedIndex].text , category_id: ref_cat_name.current.value , product_url: request.message ,id: "0" , page_title:title};
                       chrome.storage.local.set({ productsData: [datainput] }, () => {
                       console.log('Array saved to local storage' ,  [datainput]);
                       prop.getJSON1(prevdata=> [...prevdata,datainput]);   
                       });          
                         });
                }
        });
      }
      });
    }, [])

  return (
    <label className={prop.classLabel}>
      {prop.label}
      <select value={selectedOption} ref={ref_cat_name} onChange={handleChange} >
        { options.map((option,index) => (
          <option key={index} value={option.id}>{option.title_he}</option>
        ))
        }
      </select>      
       {options.length !=0 ? ("") : (<div className="erorr_msg">{erorrMsg}</div>)}

    </label>  
  );

};


export default Select;