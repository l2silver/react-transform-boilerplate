import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';
import AssemblyIndexPage from './assembly/AssemblyIndexPage';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path='/' component={Layout}>
        	<Route path='signup' component={SignupPage} />
	        <Route path='assembly' component={AssemblyIndexPage} />
        </Route>
      </Router>
    );
  }
}

export class Layout extends Component {
  render() {
    return (
       <div>
       		{this.props.children}
       </div>
    );
  }
}