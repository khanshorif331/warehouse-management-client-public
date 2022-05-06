import React from 'react'
// import React from "react";
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
// import Header from './Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'

const AddNewItem = () => {
	const { register, handleSubmit, reset } = useForm()
	const [item, setItem] = useState('')

	const onSubmit = async inputValue => {
		console.log(inputValue)
		// setItem(JSON.stringify(item))
		setItem(inputValue)
		console.log(item, 'item')

		const { data } = await axios.post('http://localhost:5000/items', item)
		console.log(data)
		// toast.success('Item added succesfully')
		if (!data.success) {
			console.log('this is false', data)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `Something went wrong! ${data.error}`,
				// footer: '<a href="">Why do I have this issue?</a>',
			})
		} else {
			console.log('inside else', data)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Your Product Added Successfully',
				showConfirmButton: true,
				timer: 2500,
			})
		}
		reset()
	}

	return (
		<div className='w-full md:w-1/2 mx-auto'>
			<h1 className='text-center text-2xl'>
				Provide all info to add new product.
			</h1>
			<form
				className='border-4 mx-auto w-full md:50 mt-10 rounded-lg'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...register('name')}
					placeholder='Product Name'
					className='block mx-auto my-6 p-2 w-3/4 rounded-lg text-center'
					required
				/>
				<input
					type='number'
					{...register('price')}
					placeholder='Price'
					className='block border-0 mx-auto my-6 p-2 text-center w-3/4 rounded-lg'
					required
				/>
				<input
					type='number'
					{...register('quantity')}
					placeholder='Quantity'
					className='block border-0 mx-auto my-6 p-2 text-center w-3/4 rounded-lg'
					required
				/>
				<input
					{...register('supplier')}
					placeholder='Supplier'
					className='block mx-auto my-6 p-2 text-center w-3/4 rounded-lg'
					required
				/>
				<input
					{...register('img')}
					placeholder='Image Link'
					className='block mx-auto my-6 p-2 text-center w-3/4 rounded-lg'
					required
				/>

				<textarea
					{...register('description')}
					placeholder='Description'
					className='block border-0 mx-auto my-6 p-2 text-center w-3/4 rounded-lg'
					required
				/>
				<input
					type='submit'
					className='btn block mx-auto my-6 p-2 text-center w-3/4 rounded-lg cursor-pointer'
				/>
			</form>
			<ToastContainer></ToastContainer>
		</div>
	)
}

export default AddNewItem
