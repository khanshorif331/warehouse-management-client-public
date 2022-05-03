import React from 'react'
import Inventory from '../Inventory/Inventory'
import Banner from './Banner/Banner'
import Items from './Items/Items'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Inventory></Inventory>
			<Items></Items>
		</div>
	)
}

export default Home
