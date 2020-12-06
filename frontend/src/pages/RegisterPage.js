import '../styles/Register.css';
import React, { useState } from "react";
import { register } from '../utils/api.js'

function RegisterPage(props) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <div className="reg-input">
        <input type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} required/>
        <br/><br/>
        <input type="password" placeholder='Password' onChange={event => setPassword(event.target.value)} required/>
      </div>
      <button onClick = {() => register(username, password).then(data => {
        if (data.status != 401) {
          props.history.push('/createProfile');
          
        }
      }
        )}>Sign up</button>
    </div>
    
    
  );
  
}

export default RegisterPage;