import {
	changeInput
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
		}
		, confirmPassword:
			{
				  value: null
				, type: 'password'
				, name: 'confirmPassword'
				, placeholder: 'Confirm Password'
			}
	});

export default function(state = Map(), action){
	switch(action.type){
		case 'INPUT_CHANGE':
			return changeInput(state, action.attribute, action.value);
		case 'INVALID_USER':
			return changeAttribute(state, action.attribute, action.value);
		case 'VALID_USER':
			return changeAttribute(state, action.attribute, action.value);
	}
	return state;
}