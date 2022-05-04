import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ItemDetail from '../../ItemDetail/ItemDetail'

const Item = ({ item }) => {
	const navigate = useNavigate()
	const handleManage = id => {
		navigate(`/itemDetail/${id}`)
	}
	console.log(item)
	return (
		<div>
			<div className='card w-96 bg-base-100 shadow-xl hover:bg-blend-darken'>
				<figure className='px-10 pt-10'>
					<img
						src='https://api.lorem.space/image/shoes?w=400&h=225'
						alt='Shoes'
						className='rounded-xl'
					/>
				</figure>
				<div className='card-body items-center text-center'>
					<h2 className='card-title'>{item.name}</h2>
					<p>{item.description}</p>
					<div className='card-actions'>
						<button
							onClick={() => handleManage(item._id)}
							className='btn btn-primary'
						>
							Manage Item
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
