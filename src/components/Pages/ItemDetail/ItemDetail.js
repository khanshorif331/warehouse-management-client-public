import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemDetail = () => {
	const { id } = useParams()
	const [itemDetail, setItemDetail] = useState({})

	useEffect(() => {
		fetch(`http://localhost:5000/itemDetail/${id}`)
			.then(res => res.json())
			.then(data => setItemDetail(data))
	}, [id])
	return (
		<div className='max-w-[1200px] p-5 border-8 mx-auto'>
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
					<h5 className='text-gray-900 text-xl font-medium mb-2'>
						{itemDetail.name}
					</h5>
					<p>Product Id : {itemDetail._id}</p>

					<p className='text-indigo-900'>Price : $ {itemDetail.price}</p>
					<strong className='text-indigo-900'>
						Quantity : {itemDetail.quantity}
					</strong>
					<p className='text-indigo-900'>
						Supplier Name: {itemDetail.supplier}
					</p>
					<p className='text-gray-700 text-base my-4'>
						{itemDetail.description}
					</p>
					<button class='btn btn-active'>Delivered</button>
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
			</div>
		</div>
	)
}

export default ItemDetail
