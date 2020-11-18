import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
<<<<<<< HEAD
import SignupPage from './pages/SignupPage'
=======
// import new components here!!
>>>>>>> 6abadaebaab55ab2cb8af8d1b8a3eb03d1a4fe91
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
<<<<<<< HEAD
        <Route exact path="/" render={(props) => <SignupPage {...props} />} />
=======
        {/** Add new routes here!! */}
>>>>>>> 6abadaebaab55ab2cb8af8d1b8a3eb03d1a4fe91
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
