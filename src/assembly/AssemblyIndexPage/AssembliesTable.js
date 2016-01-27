import React, {Component} from 'react';

export default class AssembliesTable extends Component {
	render(){
		const rows = 	this.props.assemblies.map((assembly)=>{
							return (<AssembliesTableRow data={assembly} />);
						});
		return(
				<table className='AssembliesTable table'>
					<tbody>
						<AssembliesTableHeader columns={this.props.columns} />
						{rows}
					</tbody>
				</table>
			)
	}
}

export class AssembliesTableHeader extends Component {
	render(){
		const columnHeaders = this.props.columns.map((column)=>{
			return <th>{column}</th>
		});
		return(
				<tr className='AssembliesTableRow'>
					{columnHeaders}
				</tr>
			)
	}
}

export class AssembliesTableRow extends Component {
	render(){
		const data = this.props.data;
		const dataKeys = Object.keys(data);
		const columns = dataKeys.map((key)=>{
			return <td>{data[key]}</td>
		});
		return(
				<tr className='AssembliesTableRow'>
					{columns}
				</tr>
			)
	}
}