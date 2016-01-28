import React from 'react';
import { render } from 'react-dom';
import { App 
	, history
} from './App';
import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { syncHistory, routeReducer } from 'react-router-redux'
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(
	thunk
	, reduxRouterMiddleware
	)(createStore)
const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store)

render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
