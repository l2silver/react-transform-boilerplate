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

function changeUserAttribute(field, value){
 return {
    type: 'CHANGE_USER_ATTRIBUTE',
    field,
    value
  }; 
}

export function changeInput(field, value){
  return function (dispatch){
    return dispatch(changeUserAttribute(field, value));
  };
};

export function changedInput(){
  return function (dispatch, getState){
    validateNewUser(getState().signup.user).then((user)=>{
      return createUser(user)
    })
    .then((user)=>{
      return dispatch(validUser(user));
    })
    .then(()=>{
      return dispatch(routeActions.push('/foo'))
    })
    .catch((errors)=>{
      dispatch(invalidUser(errors));
    });
  };
};

export function testReduxRouter(){
  return function (dispatch, getState){
    return dispatch(routeActions.push('/foo'));
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