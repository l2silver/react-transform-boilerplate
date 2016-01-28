import React from 'react';
import { render } from 'react-dom';
import { App 
	, history
} from './App';
import {
	createStore
	, applyMiddleware
	} from 'redux';
import reducers from './reducers.js';
import {Provider} from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux'
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const reduxRouterMiddleware = syncHistory(history)

const createStoreWithMiddleware = applyMiddleware(
	reduxRouterMiddleware
	)(createStore)

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store)

render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));