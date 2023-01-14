import React, { useState , useRef ,useEffect}  from 'react';

function LoginComponent(prop) {
  const [erorrMsg, setErorrMsg] = useState("");
  const input_user_password = useRef(null);
  const input_user_name = useRef(null);
  const input_remember_me = useRef(null);
  
  console.log('logincom44');
  useEffect(() => {
    try {

    }catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    try {
        chrome.runtime.sendMessage({ message: "LOGIN" , user_name: input_user_name.current.value , user_password: input_user_password.current.value , remember_me: input_remember_me.current.checked }, function(response) {
            console.log('Response from background:', response);
            if(response.response=="erorr"){
                setErorrMsg("שם משתמש/סיסמה לא נכונים");
                }else{
                setErorrMsg(""); 
                prop.SittingsIsActive(false);                  
                }
          });
     
    }catch (error) {
    console.log(error);
  }
  }

  return (
    <form onSubmit={handleSubmitLogin} >
    {/* <span className="back_btn" onClick={() => prop.SittingsIsActive(false)}></span> */}
      <label className="suppliers__label">
      <input  type="text" name="username"  placeholder='שם משתמש' ref={input_user_name}  /></label>
      <label className="suppliers__label"><input  type="password" name="password"  placeholder='סיסמה' ref={input_user_password} /></label>
      {erorrMsg ?<div className="erorr_msg">{erorrMsg}</div> : ""}
      <label className="suppliers_checkbox__label" ><input className="suppliers__login_checkbox" name="rememberMe" type="checkbox" ref={input_remember_me}/><span className="suppliers__login_span">זכרו אותי</span></label>         
      <button className='suppliers__button' type="submit">התחברות</button>
    </form>
  );
}

export default LoginComponent;