import reducer from './../signup_reducer.js';
import {expect} from 'chai';
import {Map, fromJS} from 'immutable';

describe('signup', ()=>{
	describe('input change', ()=>{
		it('change user attribute', ()=>{
			const state = Map();
			const action = {
				type: "INPUT_CHANGE",
				attribute: "email",
				value: "example@example.com"
			};
			const nextState = reducer(state, action);
			expect(nextState).to.equal(fromJS(
				{user: 
					{attributes: 
						{email: "example@example.com"}
					}
				})
			);
		})
	});
});