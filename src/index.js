import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import {
	createStore
	, applyMiddleware
	} from 'redux';
import reducers from './reducers.js';

const createStoreWithMiddleware = applyMiddleware(
	
	)(createStore)

const store = createStoreWithMiddleware(reducers);

render(
	<App />, 
	document.getElementById('root'));
