import React, {Component} from 'react';

export default class extends Component {
	render(){
		return(
				<form className='SignupForm'>
					<input className='form-control' type='email' name='email' placeholder='Email' />
					<input type='password' name='password' placeholder='Password' />
					<input type='password' name='confirmPassword' placeholder='Confirm Password' />
					<input type='submit' value='Signup' />
				</form>
		);
	}
}