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

export function validateUser(user){
  return validateNewUser(user)
}

export function changeInput(user){
  return function (dispatch){
   validateNewUser(user).then((user)=>{
    return createUser(user)
   })
   .then((user)=>{
    dispatch(validUser(user));
   })
   .catch((errors)=>{
    dispatch(invalidUser(errors, user));
   }); 
  };
}