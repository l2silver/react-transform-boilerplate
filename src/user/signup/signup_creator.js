import {validateNewUser} from './../user_checkit.js';
import fetch from 'node-fetch';
import Promise from 'bluebird';
import FormData from 'form-data';
fetch.Promise = Promise;

function createUser(){
  fetch('https://github.com/')
    .then(function(res) {
      return res.text();
    }).then(function(body) {
      console.log(body);
    });

  const form = new FormData();

  fetch('http://httpbin.org/post', { method: 'POST', body: form })
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json);
    });
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
    return createNewUser
   })
   .catch((errors)=>{

   }); 
  };
}