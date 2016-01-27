import React, {Component} from 'react';
import AssembliesTable from './AssembliesTable';
require('./AssemblyIndexPage.scss')

const assemblies = [{
	1: 'Assembly 1',
	2: 'Category 1',
	3: 'All',
	4: 10
},{
	1: 'Assembly 1',
	2: 'Category 1',
	3: 'All',
	4: 10
},{
	1: 'Assembly 1',
	2: 'Category 1',
	3: 'All',
	4: 10
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