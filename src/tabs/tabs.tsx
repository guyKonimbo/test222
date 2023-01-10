import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './tabs.css'
import { Link } from 'react-router-dom'

function Tabs() {
    const [listData, setlistData] = useState([]);
useEffect(() => {
        try {
        chrome.storage.local.get(['productsData'], result => {
                if(result.productsData){
                    setlistData(result.productsData);
            }})
        }catch (error) {
          console.log(error);
        }
      }, []);


    return (
        <div className="suppliers_ulWrapper" >
        <ul>
         {listData.map(item => 
         {
           const randomNumber = Math.floor(Math.random() * 10000); 
           // console.log('randomNumber',randomNumber);
         return (
                 
           <li key={randomNumber} >         
             <label className="wrap_product_line"><a href={item.product_url} target="_blank"><span className="product_line">{item.page_title}</span></a></label>
             <span  className={"delete_btn "+ item.category_id}></span>
           </li>
         )})}
       </ul>
       </div>
    )
}

export default Tabs