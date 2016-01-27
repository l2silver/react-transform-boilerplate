import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import SignupPage from './user/signup/SignupPage';
import AssemblyPages from './assembly/AssemblyPages';
import AssemblyCategoriesPages from './assembly/categories/AssemblyCategoriesPages';
import AssemblyCategoriesCreatePage from './assembly/categories/AssemblyCategoriesCreatePage/AssemblyCategoriesCreatePage';
import AssemblyCategoriesIndexPage from './assembly/categories/AssemblyCategoriesIndexPage/AssemblyCategoriesIndexPage';
import AssemblyCreatePage from './assembly/AssemblyCreatePage/AssemblyCreatePage';
import AssemblyIndexPage from './assembly/AssemblyIndexPage/AssemblyIndexPage';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>

        <Route path='/' component={Layout}>

          <Route path='signup' component={SignupPage} />
          <Route path='assemblies/' component={AssemblyPages}>
            <Route path='categories/' component={AssemblyCategoriesPages}>
              <Route path='create' component={AssemblyCategoriesCreatePage} />
              <Route path='index' component={AssemblyCategoriesIndexPage} />
            </Route>
            <Route path='create' component={AssemblyCreatePage} />
            <Route path='index/:categoryId' component={AssemblyIndexPage} />
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
<<<<<<< HEAD
          {this.props.children}
=======
       		{this.props.children}
>>>>>>> AssemblyIndexPage
       </div>
    );
  }
}