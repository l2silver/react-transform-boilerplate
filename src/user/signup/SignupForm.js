import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './signup_creator';

export class SignupForm extends Component {
	onChange(event){
		const attribute = event.target;
    	this.props.changeInput(attribute.getAttribute('name'), attribute.value);
  	}
	render(){
		
		const keys = this.props.user.keySeq().toArray();
	  	const inputs =	keys.map((key)=>{
	  			let userAttribute = this.props.user.get(key);
	  			return (<input 
	  					onChange={this.onChange.bind(this)} 
	  					type={userAttribute.get('type')} 
	  					name={userAttribute.get('name')} 
	  					placeholder={userAttribute.get('placeholder')}
	  					value={userAttribute.get('value')}></input>
	  			);
	  		});
		return(
				<form className='SignupForm'>
					{inputs}
				<button onClick={()=>{this.props.testReduxRouter()}} />
				</form>
		);
	}
}



function mapStateToProps(state) {
  return {
    user: state.signup.get('user')  
	};
}


export default connect(
	mapStateToProps
	, actionCreators 
	)(SignupForm);
