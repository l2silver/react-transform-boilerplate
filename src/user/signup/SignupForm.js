import React, {Component} from 'react';

export default class extends Component {
	render(){
		return(
				<form className='SignupForm'>
					<input className='form-control' type='email' name='email' placeholder='Email' />
					<input className='form-control' type='password' name='password' placeholder='Password' />
					<input className='form-control' type='password' name='confirmPassword' placeholder='Confirm Password' />
					<input className='form-control' type='submit' value='Signup' />
				</form>
		);
	}
}