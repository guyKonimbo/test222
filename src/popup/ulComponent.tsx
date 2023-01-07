import React, { useState, useEffect } from 'react';

const initialList = [
  { id: '2',val: '243108', name: 'smart Learn React' },
  { id: '24',val: '243108', name: 'smart Learn Firebase' },
  {id: '8', val: '243109', name: 'tab Learn GraphQL' },
  { id: '243',val: '243109', name: 'tab Learn React' },
  { id: '5',val: '243110', name: 'watch Learn Firebase' },
  {id: '4', val: '243110', name: 'watch Learn GraphQL' }
];


const ListWithRemoveItem = (prop) => {

  const [list, setList] = useState(prop.addjsonData);


  useEffect(() => {
    try {
      setList(prop.addjsonData);
      console.log('prop.addjson22',list);
    }catch (error) {
      console.log(error);
    }
  }, [prop.addjsonData]);

  useEffect(() => {
    try {
      if(list.length!=0){

      // localStorage.setItem('data', JSON.stringify(list)); 
      console.log('delet prop',list);
      }
    }catch (error) {
      console.log(error);
    }
  }, [list]);
  
  const handleClick = (id) => {
    const updatedItems = list.filter(item => item.category_id !== id);
    setList(updatedItems);
  }

  console.log('prop.addjson8888888888',prop.addjsonData);
  console.log('list11',list);
  return (
  
   <label className={prop.classLabel}>
    {prop.label}
     <div className="suppliers_ulWrapper" >
     <ul className={prop.classUl} >
      {list&&list.filter(item => item.category_id == prop.val).map(item => 
      {
        const randomNumber = Math.floor(Math.random() * 10000); 
        console.log('randomNumber',randomNumber);
      return (
              
        <li key={randomNumber} >         
          <label className="wrap_product_line"><span className="product_line">{item.product_url}  </span></label>
          <span  className={"delete_btn"+ item.category_id} onClick={() =>{  return handleClick(randomNumber)}}></span>
        </li>
      )})}
     {/* {data.map((item) => (
        <li key={item.category_id}>{item.product_name}</li>
      ))} */}
    </ul>
    </div>
    </label>
   
  );
};

export default ListWithRemoveItem;