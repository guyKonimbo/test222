import React, { useState , useRef ,useEffect}  from 'react';

function AddProduct(prop) {
  const [newObject, setDataInput] = useState({});
  const [newArray, setArrayInput] = useState([]);
  const [isEmptyObject, setisEmptyObject] = useState(false);
  const input_category_id = useRef(null);
  const input_product_name = useRef(null);
  // let arr = [];
  var flaggg = 0;
  console.log('ffffffffffff');
  useEffect(() => {
    try {
      // const dataIsEmpty = JSON.parse(localStorage.getItem('data'));
      // console.log('is empty string',JSON.stringify(dataIsEmpty));
      // console.log('is dataIsEmpty',dataIsEmpty);
      if(!localStorage.getItem('data')){
        setisEmptyObject(true);
        console.log('is empty');
      }
    }catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(() => {
    console.log('useee',newArray); 
    // do something after the state has been updated
    if(newArray.length!=0){
    localStorage.setItem('data', JSON.stringify(newArray)); 
    setisEmptyObject(false);
    prop.addjson(JSON.parse(localStorage.getItem('data')));
    console.log('ifff',newArray.length); 
    }else{

      console.log('ifff',newArray.length); 
    }
  },[newArray]);


//   useEffect(() => {if(flaggg==0){
//      const existingData5 = JSON.parse(localStorage.getItem('data'));
//     if(existingData5){

//        try {
// setDataInput(prevData => ({ ...prevData, ...existingData5 }));
// setTimeout(function(){ console.log('existingData1',arr); console.log('existingData0',existingData5);}, 6000);
      
    
// } catch (error) {
//   console.log(error);
//   // handle the error
// }
     
//       } 
//      flaggg++;
//     }
// }, []);
 


  const handleSubmit = (event) => {
    //  console.log(arr);
    event.preventDefault();
    try {
    //   const datainput = {
    //     category_id: input_category_id.current.value,
    //     product_name: input_product_name.current.value
    // }
        // arr.push( datainput);
       
        const datainput ={
          category_id: input_category_id.current.value , 
          product_name: input_product_name.current.value,
          item: newArray.length+1
        }
        if(isEmptyObject){
        setArrayInput(prevnewArray=> [...prevnewArray,datainput]);   
        // setArrayInput(prevnewArray => prevnewArray.concat(datainput));
        // localStorage.setItem('data', JSON.stringify(newArray));
      
        // setTimeout(function(){ console.log('if newArray time',newArray); }, 3000);
       
        // console.log('if existingData data ',data);
        }else{
          const data = JSON.parse(localStorage.getItem('data'));
          console.log('out existingData data ',data);
          setArrayInput([...data,datainput]); 
          // setArrayInput(data.concat(datainput));  
      
          console.log('else newArray',newArray); 
          console.log('else existingData data ',data);
        }



        // setDataInput({ category_id: input_category_id.current.value , product_name: input_product_name.current.value});
        // console.log('newObject',newObject)
        // setDataInput(prevData =>({...prevData, ...datainput }));
        // setDataInput(prevData => ({ ...prevData, ...datainput }));
        // setDataInput(prevData =>(console.log('prevData',prevData)));
        // localStorage.setItem('data', JSON.stringify(arr));
        // setDataInput(arr);
        input_category_id.current.value = "";
        input_product_name.current.value = "";
       
  }catch (error) {
    console.log(error);
  }
  }



  return (
    <form onSubmit={handleSubmit} className="suppliers_ulWrapper">
      <input type="text" name="category_id"  ref={input_category_id}  />
      <input type="text" name="product_name" ref={input_product_name}  />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddProduct;