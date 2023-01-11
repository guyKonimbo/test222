import './popup.css'
import React , { useState ,useEffect , useRef}  from 'react';
import Select from './selectComponent';
import ListWithRemoveItem from './ulComponent';
import AddProduct from './AddProduct'
import SittingsComponent from './sittingsComponent'
import LoginComponent from './loginComponent'
import ConfirmationComponent from './confirmationComponent';


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
       const [sittingsIsActive, setSittingsIsActive] = useState(true);
       const [jsonLinkStoreCategory, setJsonLinkStoreCategory] = useState("");
       const [eroorIsActive, setErorrIsActive] = useState(' ');
       const [isChecked, setIsChecked] = useState(false);
       const refTest = useRef(null);
       const [confirmationIsActive, setconfirmationIsActive] = useState(false);


       console.log('new 666');
      //  const [headlineText, setHeadlineText] = useState("משיכת מוצרים");
       
        useEffect(() => {         
          chrome.storage.local.get(['productsData'], result => {
            if(result.productsData){
              setData(prevdata=> {return [...prevdata,...result.productsData]});   
              setTimeout(function(){ console.log('local.get1 prev',data)}, 6000);
              
              }})
              chrome.storage.local.get('isLoggedIn', result => {
                if(result.isLoggedIn){
                  setSittingsIsActive(false);
                  }})
              chrome.storage.local.get('v2_category_link', result => {
                    if(result.v2_category_link){
                      setJsonLinkStoreCategory(result.v2_category_link);
                      }})
            }, []);


    useEffect(() => {        
      chrome.runtime.onMessage.addListener((request) => {
        console.log('reqmsg type55',request.type);
         console.log('reqmsg',request.message);
        if(request.type=="checkbox_clicked"){
          console.log("refTest val",refTest.current.value );
          const newval = refTest.current.value;
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
                            const dataInput = { category_id: newval , product_url: request.message ,id: randomNumber_xx ,page_title:title };
                            chrome.storage.local.set({ productsData: [...array,dataInput] }, () => {
                            console.log('Array updated' ,  [...array,dataInput]);
                            setData( [...array,dataInput]);   
                            });
                         });
                }else{
                    fetch(request.message)
                       .then(response => response.text())
                       .then(html => {
                        const doc = new DOMParser().parseFromString(html, "text/html");
                        const title = doc.title;
                        console.log(title);
                        const datainput = { category_id: newval , product_url: request.message ,id: "0" , page_title:title};
                       chrome.storage.local.set({ productsData: [datainput] }, () => {
                       console.log('Array saved to local storage' ,  [datainput]);
                       setData(prevdata=> [...prevdata,datainput]);   
                       });          
                         });
                }
        });
      }
      });
    }, [])


  
  

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






  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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

      const ConfirmationIsActive = (val) => {
        setconfirmationIsActive(val);
      };

      const ErorrIsActive = (val) => {
        setErorrIsActive(val);
      };
      const userLogout = () => {
        chrome.storage.local.remove('isLoggedIn');
        chrome.storage.local.remove('v2_category_link');
        setSittingsIsActive(true);
      };
      let headlineText = <h1  className='suppliers__headline'>משיכת מוצרים</h1>
      let main = <div>
      <label className='suppliers__checkbox'>
      אפשר הוספת מוצרים       
    <input type="checkbox" checked={isChecked}  onChange={handleCheckboxChange}></input>
      <span className="checkbox-blog-switch">
      </span>
      </label>
      <Select
        label="בחרו קטגוריה לשיוך המוצרים אצלכם בחנות"
        classLabel="suppliers__label"
        addVal={getval}
        fetchLink={jsonLinkStoreCategory}
        ErorrIsActive={ErorrIsActive}
      />
      <ListWithRemoveItem addjsonData={data} val={value} label="קישורי מוצרים" classLabel="suppliers__label" classUl="suppliers__ul"/> 
      <button type="button" className={"suppliers__button " + eroorIsActive }  onClick={() => setconfirmationIsActive(true)} > המשך</button>   
      </div>
      if(confirmationIsActive){
        main = <ConfirmationComponent erorrIsActive={eroorIsActive} ConfirmationIsActive={ConfirmationIsActive} label="תצוגה מקדימה למוצר" classLabel="suppliers__label" classUl="suppliers__ul" />
      }


      return (  
        <div className='suppliers_wrapper'>
        <div className='suppliers__headline_wrapper'>
        {headlineText}
        <span className="Logout_btn" onClick={() => userLogout()}>התנתקות</span>
        </div>
        {sittingsIsActive === true ? (<LoginComponent SittingsIsActive={SittingsIsActive} />) 
        :
        (main)
        }   
      <input className="refInput" type="text" name="category_123"  value={value} ref={refTest}/>
      </div>   
      );
};

export default Popup;