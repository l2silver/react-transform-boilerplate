import React, {Component} from 'react';
import SignupForm from './SignupForm';

export class SignupBox extends Component {
	render(){
		return(
				<div className='signupBox'>
					<SignupForm />
				</div>
		);
	}
}