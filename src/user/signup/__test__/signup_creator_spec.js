import {changeInput, validateUser} from './../signup_creator';
import {expect} from 'chai';

describe('signup_creator', ()=>{
	describe('changeInput', ()=>{
		it('successfully validates user attributes', (done)=>{
			const user = {
				email: 'example@example.com',
				password: 'password',
				confirmPassword: 'password'
			}
			function dispatch(action){
				expect(action.type).to.equal('VALID_USER');
				done();
			}

			validateUser(user)(dispatch);
		});
		it('fails to validate user attributes', (done)=>{
			const user = {
				email: 'example@example',
				password: 'password',
				confirmPassword: 'password'
			}
			function dispatch(action){
				expect(action.type).to.equal('INVALID_USER');
				done();
			}

			validateUser(user)(dispatch);
		});
	});
});