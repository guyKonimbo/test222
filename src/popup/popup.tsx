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
    
       const [value, setValue] = React.useState('fruit');
       const [test, setTest] = React.useState('t');
       const [val, setVal] = React.useState();
       const [data, setData] = useState([]);
       const [sittingsIsActive, setSittingsIsActive] = useState(false);
       const [jsonLinkStoreCategory, setJsonLinkStoreCategory] = useState("");
       const [eroorIsActive, setErorrIsActive] = useState(' ');
      //  const [headlineText, setHeadlineText] = useState("משיכת מוצרים");
       console.log('sittingsIsActive',sittingsIsActive);
        useEffect(() => {
        // retrieve the JSON data from local storage and parse it
        const dataJSON = JSON.parse(localStorage.getItem('data'));
        console.log('dataJSON1',dataJSON);
        console.log('localStorage.getItem',localStorage.getItem('data'));
        if(!!localStorage.getItem('data')){
        setData(dataJSON);
        console.log('dataJSON is not empty',dataJSON);
         }
  

      }, []);
      var testgg = ""
      chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if (message.type === 'DATA') {
          setTest(message.data);
          console.log('settest');
        }
      });

      
    
       let headlineText = <h1 className='suppliers__headline'>משיכת מוצרים</h1>
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
      <input type="checkbox"></input>
        <span className="checkbox-blog-switch">
        </span>
        </label>
        <AddProduct addjson={getJSON1} />
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
          <p>link {jsonLinkStoreCategory}!</p>
          <p>active {sittingsIsActive}!</p>
          <p>new data {test}!</p>
          
          </div>
      );
};

export default Popup;