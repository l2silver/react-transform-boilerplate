import {changeAttribute} from './signup_core.js';
import {Map} from 'immutable';

export default function(state = Map(), action){
	switch(action.type){
		case "INPUT_CHANGE":
			return changeAttribute(state, action.attribute, action.value);
	}
	return state;
}