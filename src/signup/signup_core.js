import {Map, fromJS} from 'immutable';

export function changeAttribute(state, attribute, value){
	return state.setIn(['user', 'attributes', attribute], value);
}