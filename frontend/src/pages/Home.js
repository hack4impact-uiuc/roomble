import '../styles/Home.css';
import { Button } from 'semantic-ui-react'
import React, { useState } from "react";

import { login } from '../utils/api.js'
import { register } from '../utils/api.js'

function Home(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="homepage">
      <h1>Roomble</h1>
      <h2>Get ready to ROOM-ble!!!</h2>
      <button onClick = {() => login(username, password).then(data => {
        if (data.status != 401) {
          props.history.push('/login');
          
        }
      }
        )}>Log In</button>
      
      <br/>
      <button onClick = {() => register(username, password).then(data => {
        if (data.status != 401) {
          props.history.push('/register');
          
        }
      }
        )}>Sign Up</button>
      
    </div>
  );
}

export default Home;
