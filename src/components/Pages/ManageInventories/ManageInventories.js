import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import useItems from '../../../hooks/useItems'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS

import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const ManageInventories = () => {
	const [items] = useItems()
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
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
			}
		})
	}
	return (
		<div>
			<h1 className='text-center text-2xl my-4'>Manage All Inventories</h1>

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
						{items.map(item => {
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
			</div>
		</div>
	)
}

export default ManageInventories
