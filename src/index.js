import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import thunk from 'redux-thunk';
import {
	createStore
	, applyMiddleware} from 'redux';
import reducers from 'reducers.js';

const applyMiddleware(
	thunk
	)(createStore)

const store = createStore(reducers);

render(<App />, document.getElementById('root'));
