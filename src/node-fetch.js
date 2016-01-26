import fetch from 'node-fetch';
import {uri} from './config';


function address(){
	switch(process.env.ENV_VARIABLE){
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