import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path="/" component={Signup}>
        <Route path="*" component={Signup}/>
        </Route>
      </Router>
    );
  }
}