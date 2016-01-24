import {changeAttribute} from './../signup_core';
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
});
