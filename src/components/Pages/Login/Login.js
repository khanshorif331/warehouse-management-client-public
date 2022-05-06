import React from 'react'

const Login = () => {
	return (
		<div>
			{/* <h1 className='text-center'>LOGIN HERE</h1> */}

			<div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row-reverse'>
					<div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form class='card-body'>
							<h1 className='text-center text-2xl'> USER LOGIN</h1>
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
									<a href='#' class='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div class='form-control mt-6'>
								<button class='btn btn-primary'>Login</button>
							</div>
						</form>
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

		// <section class='h-screen'>
		// 	<div class='container px-6 py-12 h-full'>
		// 		<div class='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
		//

		// 		</div>
		// 	</div>
		// </section>
	)
}

export default Login
