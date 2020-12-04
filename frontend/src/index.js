import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage'
// import new components here!!
import LoginPage from './pages/LoginPage'
import reportWebVitals from './reportWebVitals';

import FeedPage from './pages/FeedPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
        <Route exact path="/feed" render={(props) => <FeedPage {...props} />} />
        <Route exact path="/loginpage" render={(props) => <LoginPage {...props} />} />
        
        {/** Add new routes here!! */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();