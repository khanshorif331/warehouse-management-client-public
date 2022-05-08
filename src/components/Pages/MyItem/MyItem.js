import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'

const MyItem = () => {
	const [user] = useAuthState(auth)
	const [myItems, setMyItems] = useState([])
	useEffect(() => {
		const getMyItems = async () => {
			const email = user.email
			const url = `http://localhost:5000/myitem?email=${email}`
			const { data } = await axios.get(url)
			setMyItems(data)
			console.log(data)
		}
		getMyItems()
	}, [user])
	console.log(user)
	const handleDelete = id => {
		const Swal = require('sweetalert2')
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				const url = `http://localhost:5000/item/${id}`
				fetch(url, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(data => {
						if (data.deletedCount > 0) {
							const remaining = myItems.filter(item => item._id !== id)
							setMyItems(remaining)
						}
					})
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
			}
		})
	}

	return (
		<div className='min-h-screen'>
			<h1 className='text-center my-4 text-2xl'>
				Welcome {user.displayName} !!
			</h1>
			<h1 className='text-center mb-4'> MY Items: {myItems.length}</h1>

			<div className='overflow-x-auto w-full'>
				<table className='table max-w-[1800] mx-auto'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Supplier</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{myItems?.map(item => {
							return (
								<tr key={item._id}>
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12 h-12'>
													<img
														src={item.img}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
											<div>
												<div className='font-bold'>{item.name}</div>
												<div className='text-sm opacity-50'>
													{item?.email}
												</div>
											</div>
										</div>
									</td>
									<td>
										$ {item.price}
										<br />
										<span className='badge badge-ghost badge-sm'>
											Bangladeshi Taka
										</span>
									</td>
									<td>{item.quantity}</td>
									<td>{item.supplier}</td>
									<th>
										<button
											onClick={() => handleDelete(item._id)}
											className='btn btn-active bg-red-600 text-white'
										>
											Delete
										</button>
									</th>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MyItem
