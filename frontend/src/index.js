import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import SavedPostsPage from './pages/SavedPostsPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from'./pages/RegisterPage'
import FeedPage from './pages/FeedPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
        <Route exact path="/register" render={(props) => <RegisterPage {...props} />} />
        <Route exact path="/feed" render={(props) => <FeedPage {...props} />} />
        <Route exact path="/saved-posts" render={(props) => <SavedPostsPage {...props} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();