import React, {Component} from 'react';

export default class extends Component{
	render(){
		const categoryOptions = this.props.categories.map((category)=>{
			return <option value={category.id}>{category.name}</option>
		});
		const assemblyInputs = this.props.assemblyInputs.map((assemblyInput)=>{
			return (	
					<div className='assemblyInputGroup'>
						<label>{assemblyInput.name}</label>
						<input className='form-control' type={assemblyInput.type} name={assemblyInput.column_id}></input>
					</div>
				);
		});
		const productOptions = this.props.products.map((product)=>{
			return <option value={product.id}>{product.name}</option>
		});
		return(
			<form className='AssemblyCreateForm'>
				<label>Categorory</label>
				<select className='form-control'>
					{categoryOptions}
				</select>
				{assemblyInputs}
				<label>Tests</label>
				<div className='inputTestsGroup'>
					<input type='file' name='test[]' className='form-control'></input>
					<button class='btn btn-primary'><i className='fa fa-plus' /></button>
				</div>
				<select multiple className='form-control'>
					{productOptions}
				</select>
			</form>
			)
	}
}