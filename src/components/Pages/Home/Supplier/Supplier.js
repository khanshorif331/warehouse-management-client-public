import React from 'react'

const Supplier = () => {
	return (
		<div class=''>
			<section
				class='p-6 md:p-12 text-center md:text-left shadow-lg rounded-md'
				style={{
					backgroundImage:
						'url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)',
				}}
			>
				<div class='flex justify-center'>
					<div class='max-w-3xl'>
						<div class='block p-6 rounded-lg shadow-lg bg-white m-4'>
							<div class='md:flex md:flex-row'>
								<div class='md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0'>
									<img
										src='https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg'
										class='rounded-full shadow-md'
										alt='woman avatar'
									/>
								</div>
								<div class='md:ml-6'>
									<p class='text-gray-500 font-light mb-6'>
										We are doing really great.Everyone try to maintain
										a quality professionalism with our clients.We are
										going to be the best bike supplier of our
										country.Work hard and do your duty proprtly.
									</p>
									<p class='font-semibold text-xl mb-2 text-gray-800'>
										Anna Smith
									</p>
									<p class='font-semibold text-gray-500 mb-0'>
										Product manager
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Supplier
