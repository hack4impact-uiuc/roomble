import React, { useState } from "react";
import { login } from '../utils/api.js'
import '../styles/LoginPage.css';

function LoginPage(props) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-input">
        <input type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} required/>
        <br/><br/>
        <input type="password" placeholder='Password' onChange={event => setPassword(event.target.value)} required/>
      </div>
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
