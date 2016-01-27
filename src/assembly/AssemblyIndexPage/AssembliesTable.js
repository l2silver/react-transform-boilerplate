import React, {Component} from 'react';

export default class AssembliesTable extends Component {
	render(){
		const rows = 	this.props.assemblies.map((assembly)=>{
							return (<AssembliesTableRow data={assembly} />);
						});
		console.log(this.props.assemblies);
		return(
				<table className='AssembliesTable table'>
					<tbody>
						<AssembliesTableHeader />
						{rows}
					</tbody>
				</table>
			)
	}
}

export class AssembliesTableHeader extends Component {
	render(){
		return(
				<tr className='AssembliesTableRow'>
					<th>Category</th>
					<th>Name</th>
					<th>Tests</th>
					<th>Visibility</th>
				</tr>
			)
	}
}

export class AssembliesTableContent extends Component {
	content(){
		if(this.props.assemblies.length > 0){
			this.props.assemblies.map((assembly)=>{
				return (<AssembliesTableRow data={assembly} />);
			});
		}else{
			return (<tr></tr>);
		}
	}
	render(){
		var commentNodes = this.props.assemblies.map(function(assembly) {
	      return (
	        <AssembliesTableRow data={assembly} />
	      );
  		});

		return(<AssembliesTableRow data={this.props.assemblies[0]} />);
	}
}

export class AssembliesTableRow extends Component {
	render(){
		return(
				<tr className='AssembliesTableRow'>
					<td>{this.props.data.category}</td>
					<td>{this.props.data.name}</td>
					<td>{this.props.data.tests}</td>
					<td>{this.props.data.visibility}</td>
				</tr>
			)
	}
}