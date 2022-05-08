import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ManageInventories = () => {
	const [items, setItems] = useState([])
	const [limit, setLimit] = useState(10)
	const [pageNumber, setPageNumber] = useState(0)
	const [totalPage, setTotalPage] = useState(0)

	useEffect(() => {
		;(async () => {
			const { data } = await axios.get(
				`http://localhost:5000/items?limit=${limit}&pageNumber=${pageNumber}`
			)
			console.log(data)
			setItems(data.data)
			setTotalPage(Math.ceil(data.count / limit))
		})()
	}, [limit, pageNumber])

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
							const remaining = items.filter(item => item._id !== id)
							setItems(remaining)
						}
					})
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
			}
		})
	}
	return (
		<div>
			<h1 className='text-center text-2xl my-4'>Manage All Inventories</h1>
			<div className='border-2 flex justify-center my-6'>
				<Link to='/addItem'>
					<button class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
						<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Add New Item
						</span>
					</button>
				</Link>
			</div>

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
						{items?.map(item => {
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
													United States
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
											className='btn btn-active'
										>
											Delete
										</button>
									</th>
								</tr>
							)
						})}
					</tbody>
				</table>
				<div className='flex flex-wrap max-w-[800px] mx-auto py-4 justify-center bg-teal-800 my-5 '>
					{[...Array(totalPage).keys()].map(number => (
						<div
							onClick={() => setPageNumber(number)}
							className={`m-3 border border-black px-3  py-1 cursor-pointer ${
								pageNumber === number ? 'bg-black text-white' : ''
							}`}
						>
							{number + 1}
						</div>
					))}
					<select
						defaultValue={limit}
						className='px-4 mr-3 '
						onChange={e => setLimit(e.target.value)}
					>
						<option value='5'> 5 </option>
						<option value='10'> 10 </option>
						<option value='15'> 15 </option>
						<option value='20'> 20 </option>
						<option value='25'> 25 </option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default ManageInventories
