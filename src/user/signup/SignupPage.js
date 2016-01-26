import React, {Component} from 'react';
import SignupBox from './SignupBox';
require('./SignupPage.scss')
export default class extends Component {
	render(){
		return(
				<section className='SignupPage'>
					<h1>Signup</h1>
					<SignupBox />
				</section>
			)
	}
}