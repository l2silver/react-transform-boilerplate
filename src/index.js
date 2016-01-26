import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(
	thunk
	)(createStore)
const store = createStoreWithMiddleware(reducers);
require('bootstrap/less/bootstrap.less');

render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));

