import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const ItemDetail = () => {
	const { id } = useParams()
	const [itemDetail, setItemDetail] = useState({})
	const [loading, setLoading] = useState(false)
	const [quantity, setQuantity] = useState(itemDetail.quantity)
	const handleRestock = e => {
		e.preventDefault()
		setQuantity(Number(e.target.quantity.value) + quantity)
		e.target.reset()
	}

	useEffect(() => {
		setLoading(true)
		fetch(`http://localhost:5000/itemDetail/${id}`)
			.then(res => res.json())
			.then(data => {
				setItemDetail(data)
				setQuantity(Number(data.quantity))
			})
		setLoading(false)
	}, [id])

	useEffect(() => {
		const url = `http://localhost:5000/itemDetail/${id}`
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ quantity }),
		}).then(res =>
			res.json().then(data => {
				if (data.modifiedCount) {
					console.log(data, quantity)
					toast.success('Item delivered successfully.')
				}
			})
		)
	}, [quantity])
	return (
		<div className='max-w-[1200px] p-5 border-8 mx-auto mt-5'>
			<h1 className='text-2xl text-center'> Manage your product</h1>
			{loading && (
				<div class='flex justify-center items-center'>
					<div
						class='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
						role='status'
					>
						<span class='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
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
					<strong className=''>Quantity : {quantity}</strong>
					<p className=''>Supplier Name: {itemDetail.supplier}</p>
					<p className=' text-base my-4'>{itemDetail.description}</p>
					<button
						onClick={() => {
							setQuantity(Number(quantity - 1))
						}}
						class='btn btn-active'
					>
						Delivered
					</button>
					<form onSubmit={handleRestock} className='mt-4'>
						<input
							className='p-3 border-2 rounded'
							type='number'
							name='quantity'
							id=''
							placeholder='Update Quantity'
						/>
						<button class='btn btn-active'>Restock Item</button>
					</form>
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
