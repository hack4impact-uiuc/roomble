import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage'
// import new components here!!
import LoginPage from './pages/LoginPage'
import Register from'./pages/Register'
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'

import FeedPage from './pages/FeedPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
        <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
        <Route exact path="/register" render={(props) => <Register {...props} />} />
        <Route exact path="/feed" render={(props) => <FeedPage {...props} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();