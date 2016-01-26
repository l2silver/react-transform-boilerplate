import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
<<<<<<< HEAD
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
render(	<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
=======

require('bootstrap/less/bootstrap.less');

render(<App />, document.getElementById('root'));
>>>>>>> friend/bootstrap_styles
