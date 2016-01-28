import {changeInput} from './signup_core.js';
import {Map} from 'immutable';

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