import Checkit from 'checkit';

var checkit = new Checkit({
  email: ['required','email'],
  password: ['required','minLength:6', 'matchesField:confirmPassword'],
  confirmPassword: 'required'
});

export function validateNewUser(user){
	return checkit.run(user);
}

