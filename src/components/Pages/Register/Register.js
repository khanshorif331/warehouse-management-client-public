import React, { useState } from 'react'
import {
	useSignInWithGoogle,
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../../firebase.init'

const Register = () => {
	const [email, setEmail] = useState('')
	const navigate = useNavigate()
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth)
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)
	const [sendEmailVerification] = useSendEmailVerification(auth)

	const handleSubmit = e => {
		e.preventDefault()
		if (password != confirmPassword) {
			return toast.error(
				'Password didnt match!!Please provide same password'
			)
		}

		createUserWithEmailAndPassword(email, password)
		if (googleError || error) {
			return toast.error('Email already exists')
		}

		sendEmailVerification(auth)
		toast.success('Email verification sent.Please verify your email.')

		window.e.reset()
		console.log(email, password)
	}
	console.log(email, typeof password, typeof confirmPassword)
	if (user || googleUser) {
		console.log(user)
		navigate('/home')
	}

	return (
		<div className='w-full md:w-3/4 mx-auto'>
			<div class='w-full md:w-1/2 mx-auto p-5  border-2 rounded-xl mt-10'>
				<h1 className='text-center text-2xl'>REGISTER HERE</h1>
				<form onSubmit={handleSubmit}>
					<div class='form-control'>
						<label class='label'>
							<span class='label-text'>Email</span>
						</label>
						<input
							onBlur={e => setEmail(e.target.value)}
							type='email'
							placeholder='email'
							class='input input-bordered'
						/>
					</div>
					<div class='form-control'>
						<label class='label'>
							<span class='label-text'>Password</span>
						</label>
						<input
							onBlur={e => setPassword(e.target.value)}
							type='password'
							placeholder='password'
							class='input input-bordered'
						/>
						<label class='label'>
							<span class='label-text'>Confirm Password</span>
						</label>
						<input
							onBlur={e => setConfirmPassword(e.target.value)}
							type='password'
							placeholder='confirm-password'
							class='input input-bordered'
						/>

						<label class='label'>
							<p>Already Have An Account?</p>
							<Link to='/login' class='label-text-alt link link-hover'>
								LOGIN
							</Link>
						</label>
					</div>
					{(googleError || error) && (
						<p className='text-red-600 ml-1'>
							{googleError?.message || error?.message}
						</p>
					)}
					{(googleLoading || loading) && (
						<div class='flex justify-center items-center'>
							<div
								class='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
								role='status'
							>
								<span class='visually-hidden'>Loading...</span>
							</div>
						</div>
					)}
					<button class='btn btn-primary mx-auto form-control w-full mt-3'>
						SUBMIT
					</button>
				</form>

				<div className='mt-3'>
					<div className='border-2'></div>
					<div className='text-center'>OR</div>
					<div className='border-2'></div>
				</div>
				<button
					onClick={() => signInWithGoogle()}
					class='btn btn-accent my-4 mx-auto w-full'
				>
					Continue With Google
				</button>
				<button class='btn btn-info mx-auto w-full '>
					Continue with Facebook
				</button>
				<ToastContainer></ToastContainer>
			</div>
		</div>
	)
}

export default Register
