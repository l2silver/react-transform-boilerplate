import React, {Component} from 'react';

export default class extends Component{
	render(){
		const typeColumns = ['text', 'file'].map((type)=>{
			return <option value={type}>{type}</option>
		});
		const categoryColumns = this.props.categoryColumns.map((column)=>{
			return <option value={column.id}>{column.name}</option>
		});
		return(
					<form>
						<label>Name</label>
						<input type='text' className='form-control' name='name'></input>
						<div className='addOldColumnGroup'>
							<h2>Add Columns to Category</h2>
							<label>Column Name</label>
							<select className='form-control'>
								{categoryColumns}
							</select>
							<button className='btn btn-primary'>Add Column</button>
						</div>
						<div className='addOldColumnGroup'>
							<h2>Create new Column</h2>
							<label>Column Type</label>
							<select className='form-control'>
								{typeColumns}
							</select>
							<button className='btn btn-primary'>Create New Column</button>
						</div>
						<input type='submit' value='Save' className='btn btn-primary' />
					</form>
			);
	}
}
