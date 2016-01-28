import {changeAttribute, checkActive, invalidUser} from './../signup_core';
import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

describe('signup_core', ()=>{
	it('changes user attribute', ()=>{
		const state = Map();
		const nextState = changeAttribute(state, 'email', 'example@example.com');
		expect(nextState).to.equal(fromJS(
			{user: 
				{attributes: 
					{email: 'example@example.com'}
				}
			})
		);
	});
	describe('checkActive', ()=>{
		it('no active attribute', ()=>{
			const state = Map();
			const nextState = checkActive(state, 'email');
			expect(nextState).to.equal(fromJS(
				{
					activeAttribute: 'email'
				})
			);
		});
		it('same active attribute', ()=>{
			const state = Map({activeAttribute: 'email'});
			const nextState = checkActive(state, 'email');
			expect(nextState).to.equal(fromJS(
				{
					activeAttribute: 'email'
				})
			);
		});
		it('different active attribute', ()=>{
			const state = Map({activeAttribute: 'email'});
			const nextState = checkActive(state, 'password');
			expect(nextState).to.equal(fromJS(
				{
					activeAttribute: 'password', 
					activatedAttributes: 
						{email: true}
				})
			);
		});	
	});	
	describe('invalid User', ()=>{
		it('sets errors', ()=>{
			const state = Map();
			const errors = {
				email: 'bad',
				password: 'bad',
				passwordConfirm: 'bad'
			}
			const nextState = invalidUser(state, errors);
			expect(nextState).to.equal(fromJS(
				{
				errors
				})
			);
		});
	});	
});
