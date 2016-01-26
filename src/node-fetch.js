import fetch from 'node-fetch';


switch(process.env.ENV_VARIABLE){
	case 'tets':
		const address = 'localhost:8888';
	case 'development':
		const address = 'localhost:8888';
	case 'production':
		const address = '';

}

export default function(method, body){
	return fetch(address, { 
							method, 
							body
								})
	.then((res)=>{
		return res.json();
	});
}