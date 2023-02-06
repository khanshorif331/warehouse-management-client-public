import { Link } from 'react-router-dom'
import Item from './Item/Item'
import { useEffect, useState } from 'react'

const Inventory = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://warehouse-management-server-public.onrender.com/items')
			.then(res => res.json())
			.then(data => {
				setItems(data.data)
				setLoading(false)
			})
	}, [])
	if (loading) {
		return (
			<div class="flex items-center justify-center space-x-2">
				<div
					class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
					role="status"
				>
					<span class="visually-hidden">Loading...</span>
				</div>
				<div
					class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
					role="status"
				>
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		)
	}

	return (
		<div className="mx-auto fixed">
			<h1 className="text-xl text-yellow-500 text-center my-9 pt-4">
				Inventory Items
			</h1>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3">
				{items.slice(0, 6).map(item => (
					<Item key={item._id} item={item}></Item>
				))}
			</div>
			<div className="">
				<Link to="/manageInventories">
					<button class="btn btn-wide mx-auto block bg-teal-700 my-5">
						Manage Inventories
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Inventory
