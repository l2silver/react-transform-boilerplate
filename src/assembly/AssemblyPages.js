import React, {Component} from 'react';
import { Route } from 'react-router';
import AssemblyPages from './AssemblyPages';

export default class extends Component{
	render(){
		return(
			<div className='AssemblyPages'>
				{this.props.children}
			</div>
			)
	}
}
