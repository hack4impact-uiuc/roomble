import '../styles/LoginPage.css';
import React, { useEffect, useState } from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { login } from '../utils/api.js'

const InputExampleInput = () =>
<div>  
    <Input size='large' icon='username' placeholder='Username' />
    <br />
    <br />
    <Input size='large' icon='password' placeholder='Password' /> 
</div> 

const ButtonExampleShorthand = () => <Button content='Login' />

function LoginPage() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Roomble</h1>
      <h4>Username:</h4>
      <h4>Password:</h4>
      <div class="input">
        <input type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} required/>
        
        </div>
        <div class="inputOne">
        <input type="text" placeholder='Password' onChange={event => setPassword(event.target.value)} required/>
      </div>
      <h2><u>Forgot Password?</u></h2>
      <button onClick = {() => login(username, password)} class="button">Login</button>
    </div>
    
    
  );
}

export default LoginPage;