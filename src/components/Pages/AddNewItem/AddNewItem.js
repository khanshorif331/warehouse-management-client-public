import React from 'react'
// import React from "react";
import { useForm } from 'react-hook-form'
// import Header from './Header'
import { useState } from 'react'

const AddNewItem = () => {
	const { register, handleSubmit } = useForm()
	const [data, setData] = useState('')

	const onSubmit = data => {
		console.log(data)
		setData(JSON.stringify(data))
		console.log(data)
	}

	return (
		<div className='w-1/2 mx-auto'>
			<form
				className='border-4 mx-auto w-50'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...register('name')}
					placeholder='Product Name'
					className='block mx-auto my-6 p-2 text-center'
					required
				/>
				<input
					type='number'
					{...register('price')}
					placeholder='Price'
					className='block border-0 mx-auto my-6 p-2 text-center'
					required
				/>
				<input
					type='number'
					{...register('quantity')}
					placeholder='Quantity'
					className='block border-0 mx-auto my-6 p-2 text-center'
					required
				/>
				<input
					{...register('supplier')}
					placeholder='Supplier'
					className='block mx-auto my-6 p-2 text-center'
					required
				/>
				<input
					{...register('img')}
					placeholder='Image Link'
					className='block mx-auto my-6 p-2 text-center'
					required
				/>

				<textarea
					{...register('description')}
					placeholder='Description'
					className='block border-0 mx-auto my-6 p-2 text-center'
					required
				/>
				<p>{data}</p>
				<input
					type='submit'
					className='block mx-auto my-6 p-2 text-center'
				/>
			</form>
		</div>
	)
}

export default AddNewItem
