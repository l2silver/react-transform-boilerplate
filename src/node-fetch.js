import fetch from 'isomorphic-fetch';
import config from './config';
const uri = config.uri;


function address(){
	switch(process.env.NODE_ENV){
		case 'test':
			 return uri.test;
		case 'development':
			return uri.development;
		case 'production':
			return uri.production;
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