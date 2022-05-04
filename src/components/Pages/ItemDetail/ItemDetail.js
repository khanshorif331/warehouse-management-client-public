import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ item }) => {
	const { id } = useParams()
	const [itemDetail, setItemDetail] = useState({})
	useEffect(() => {
		fetch(`http://localhost:5000/itemDetail/${id}`)
			.then(res => res.json())
			.then(data => setItemDetail(data))
	}, [id])
	return (
		<div>
			<h1>This is manage item.Product id is: {id}</h1>
			<p>{itemDetail.name}</p>
			<img className='w-50' src={itemDetail.img} alt='' />
		</div>
	)
}

export default ItemDetail
