import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AssemblyCategoriesIndexTable extends Component {
	render(){
		const rows = 	this.props.categories.map((assembly)=>{
							return (<AssemblyCategoriesIndexRow data={assembly} />);
						});
		return(
				<table className='AssemblyCategoriesIndexTable table'>
					<tbody>
						<AssemblyCategoriesIndexHeader />
						{rows}
					</tbody>
				</table>
			)
	}
}

export class AssemblyCategoriesIndexHeader extends Component {
	render(){
		return(
				<tr className='AssemblyCategoriesIndexRow'>
					<th>Name</th>
					<th>Assemblies</th>
				</tr>
			)
	}
}

export class AssemblyCategoriesIndexRow extends Component {
	render(){
		return(
				<tr className='AssemblyCategoriesIndexRow'>
					<td><Link to={'/assemblies/index/'+this.props.data.id}>{this.props.data.name}</Link></td>
					<td>{this.props.data.assemblies}</td>
				</tr>
			)
	}
}