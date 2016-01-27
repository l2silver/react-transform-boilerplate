import React, {Component} from 'react';
import {Route} from 'react-router';

export default class extends Component{
	render(){
		return <Route path='graphs2' component={NewComponent} />

	}
}

class NewComponent extends Component{
	render(){
		return <h1>HELLO FROM NEW JERSEY</h1>
	}
}