import React, {Component} from 'react';
import AssemblyCategoriesIndexTable from './AssemblyCategoriesIndexTable';
require('./AssemblyCategoriesIndexPage.scss');

const categories = [
	{name: 'Category 1',
	assemblies: 10,
	id: 1
},{name: 'Category 2',
	assemblies: 10,
	id: 2
},{name: 'Category 3',
	assemblies: 10,
	id: 3
}
]

export default class extends Component {
	render(){
		return <div className='AssemblyCategoriesIndexPage'>
			<h1>Categories</h1>
			<AssemblyCategoriesIndexTable categories={categories}/>
		</div>
	}
}