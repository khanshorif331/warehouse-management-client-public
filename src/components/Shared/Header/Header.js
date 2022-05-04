import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex='0' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex='0'
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<CustomLink to='/'>Home</CustomLink>
						</li>
						<li>
							<CustomLink to='/inventory'>Inventory</CustomLink>
						</li>

						<li>
							<CustomLink to='/blogs'>Blogs</CustomLink>
						</li>
						<li>
							<CustomLink to='/manageInventories'>
								Manage Inventories
							</CustomLink>
						</li>
						<li>
							<CustomLink to='/myitems'>My Items</CustomLink>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost normal-case text-xl'>
					Bike Warehouse
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<CustomLink to='/'>Home</CustomLink>
					</li>
					<li>
						<CustomLink to='/inventory'>Inventory</CustomLink>
					</li>

					<li>
						<CustomLink to='/blogs'>Blogs</CustomLink>
					</li>
					<li>
						<CustomLink to='/manageInventories'>
							Manage Inventories
						</CustomLink>
					</li>
					<li>
						<CustomLink to='/myitems'>My Items</CustomLink>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<Link to='/login' className='btn'>
					Log in
				</Link>
			</div>
		</div>
	)
}

export default Header
