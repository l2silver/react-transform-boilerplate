import React, {Component} from 'react';

export class SignupForm extends Component {
	render(){
		return(
				<form>
					<input type='email' name='email' placeholder='Email' />
					<input type='password' name='password' placeholder='Password' />
					<input type='password' name='confirmPassword' placeholder='Confirm Password' />
					<input type='submit' value='Signup' />
				</form>
		);
	}
}