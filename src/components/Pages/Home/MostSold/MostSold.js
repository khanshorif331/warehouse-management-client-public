import React from 'react'
import './MostSold.css'

const MostSold = () => {
	return (
		<div className='border-2 m-8 gallery-container'>
			<h1 className='text-center text-2xl mt-4'>Most Sold Products</h1>
			<section class='overflow-hidden text-gray-700'>
				<div class='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
					<div class='flex flex-wrap -m-1 md:-m-2'>
						<div class='flex flex-wrap w-1/2'>
							<div class='w-1/2 p-1 md:p-2'>
								<img
									alt='gallery'
									class='block object-cover object-center w-full h-full rounded-lg'
									src='https://i.ibb.co/QfpBLrd/YZF-R15-S-V3-2.jpg'
								/>
							</div>
							<div class='w-1/2 p-1 md:p-2'>
								<img
									alt='gallery'
									class='block object-cover object-center w-full h-full rounded-lg'
									src='https://i.ibb.co/ZSdCqhb/gixxer.jpg'
								/>
							</div>
							<div class='w-full p-1 md:p-2'>
								<div
									data-aos='fade-right'
									data-aos-offset='300'
									data-aos-easing='ease-in-sine'
								>
									<img
										alt='gallery'
										class='block object-cover object-center w-full h-full rounded-lg'
										src='https://i.ibb.co/rxJ7jZZ/ktm.jpg'
									/>
								</div>
							</div>
						</div>
						<div class='flex flex-wrap w-1/2'>
							<div class='w-full p-1 md:p-2'>
								<img
									alt='gallery'
									class='block object-cover object-center w-full h-full rounded-lg'
									src='https://i.ibb.co/h1CpzrM/mt-15.jpg'
								/>
							</div>
							<div class='w-1/2 p-1 md:p-2'>
								<img
									alt='gallery'
									class='block object-cover object-center w-full h-full rounded-lg'
									src='https://i.ibb.co/rxJ7jZZ/ktm.jpg'
								/>
							</div>
							<div class='w-1/2 p-1 md:p-2'>
								<img
									alt='gallery'
									class='block object-cover object-center w-full h-full rounded-lg'
									src='https://i.ibb.co/dLj8DSL/fzs.png'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <div class='hero min-h-screen bg-base-200'>
				<div class='hero-content flex-col lg:flex-row'>
					<img
						src='https://api.lorem.space/image/movie?w=460&h=400'
						class='max-w-sm rounded-lg shadow-2xl'
					/>
					<div>
						<h1 class='text-5xl font-bold'>Box Office News!</h1>
						<p class='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut
							assumenda excepturi exercitationem quasi. In deleniti eaque
							aut repudiandae et a id nisi.
						</p>
						<button class='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default MostSold
