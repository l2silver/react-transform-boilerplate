import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import {
	createStore
	} from 'redux';
import reducers from 'reducers.js';
const store = createStore(reducers);

render(<App />, document.getElementById('root'));
