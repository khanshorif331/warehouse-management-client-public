import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ItemDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [itemDetail, setItemDetail] = useState({})
	const handleManage = id => {
		navigate(`/itemDetail/${id}`)
	}
	useEffect(() => {
		fetch(`http://localhost:5000/itemDetail/${id}`)
			.then(res => res.json())
			.then(data => setItemDetail(data))
	}, [id])
	return (
		<div>
			<h1>This is manage itemDetail.Product id is: {id}</h1>
			<p>{itemDetail.name}</p>
			<img className='w-50' src={itemDetail.img} alt='' />
			<div className='p-6'>
				<h5 className='text-gray-900 text-xl font-medium mb-2'>
					{itemDetail.name}
				</h5>
				<p className='text-indigo-900'>Price : $ {itemDetail.price}</p>
				<p className='text-indigo-900'>Quantity : {itemDetail.quantity}</p>
				<p className='text-indigo-900'>
					Supplier Name: {itemDetail.supplier}
				</p>
				<p className='text-gray-700 text-base my-4'>
					{itemDetail.description}
				</p>
				<button
					onClick={() => handleManage(itemDetail._id)}
					className='btn btn-outline btn-secondary'
				>
					Manage Items
				</button>
			</div>
		</div>
	)
}

export default ItemDetail
