import React from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import './Item.css'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init()

const Item = ({ item }) => {
	const navigate = useNavigate()
	const handleManage = id => {
		navigate(`/itemDetail/${id}`)
	}
	return (
		<div data-aos='flip-left' className='anime p-4'>
			<div class='flex justify-center'>
				<div class='rounded-lg shadow-lg bg-white max-w-sm'>
					<a
						href='#!'
						data-mdb-ripple='true'
						data-mdb-ripple-color='light'
					>
						<img
							style={{ height: '350px', width: '100%' }}
							class='rounded-t-lg'
							src={item.img}
							alt=''
						/>
					</a>
					<div class='p-6'>
						<h5 class='text-gray-900 text-xl font-medium mb-2'>
							{item.name}
						</h5>
						<p className='text-indigo-900'>Price : $ {item.price}</p>
						<p className='text-indigo-900'>Quantity : {item.quantity}</p>
						<p className='text-indigo-900'>
							Supplier Name: {item.supplier}
						</p>
						<p class='text-gray-700 text-base my-4'>{item.description}</p>
						<button
							onClick={() => handleManage(item._id)}
							class='btn btn-outline btn-secondary'
						>
							Manage Items
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
