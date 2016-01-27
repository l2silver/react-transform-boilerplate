import React, {Component} from 'react';
import AssemblyCreateForm from './AssemblyCreateForm';
require('./AssemblyCreatePage.scss');
const categories = [
	{
		name: 'Category 1',
		id: 1
	},{
		name: 'Category 2',
		id: 2
	},{
		name: 'Category 3',
		id: 3
	}];

const assemblyInputs = [
	{
		name: 'Input 1',
		type: 'text',
		column_id: 1
	},{
		name: 'Input 2',
		type: 'text',
		column_id: 2
	},{
		name: 'Input 3',
		type: 'text',
		column_id: 3
	}];



const products = [
	{
		name: 'Product 1',
		id: 1
	},{
		name: 'Product 2',
		id: 2
	},{
		name: 'Product 3',
		id: 3
	}];

export default class extends Component{
	render(){
		return(
			<div className="AssemblyCreatePage">
				<h1>Create Assembly</h1>
				<AssemblyCreateForm categories={categories} 
			assemblyInputs={assemblyInputs} 
			products={products}/>
			</div>
			)
	}
}