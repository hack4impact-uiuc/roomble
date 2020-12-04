import React, { useState } from "react";
import { login } from '../utils/api.js'
import '../styles/LoginPage.css';

function LoginPage(props) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <h1>Roomble</h1>
      <h4>Username:</h4>
      <h4>Password:</h4>
      <div className="lp-input-one">
        <input className="lp-input" type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} required/>
      </div>
      <div className="lp-input-two">
        <input className="lp-input" type="text" placeholder='Password' onChange={event => setPassword(event.target.value)} required/>
      </div>
      <h2><u>Forgot Password?</u></h2>
      <button onClick = {() => login(username, password).then(data => {
        if (data.status != 401) {
          props.history.push('/feed');
        }
      }
        )}>Login</button>
    </div>
    
    
  );
  
}

export default LoginPage;
