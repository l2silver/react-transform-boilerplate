import {Map, fromJS} from 'immutable';

export function changeAttribute(state, attribute, value){
	return state.setIn(['user', 'attributes', attribute], value);
}

export function changeInput(state, attribute, value){
	const state_1 = changeAttribute(state,attribute, value);
	return checkActive(state_1, attribute);
}

export function checkActive(state, attribute){
	if(!state.has('activeAttribute')){
		return state.set('activeAttribute', attribute)
	}
	if(state.get('activeAttribute') !== attribute){
		return state.merge(fromJS({
			activeAttribute: attribute, 
			activatedAttributes: {
				[state.get('activeAttribute')]: true
			}})
		);
	}
	return state;
}

export function invalidUser(state, errors){
	return state.set('errors', fromJS(errors));
}