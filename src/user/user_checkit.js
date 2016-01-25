import checkit from 'checkit';

var checkit = new Checkit({
  email: ['required','email'],
  password: ['required','minLength:6', 'matchesField:confirmPassword'],
  confirmPassword: 'required'
});

export function validateNewUser(user){
	checkit.run(user).then(function(validated) {
	  console.log(validated);
	}).catch(Checkit.Error, function(err) {
	  console.log(err.toJSON());
	});
	Promise.resolve();	
}

