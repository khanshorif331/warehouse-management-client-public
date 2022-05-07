import React from 'react'
import Inventory from '../Inventory/Inventory'
import Banner from './Banner/Banner'
import MostSold from './MostSold/MostSold'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Inventory></Inventory>
			<MostSold></MostSold>
		</div>
	)
}

export default Home
