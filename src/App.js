import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';
import AssemblyIndexPage from './assembly/AssemblyIndexPage';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path='/' component={SignupPage}>
        <Route path='/assembly' component={AssemblyIndexPage} />
        <Route path='*' component={SignupPage}/>
        </Route>
      </Router>
    );
  }
}