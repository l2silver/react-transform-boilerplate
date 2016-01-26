import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const applyMiddleware(
	thunk
	)(createStore)





const store = createStore(reducers);



render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
