import '../styles/Register.css';
import React, { useEffect, useState } from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { register } from '../utils/api.js'

const InputExampleInput = () =>
<div>  
    <Input size='large' icon='username' placeholder='Username' />
    <br />
    <br />
    <Input size='large' icon='password' placeholder='Password' /> 
</div> 

const ButtonExampleShorthand = () => <Button content='Login' />

function LoginPage(props) {
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div>
        
      <h1>Roomble</h1>
      <div class="rectangle"> 
      <div class="input">
        <input type="text" placeholder='Full Name' onChange={event => setName(event.target.value)} required/>
        <br/><br/>
        
        
        <input type="text" placeholder='Username' onChange={event => setUsername(event.target.value)} required/>
        <br/><br/>
      </div>
      <div class="inputOne">
        <input type="text" placeholder='Password' onChange={event => setPassword(event.target.value)} required/>
      </div>
      
      <button onClick = {() => register(name,username, password).then(data => {
        if (data.status != 401) {
          props.history.push('/createProfile');
          
        }
        console.log(data);
      }
        )} class="button">Sign up</button>
        </div>
    </div>
    
    
  );
  
}

export default LoginPage;