import './popup.css'
import React , { useState ,useEffect}  from 'react';
import Select from './selectComponent';
import ListWithRemoveItem from './ulComponent';
import AddProduct from './AddProduct'
import SittingsComponent from './sittingsComponent'


const Popup = () => {
    const options = [
        { label: 'Fruit', value: 'fruit' },
        { label: 'Vegetable', value: 'vegetable' },
        { label: 'Meat', value: 'meat' },
      ];
    
       const [value, setValue] = React.useState("");
       const [test, setTest] = React.useState('t');
       const [val, setVal] = React.useState();
       const [data, setData] = useState([]);
       const [sittingsIsActive, setSittingsIsActive] = useState(false);
       const [jsonLinkStoreCategory, setJsonLinkStoreCategory] = useState("");
       const [eroorIsActive, setErorrIsActive] = useState(' ');
       const [isChecked, setIsChecked] = useState(false);

       console.log('new 2244');
      //  const [headlineText, setHeadlineText] = useState("משיכת מוצרים");
       
        useEffect(() => {
          chrome.storage.local.get(['productsData'], result => {
            if(result.productsData){
              setData(prevdata=> {return [...prevdata,...result.productsData]});   
              setTimeout(function(){ console.log('local.get1 prev',data)}, 6000);
              
              }})
            }, []);
  
        // retrieve the JSON data from local storage and parse it
        // const dataJSON = JSON.parse(localStorage.getItem('data'));
        // console.log('dataJSON1',dataJSON);
        // console.log('localStorage.getItem',localStorage.getItem('data'));
        // if(!!localStorage.getItem('data')){
        // setData(dataJSON);
        // console.log('dataJSON is not empty',dataJSON);
        //  }
      

      useEffect(() => {
      if(isChecked){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "ON"}, function(response) {
      console.log(response);
    });
    });
    }else{
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "OFF"}, function(response) {
      console.log(response);
    });
    });
    }
      }, [isChecked]);


      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request.message);
        chrome.storage.local.get(['productsData'], result => {
                if(result.productsData){
                  const array = result.productsData;
                  const dataInput = { category_id: value , product_url: request.message ,id: Array.length+1};
                  chrome.storage.local.set({ productsData: [...array,dataInput] }, () => {
                  console.log('Array updated' ,  [...array,dataInput]);
                  setData([...array,dataInput]);   
                  });
                }else{
                  const datainput = { category_id: value , product_url: request.message ,id:0};
                  chrome.storage.local.set({ productsData: [datainput] }, () => {
                    console.log('Array saved to local storage' ,  [datainput]);
                    setData(prevdata=> [...prevdata,datainput]);   
                  });

                }
        });
      });




  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  } 
       let headlineText = <h1  className='suppliers__headline'>משיכת מוצרים</h1>
      if(sittingsIsActive){
        headlineText = <h1 className='suppliers__headline'> הגדרות</h1>
      }
      const getval = (val) => {
        setValue(val);
      };
    
       const getJSON1 = (val) => {
        setData(val);
      };
      const setJsonLink = (val) => {
        setJsonLinkStoreCategory(val);
      };

      const SittingsIsActive = (val) => {
        setSittingsIsActive(val);
      };
      const ErorrIsActive = (val) => {
        setErorrIsActive(val);
      };
      return (
        
        <div className='suppliers_wrapper'>
        <div className='suppliers__headline_wrapper'>
        {headlineText}
        <span className="sittings_btn" onClick={() => setSittingsIsActive(true)}></span>
        </div>

        {sittingsIsActive === true ? (<SittingsComponent setJsonLink={setJsonLink} SittingsIsActive={SittingsIsActive}  /> )
        :
      (
        <div>
        <label className='suppliers__checkbox'>
        אפשר הוספת מוצרים       
      <input type="checkbox" checked={isChecked}  onChange={handleCheckboxChange}></input>
        <span className="checkbox-blog-switch">
        </span>
        </label>
        {/* <AddProduct addjson={getJSON1} /> */}
        <Select
          label="בחרו קטגוריה לשיוך המוצרים אצלכם בחנות"
          classLabel="suppliers__label"
          addVal={getval}
          fetchLink={jsonLinkStoreCategory}
          ErorrIsActive={ErorrIsActive}
        />
        <ListWithRemoveItem addjsonData={data} val={value} label="קישורי מוצרים" classLabel="suppliers__label" classUl="suppliers__ul"/> 
        <button type="button" className={"suppliers__button " + eroorIsActive } >משיכת מוצרים</button>   
        </div>
        )
        }
 
            <p>We eat {value}!</p>
          </div>
      );
};

export default Popup;