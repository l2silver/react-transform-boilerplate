import React, {Component} from 'react';

export default class extends Component {
	onChange(event){
		const attribute = event.target;
    	this.props.changeInput(attribute.name, attribute.value);
  	}
  	inputs(){
  		const userAttributes = Object.keys(this.props.user);
  		userAttributes.map((key)=>{
  			let userAttribute = this.props.user[key];
  			return <input onChange={this.onChange.bind(this)} type={userAttribute.type} name={userAttribute.name} placeholder={userAttribute.placeholder} />
  		});
  	}
  	
	render(){
		

		return(
				<form className='SignupForm'>
					{this.inputs()}
				</form>
		);
	}
}