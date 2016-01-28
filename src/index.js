import React, {Component} from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware
	, combineReducers
} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { syncHistory, routeReducer } from 'react-router-redux'
import { Router, Route, Link, browserHistory} from 'react-router';
import SignupPage from './user/signup/SignupPage';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(
	thunk
	, reduxRouterMiddleware
	)(createStore)
const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store)

export class App extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route path="/" component={SignupPage}>
        <Route path="*" component={SignupPage}/>
        </Route>
      </Router>
    );
  }
}

render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
