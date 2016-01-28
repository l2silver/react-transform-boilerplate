import { routeActions } from 'react-router-redux'
import {validateNewUser} from './../user_checkit.js';
import fetch from './../../node-fetch';
import Promise from 'bluebird';
import FormData from 'form-data';
fetch.Promise = Promise;

function createUser(user){
  const form = new FormData({user});
  return fetch('POST', form, 'user')
}

function validUser(user) {
  return {
    type: 'VALID_USER',
    user
  };
}

function invalidUser(errors, user) {
  return {
    type: 'INVALID_USER',
    user,
    errors
  };
}

function changeUserAttribute(attribute, value){
 return {
    type: 'CHANGE_INPUT',
    attribute,
    value
  }; 
}

export function changeInput(field, value){
  return function (dispatch, getState){
    dispatch(changeUserAttribute(field, value))
    validateNewUser(getState().signup.user)
    .then(()=>{
      dispatch(validUser(user));
      dispatch(routeActions.push('/foo'))
    })
    .catch((errors)=>{
      dispatch(invalidUser(errors));
    });
  };
};

export function testReduxRouter(){
  return function (dispatch, getState){
    return dispatch(routeActions.push('/signup'));
  };
}


/*
->GET STATE
->CHANGE ATTRIBUTE->SET ACTIVE->(When you leave box)
->VALIDATE USER

User->attributes
User->errors
User->active_input
User->activated_input
*/