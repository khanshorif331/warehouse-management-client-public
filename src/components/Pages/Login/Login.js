import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
	useAuthState,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth)
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth)
	// const [user, loading, error] = useAuthState(auth)
	const [checkBox, setCheckBox] = useState(false)

	const login = e => {
		e.preventDefault()
		signInWithEmailAndPassword(email, password, auth)

		setEmail('')
		setPassword('')
		// window.e.reset()
	}
	console.log(email, password)

	if (googleUser || user) {
		navigate('/home')
	}
	console.log(googleUser)

	return (
		<div>
			<div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row-reverse'>
					<div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div class='card-body'>
							<h1 className='text-center text-2xl'> USER LOGIN</h1>
							<form onSubmit={login}>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Email</span>
									</label>
									<input
										onBlur={e => setEmail(e.target.value)}
										type='email'
										placeholder='email'
										class='input input-bordered'
										required
									/>
								</div>
								<div class='form-control'>
									<label class='label'>
										<span class='label-text'>Password</span>
									</label>
									<input
										onBlur={e => setPassword(e.target.value)}
										type={checkBox ? 'text' : 'password'}
										placeholder='password'
										class='input input-bordered'
										required
									/>
									<label class='label'>
										<a
											href='#'
											class='label-text-alt link link-hover'
										>
											Forgot password?
										</a>
										<label class='label ml-12'>
											<span class='label-text'>Show Password</span>
										</label>
										<input
											onClick={() => setCheckBox(!checkBox)}
											type='checkbox'
										/>
									</label>
									<label class='label'>
										<p>Don't Have Account?</p>
										<Link
											to='/register'
											class='label-text-alt link link-hover'
										>
											REGISTER NOW
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
								<button class='mx-auto form-control w-full btn btn-primary mt-3'>
									Login
								</button>
							</form>

							<div className='mt-3'>
								<div className='border-2'></div>
								<div className='text-center'>OR</div>
								<div className='border-2'></div>
							</div>
							<button
								onClick={() => signInWithGoogle()}
								class='btn btn-accent my-4'
							>
								Continue With Google
							</button>
							<button class='btn btn-info'>
								Continue with Facebook
							</button>
						</div>
					</div>

					<div class='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
						<img
							src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
							class='w-full'
							alt='Phone image'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
