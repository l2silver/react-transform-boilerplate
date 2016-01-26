import fetch from 'node-fetch';


function address(){
	switch(process.env.ENV_VARIABLE){
		case 'test':
			 return 'localhost:8888';
		case 'development':
			return 'localhost:8888';
		case 'production':
			return '';
		}
}

export default function(method, body, suffix = ''){
	return fetch(address()+'/'+suffix, { 
							method, 
							body
								})
	.then((res)=>{
		return res.json();
	});
}