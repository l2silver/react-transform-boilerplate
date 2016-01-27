import React, {Component} from 'react';
import AssembliesTable from './AssembliesTable';
require('./AssemblyIndexPage.scss')

const assemblies = [{
	name: 'Assembly 1',
	category: 'Category 1',
	visibility: 'All',
	tests: 10
},{name: 'Assembly 1',
	category: 'Category 1',
	visibility: 'All',
	tests: 10
},{name: 'Assembly 1',
	category: 'Category 1',
	visibility: 'All',
	tests: 10
}]

export default class extends Component {
	render(){
		return(
				<section className='AssemblyIndexPage'>
					<h1>Assembly</h1>
					<AssembliesTable assemblies={assemblies}/>
				</section>
			)
	}
}