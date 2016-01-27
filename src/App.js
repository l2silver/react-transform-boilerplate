import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';
import AssemblyPages from './assembly/AssemblyPages';
import AssemblyCategoriesPages from './assembly/categories/AssemblyCategoriesPages';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>

        <Route path='/' component={Layout}>
          <Route path='signup' component={SignupPage} />
          <Route path='assemblies/' component={AssemblyPages}>
            <Route path='categories/' component={AssemblyCategoriesPages}>
            </Route>
          </Route>
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