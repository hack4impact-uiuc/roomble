import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

/** Import pages */
import EditProfilePage from './pages/EditProfilePage';
import FeedPage from './pages/FeedPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';
import RegisterPage from'./pages/RegisterPage'
import SavedPostsPage from './pages/SavedPostsPage';
import SignupPage from './pages/SignupPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route exact path="/register" render={(props) => <RegisterPage {...props} />} />
        <Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
        <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
        <Route exact path="/feed" render={(props) => <FeedPage {...props} />} />
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} />} />
        <Route exact path="/editprofile" render={(props) => <EditProfilePage {...props} />} />
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