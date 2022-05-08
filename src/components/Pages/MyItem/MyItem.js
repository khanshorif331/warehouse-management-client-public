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

	return (
		<div className='min-h-screen'>
			<h1 className='text-center'>{user.displayName}</h1>
			<h1>this is my item. {myItems.length}</h1>
		</div>
	)
}

export default MyItem
