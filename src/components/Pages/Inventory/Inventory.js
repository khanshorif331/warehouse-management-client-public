import { Link } from 'react-router-dom'
import Item from './Item/Item'
import { useEffect, useState } from 'react'

const Inventory = () => {
	const [items, setItems] = useState([])
	useEffect(() => {
		fetch('http://localhost:5000/items')
			.then(res => res.json())
			.then(data => setItems(data.data))
	}, [])

	return (
		<div className='mx-auto'>
			<h1 className='text-xl text-yellow-500 text-center my-9'>
				Inventory Items
			</h1>
			<div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
				{items.slice(0, 6).map(item => (
					<Item key={item._id} item={item}></Item>
				))}
			</div>
			<div className='float-right mr-7'>
				<Link to='/manageInventories'>
					<button class='btn btn-wide my-5'>Manage Inventories</button>
				</Link>
			</div>
		</div>
	)
}

export default Inventory
