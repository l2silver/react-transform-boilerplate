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
import {
  App
,history
} from './App'

import { syncHistory, routeReducer } from 'react-router-redux'
import SignupPage from './user/signup/SignupPage';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(
	thunk
	, reduxRouterMiddleware
	)(createStore)
require('bootstrap/less/bootstrap.less');

const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store)


render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));

