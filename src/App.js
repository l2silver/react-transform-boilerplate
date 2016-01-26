import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Example from './example/Example';

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path="/" component={Example}>
        <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}