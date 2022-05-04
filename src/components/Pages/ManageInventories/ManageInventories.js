import React from 'react'
import useItems from '../../../hooks/useItems'

const ManageInventories = () => {
	const [items] = useItems()
	console.log(items)
	return (
		<div>
			<h1 className='text-center text-2xl my-4'>Manage All Inventories</h1>

			<div class='overflow-x-auto w-full'>
				<table class='table w-full'>
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
								<tr>
									<td>
										<div class='flex items-center space-x-3'>
											<div class='avatar'>
												<div class='mask mask-squircle w-12 h-12'>
													<img
														src={item.img}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
											<div>
												<div class='font-bold'>{item.name}</div>
												<div class='text-sm opacity-50'>
													United States
												</div>
											</div>
										</div>
									</td>
									<td>
										$ {item.price}
										<br />
										<span class='badge badge-ghost badge-sm'>
											Desktop Support Technician
										</span>
									</td>
									<td>{item.quantity}</td>
									<td>{item.supplier}</td>
									<th>
										<button class='btn btn-active'>Delete</button>
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
