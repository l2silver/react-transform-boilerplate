import {connect} from 'react-redux';
import * as actionCreators from './signup_creator';
import React, {Component} from 'react';
import SignupForm from './SignupForm';

export class SignupBox extends Component {
	render(){
		return(
				<div className='SignupBox' {...this.props.user}>
					<SignupForm />
				</div>
		);
	}
}



function mapStateToProps(state) {
  return {
    user: state.signup.get('user')
  , errors: state.signup.get('errors')
  , activatedAttributes: state.signup.get('activatedAttributes')
  };
}


export default connect(
	mapStateToProps
	, actionCreators 
	)(SignupBox);
