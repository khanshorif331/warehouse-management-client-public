import React from 'react'
import Inventory from '../Inventory/Inventory'
import Banner from './Banner/Banner'
import MostSold from './MostSold/MostSold'
import Supplier from './Supplier/Supplier'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Inventory></Inventory>
			<MostSold></MostSold>
			<Supplier></Supplier>
		</div>
	)
}

export default Home
