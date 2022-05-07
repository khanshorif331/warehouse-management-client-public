import React from 'react'

const Blogs = () => {
	return (
		<div className='w-full md:w-3/4 mx-auto mt-4 p-4 min-h-screen'>
			<h1 className='text-center my-3'>Welcome To MY Blogs</h1>

			<div class='accordion accordion-flush' id='accordionFlushExample'>
				<div class='accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200'>
					<h2 class='accordion-header mb-0' id='flush-headingOne'>
						<button
							class='accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseOne'
							aria-expanded='false'
							aria-controls='flush-collapseOne'
						>
							What is the difference between Javascript and Node???
						</button>
					</h2>
					<div
						id='flush-collapseOne'
						class='accordion-collapse border-0 collapse show'
						aria-labelledby='flush-headingOne'
						data-bs-parent='#accordionFlushExample'
					>
						<div class='accordion-body py-4 px-5'>
							<p>
								<strong>Javascript:</strong>Javascript is a programming
								language and it only runs in browser.It is used in
								client side.It can do dom manipulation.It can be run in
								any browser engine.{' '}
							</p>
							<p>
								<strong>Node Js:</strong>Node is Javascript run time
								environment.Node helps js to run outside the browser.It
								is used in server side mainly.It can't add html tags.It
								has V8 engine that runs and parses JS.
							</p>
						</div>
					</div>
				</div>
				<div class='accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200'>
					<h2 class='accordion-header mb-0' id='flush-headingTwo'>
						<button
							class='accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseTwo'
							aria-expanded='false'
							aria-controls='flush-collapseTwo'
						>
							When should we use Node and When should we use Mongodb???
						</button>
					</h2>
					<div
						id='flush-collapseTwo'
						class='accordion-collapse border-0 collapse'
						aria-labelledby='flush-headingTwo'
						data-bs-parent='#accordionFlushExample'
					>
						<div class='accordion-body py-4 px-5'>
							<p>
								<strong>Node Js:</strong>Node Js is javascript runtime
								environment.Any projects needs a programming environment
								and a runtime library that offers basic programming
								environment and can compile or interpret our code. So
								for this we can use nodejs.
							</p>
							<p>
								<strong>MongoDB:</strong>Mongodb is a No-Sql database
								for storing data.When we need high available data with
								automatic,fast and instant data recovery we can use
								mongodb.{' '}
							</p>
						</div>
					</div>
				</div>
				<div class='accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200'>
					<h2 class='accordion-header mb-0' id='flush-headingThree'>
						<button
							class='accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#flush-collapseThree'
							aria-expanded='false'
							aria-controls='flush-collapseThree'
						>
							Difference between SQL and NoSQL ??
						</button>
					</h2>
					<div
						id='flush-collapseThree'
						class='accordion-collapse collapse'
						aria-labelledby='flush-headingThree'
						data-bs-parent='#accordionFlushExample'
					>
						<div class='accordion-body py-4 px-5'>
							<p>
								<strong>NoSQL:</strong>SQL stands for structured query
								language.Nosql means that database has no sql.Means
								nothing strict about how it's data is situated.It's data
								structure could vary.Each individual records are stored
								as documents.{' '}
							</p>
							<p>
								<strong>MySQL:</strong>My SQL is relational database
								mangement system.In my sql each individual records are
								stored as rows in a table.My sql concept does not allow
								efficient replication and sharing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs
