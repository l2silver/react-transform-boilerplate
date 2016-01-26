import {changeInput, changedInput} from './../signup_creator';
import {expect} from 'chai';
import nock from 'nock';
import config from './../../../config';
const uri = config.uri;


describe('signup_creator', ()=>{
	describe('changedInput', ()=>{
		it('successfully validates user attributes', (done)=>{
			const user = {
							email: 'example@example',
							password: 'password',
							confirmPassword: 'password'
						};
			nock(uri.test)
				.post('/user')
				.reply(200, {
					user
				});

			
			function getState(){
				return {signup:{user}}
			}

			function dispatch(action){
				expect(action.type).to.equal('VALID_USER');
				done();
			}
			changedInput()(dispatch, getState);
		});
/*
		it('fails to validate user attributes', (done)=>{
			
			function getState(){
				return(
							{
								signup:{
									user:{
										email: 'example@example',
										password: 'password',
										confirmPassword: 'password'
									}
								}
							});
			}

			function dispatch(action){
				expect(action.type).to.equal('INVALID_USER');
				done();
			}
			changedInput()(dispatch);
		});
*/
	});
});