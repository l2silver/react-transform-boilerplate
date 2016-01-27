import React, {Component} from 'react';

export default class extends Component{
	render(){
		const typeColumns = ['text', 'file'].map((type)=>{
			return <option value={type}>{type}</option>
		});
		const columns = this.props.columns.map((column)=>{
			return <td>{column.name}</td>
		});
		return(
				<table className='AssemblyCategoriesCreateSimulation table'>
					<tbody>
						<tr>
							{columns}
						</tr>
					</tbody>
				</table>
			);
	}
}
