import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'

const RequireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const location = useLocation()

	if (loading) {
		return (
			<div class='flex items-center justify-center space-x-2'>
				<div
					class='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full'
					role='status'
				>
					<span class='visually-hidden'>Loading...</span>
				</div>
				<div
					class='spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0'
					role='status'
				>
					<span class='visually-hidden'>Loading...</span>
				</div>
			</div>
		)
	}
	if (!user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to='/login' state={{ from: location }} replace />
	} else {
		return children
	}
}

export default RequireAuth
