import {validateNewUser} from './../user_checkit';
import {expect} from 'chai';

describe('validateNewUser', ()=>{
	describe('Failure', ()=>{
		it('email format', ()=>{
			const user = {
				email: 'email',
				password: 'password',
				confirmPassword: 'password'
			}
			validateNewUser(user).catch((error)=>{
				expect(error.errors.email.message).to.equal('The email must be a valid email address');
			});
		});
		it('password does not match confirmPassword', ()=>{
			const user = {
				email: 'example@example.com',
				password: 'password',
				confirmPassword: 'passwor'
			}
			validateNewUser(user).catch((error)=>{
				expect(error.errors.password.message).to.equal('The password must exactly match the confirmPassword');
			});
		});
	});
});