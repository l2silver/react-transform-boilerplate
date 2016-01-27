import React, {Component} from 'react';

export default class extends Component{
	render(){
		return(
			<div className='AssemblyCategoriesPages'>
				{this.props.children}
			</div>
			)
	}
}
