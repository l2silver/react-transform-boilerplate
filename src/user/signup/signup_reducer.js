import {
	changeInput
	,invalidUser
} from './signup_core.js';
import {
	Map
	, fromJS
} from 'immutable';

const initialState = fromJS({
	user: {
		email:
			{
				  value: null
				, type: 'email'
				, name: 'email'
				, placeholder: 'Email'
			}
		, password:
			{
				  value: null
				, type: 'password'
				, name: 'password'
				, placeholder: 'Password'
			}
		, confirmPassword:
			{
				  value: null
				, type: 'password'
				, name: 'confirmPassword'
				, placeholder: 'Confirm Password'
			}
		}
	});

export default function(state = initialState, action){
	switch(action.type){
		case 'CHANGE_INPUT':
			console.log('CHANGE INPUT inside reducer');
			return changeInput(state, action.attribute, action.value);
		case 'INVALID_USER':
			console.log('INVALID USER inside reducer', action.errors);
			return invalidUser(state, action.errors);
		case 'VALID_USER':
			console.log('VALID USER inside reducer');
			return changeAttribute(state, action.attribute, action.value);
	}
	return state;
}