import '../styles/LoginPage.css';
import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const InputExampleInput = () =>
<div>  
    <Input size='large' icon='username' placeholder='Username' />
    <br />
    <br />
    <Input size='large' icon='password' placeholder='Password' /> 
</div> 

const ButtonExampleShorthand = () => <Button content='Login' />

function LoginPage() {
    

  return (
    <div>
      <h1>Roomble</h1>
      <h4>Username:</h4>
      <h4>Password:</h4>
      <div class="input">
        <input type="text" placeholder="Username"/>
        <br/><br/>
        <input type="text" placeholder="Password"/>
      </div>
      <h2><u>Forgot Password?</u></h2>
      <button class="button">Login</button>
    </div>
    
    
  );
}

export default LoginPage;
