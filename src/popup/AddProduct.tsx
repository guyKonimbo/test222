import React, { useState , useRef ,useEffect}  from 'react';

function AddProduct(prop) {
  const [newObject, setDataInput] = useState({});
  const [newArray, setArrayInput] = useState([]);
  const [isEmptyObject, setisEmptyObject] = useState(false);
  const input_category_id = useRef(null);
  const input_product_name = useRef(null);

  var flaggg = 0;
  console.log('ffffffffffff');
  useEffect(() => {
    try {
      if(!localStorage.getItem('data')){
        setisEmptyObject(true);
      }
    }catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(() => {
    // do something after the state has been updated
    if(newArray.length!=0){
    localStorage.setItem('data', JSON.stringify(newArray)); 
    setisEmptyObject(false);
    prop.addjson(JSON.parse(localStorage.getItem('data')));
    }
  },[newArray]);



 
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        const datainput ={
          category_id: input_category_id.current.value , 
          product_name: input_product_name.current.value,
          item: newArray.length+1
        }
        if(isEmptyObject){
        setArrayInput(prevnewArray=> [...prevnewArray,datainput]);   
        }else{
          const data = JSON.parse(localStorage.getItem('data'));
          setArrayInput([...data,datainput]); 
        }
        input_category_id.current.value = "";
        input_product_name.current.value = "";
       
  }catch (error) {
    console.log(error);
  }
  }



  return (
    <form onSubmit={handleSubmit} className="suppliers_ulWrapper none">
      <input type="text" name="category_id"  ref={input_category_id}  />
      <input type="text" name="product_name" ref={input_product_name}  />
      <button type="submit">Save</button>
    </form>
  );
}

export default AddProduct;