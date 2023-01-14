import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './tabs.css'
import { Link } from 'react-router-dom'

function Tabs() {
    const [listData, setlistData] = useState([]);
    const [listSize, setlistSize] = useState("");
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('show_all_selected');
    const [erorrMsg, setErorrMsg] = useState("");
    const [storeName, setstoreName] = useState("");
useEffect(() => {
        try {
        chrome.storage.local.get(['productsData'], result => {
                if(result.productsData){
                    setlistData(result.productsData);
                    setlistSize(result.productsData.length);
            }})
            chrome.storage.local.get(['store_name'], result => {
              if(result.store_name){
                setstoreName(result.store_name);
          }})
            chrome.storage.local.get('v2_category_link', result => { 
              if(result.v2_category_link){
              fetch(result.v2_category_link)
                .then(response => response.json())
                .then(data => {
                  setOptions(data);
                }).catch((error) => {
                  setErorrMsg("שגיאה - לינק קטגוריות לא תקין");
                  console.log(error)
                });
              }else{
                console.log('else prop.jsonLinkStoreCategory');
                setErorrMsg('יש לעדכן לינק קטגוריות חנות (ניתן לעדכן בלחיצה על אייקון הגדרות)');
              }
            })
        }catch (error) {
          console.log(error);
        }
      }, []);

      useEffect(() => {
        try {
          if(listData.length!=0){
          chrome.storage.local.set({ productsData: listData}, () => {
            chrome.storage.local.get(['productsData'], result => {
              if(result.productsData){
                  setlistSize(result.productsData.length);
          }})
          });
          // localStorage.setItem('data', JSON.stringify(list)); 
          console.log('delet data',listData);
          }
        }catch (error) {
          console.log(error);
        }
      }, [listData]);

    
      const handleClick = (id) => {
          const updatedItems = listData.filter(item => item.id !== id);
          setlistData(updatedItems);
        }
        function handleChange(event) {
          setSelectedOption(event.target.value);
        }

    return (
    <div className="suppliers_allProducts_wrapper" >
          <h1>משיכת מוצרים</h1>
      <div className="suppliers_total_items"  >מוצרים שנמשכו: <span> {listSize} </span></div>
      <div className="suppliers_total_items"  > שם החנות: <span> {storeName} </span></div>
      <div className="suppliers_total_items"  > שם הספק: <span>  </span></div>
      <div className="suppliers_filter_items" >
      <span className="headline_filter_items" >סינון מוצרים:</span>
      <label className="suppliers__label">
      <span> קטגוריה:</span>
      <select value={ selectedOption}  onChange={handleChange} >
      <option key="22222" value="show_all_selected" selected >הצג הכל</option>
      { options.map((option,index) => (<option key={index} value={option.id}>{option.title_he}</option>))}         
      </select>      
     </label>  
     { erorrMsg ? <div className="erorr_msg">{erorrMsg}</div> : ""}
      </div>
      <div className="suppliers_table_wrapper" >
       <table>
            <thead>
              <tr>
                <th className='head_product_name'>שם המוצר</th>
                <th className='head_product_cat' >קטגורית מוצר</th>
                <th className='head_product_link' >קישור למוצר</th>
                <th className='head_product_delete'>מחיקה</th>
              </tr>
            </thead>
            <tbody>
              {listData.filter(
                               function(item) {
                                if (selectedOption=="show_all_selected") {
                                    return true;
                                } else {
                                  if(item.category_id == selectedOption){
                                    return true;
                                  }
                                }
                              }
              
              ).map(item => (
                <tr key={item.id}>
                  <td className='product_name'>{item.page_title}</td>
                  <td className='product_cat'>{item.category_name}</td>
                  <td className='product_link'><a className="table_product_url" href={item.product_url}  target="_blank" ></a></td>
                  <td className='product_delete'><span  className={"delete_btn "+ item.category_id} onClick={() =>{  return handleClick(item.id)}}></span></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>


       </div>
    )
}

export default Tabs