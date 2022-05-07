import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'

const MyItem = () => {
	const [user] = useAuthState(auth)
	console.log(user)

	return (
		<div className='min-h-screen'>
			<h1 className='text-center'>{user.displayName}</h1>
			<h1>this is my item</h1>
		</div>
	)
}

export default MyItem
