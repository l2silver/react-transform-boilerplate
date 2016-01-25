import {validateNewUser} from './../user_checkit';
import {expect} from 'chai';

describe('validateNewUser', ()=>{
	describe('Failure', ()=>{
		it('email format', (done)=>{
			const user = {
				email: 'email',
				password: 'password',
				confirmPassword: 'password'
			}
			validateNewUser(user).catch((error)=>{
				expect(error.email.message).to.equal('The email must be a valid email address');
				done();
			});
		});
		it('password does not match confirmPassword', (done)=>{
			const user = {
				email: 'example@example.com',
				password: 'password',
				confirmPassword: 'passwor'
			}
			validateNewUser(user).catch((error)=>{
				expect(error.password.message).to.equal('The password must exactly match the confirmPassword');
				done();
			});
		});
	});
	describe('Success', ()=>{
		it('passes promise', (done)=>{
			const user = {
				email: 'example@example.com',
				password: 'password',
				confirmPassword: 'password'
			}
			validateNewUser(user).then((returnUser)=>{
				expect(returnUser.email).to.equal(user.email);
				done();
			});
		});
	});
});