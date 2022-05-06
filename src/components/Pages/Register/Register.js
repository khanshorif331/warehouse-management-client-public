import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<div className='w-full md:w-3/4 mx-auto'>
			{/* <h1 className='text-center'>this is register</h1> */}
			<form class='w-full md:w-1/2 mx-auto p-5  border-2 rounded-xl mt-10'>
				<h1 className='text-center text-2xl'>REGISTER HERE</h1>
				<div class='form-control'>
					<label class='label'>
						<span class='label-text'>Email</span>
					</label>
					<input
						type='text'
						placeholder='email'
						class='input input-bordered'
					/>
				</div>
				<div class='form-control'>
					<label class='label'>
						<span class='label-text'>Password</span>
					</label>
					<input
						type='text'
						placeholder='password'
						class='input input-bordered'
					/>
					<label class='label'>
						<span class='label-text'>Confirm Password</span>
					</label>
					<input
						type='text'
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
				<div class='form-control mt-3'>
					<button class='btn btn-primary'>SUBMIT</button>
					<div className='mt-3'>
						<div className='border-2'></div>
						<div className='text-center'>OR</div>
						<div className='border-2'></div>
					</div>
					<button class='btn btn-accent my-4'>Continue With Google</button>
					<button class='btn btn-info '>Continue with Facebook</button>
				</div>
			</form>
		</div>
	)
}

export default Register
