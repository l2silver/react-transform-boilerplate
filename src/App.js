import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';
import AssemblyRoutes from './assembly/AssemblyRoutes';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path='/' component={SignupPage}>
        <AssemblyRoutes />
        <Route path='*' component={SignupPage}/>
        </Route>
      </Router>
    );
  }
}