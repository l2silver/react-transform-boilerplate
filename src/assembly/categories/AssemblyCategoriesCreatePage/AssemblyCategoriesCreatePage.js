import React, {Component} from 'react';
import AssemblyCategoriesCreateForm from './AssemblyCategoriesCreateForm';
import AssemblyCategoriesCreateSimulation from './AssemblyCategoriesCreateSimulation';
require('./AssemblyCategoriesCreatePage.scss')

export default class extends Component{
	render(){
		const categoryColumns = [
		{name:'Tests No. (PDF)',
		id: 1}, 
		{name: 'Structure',
		id: 2}, 
		{name: 'Floor',
		id: 3}, 
		{name: 'Resilient Matting',
		id: 4}];
		const columns = [
			{	
			name:'Tests No. (PDF)',
			type: 'text'}, 
			{	
			name: 'Structure',
			type: 'text'}, 
			{
			name: 'Floor',
			type: 'text'}, 
			{
			name: 'Resilient Matting',
			type: 'file'}
			];
		return(
					<div className="AssemblyCategoriesCreatePage">
						<h1>Create Assembly Category</h1>
						<AssemblyCategoriesCreateForm categoryColumns={categoryColumns}/>
						<AssemblyCategoriesCreateSimulation columns={columns}/>
					</div>
			);
	}
}