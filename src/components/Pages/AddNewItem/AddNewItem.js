import React from 'react'
// import React from "react";
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
// import Header from './Header'
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'

const AddNewItem = () => {
	const { register, handleSubmit, reset } = useForm()
	const [item, setItem] = useState('')
	const [user] = useAuthState(auth)

	const onSubmit = async inputValue => {
		console.log(inputValue)
		// setItem(JSON.stringify(item))
		setItem(inputValue)
		console.log(item, 'item')
		if (!item.email) {
			return toast('Please provide your email or try again')
		}

		const { data } = await axios.post('http://localhost:5000/items', item)
		console.log(item)
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
					{...register('email')}
					placeholder='User-Email'
					className='block mx-auto mt-10 p-2 w-3/4 rounded-lg text-center'
					required
					value={user?.email}
				/>
				<input
					{...register('name')}
					placeholder='Product Name'
					className='block mx-auto mt-10 p-2 w-3/4 rounded-lg text-center'
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
