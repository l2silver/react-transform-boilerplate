import React, {Component} from 'react';

export default class extends Component {
	onChange(event){
		const attribute = event.target;
    	this.props.changeInput(attribute.name, attribute.value);
  	}
  	inputs(){
  		if('user' in this.props){
	  		const userAttributes = Object.keys(this.props.user);
	  		userAttributes.map((key)=>{
	  			var userAttribute = this.props.user[key];
	  			return <input onChange={this.onChange.bind(this)} type={userAttribute.type} name={userAttribute.name} placeholder={userAttribute.placeholder} />
	  		});
  		}
  		
  	}
  	
	render(){
		

		return(
				<form className='SignupForm'>
					{this.inputs()}
					<button onClick={()=>{this.props.testReduxRouter()}} />
				</form>
		);
	}
}