import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const ItemDetail = () => {
	const { id } = useParams()
	const [itemDetail, setItemDetail] = useState({})
	const [quantity, setQuantity] = useState(itemDetail.quantity)
	// console.log(Number(itemDetail.quantity), quantity)

	// console.log(quantity)
	useEffect(() => {
		fetch(`http://localhost:5000/itemDetail/${id}`)
			.then(res => res.json())
			.then(data => setItemDetail(data))
	}, [id])
	let newQuantity

	const handleDelivered = () => {
		console.log(itemDetail.quantity)
		newQuantity = Number(itemDetail.quantity - 1)
		// const newQuantity = Number(itemDetail.quantity) - 1
		const updatedQuantity = {
			quantity: newQuantity,
		}
		console.log(itemDetail)

		const url = `http://localhost:5000/itemDetail/${id}`
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ quantity: newQuantity }),
		}).then(res =>
			res.json().then(data => {
				setQuantity(newQuantity)
				console.log(data, quantity)
				toast.success('Item delivered successfully.')
			})
		)
		setQuantity(newQuantity)
		console.log(itemDetail.quantity, quantity)
	}
	console.log(quantity)
	return (
		<div className='max-w-[1200px] p-5 border-8 mx-auto mt-5'>
			<h1 className='text-2xl text-center'> Manage your product</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
				<div className='my-7 '>
					<img
						style={{ height: '400px', width: '400px' }}
						src={itemDetail.img}
						alt=''
					/>
				</div>
				<div className='mx-auto'>
					<h5 className=' text-xl font-medium mb-2'>{itemDetail.name}</h5>
					<p>Product Id : {itemDetail._id}</p>

					<p className=''>Price : $ {itemDetail.price}</p>
					<strong className=''>
						Quantity : {quantity ? quantity : itemDetail.quantity}
						{/* Quantity : {itemDetail.quantity} */}
					</strong>
					<p className=''>Supplier Name: {itemDetail.supplier}</p>
					<p className=' text-base my-4'>{itemDetail.description}</p>
					<button onClick={handleDelivered} class='btn btn-active'>
						Delivered
					</button>
					<div className='mt-4'>
						<input
							className='p-3 border-2 rounded'
							type='number'
							name='quantity'
							id=''
							placeholder='Update Quantity'
						/>
						<button class='btn btn-active'>Restock Item</button>
					</div>
				</div>
				<div className=''>
					<Link to='/manageInventories'>
						<button class='btn btn-wide my-5'>Manage Inventories</button>
					</Link>
				</div>
				<ToastContainer></ToastContainer>
			</div>
		</div>
	)
}

export default ItemDetail
