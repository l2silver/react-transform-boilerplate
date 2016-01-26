import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware
} from 'redux';
import reducers from 'reducers.js';

const createStoreWithMiddleware = applyMiddleware(
	thunk
	)(createStore)

const store = createStoreWithMiddleware(reducers);

render(<App />, document.getElementById('root'));
