import React from 'react'
import Pro from '../assets/vectorpic.png'
import Works from './Works'
const HeroSection = () => {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
            <img className='w-[20rem] h-[20rem] flex flex-wrap mx-auto' src={Pro} />
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Prajwal
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
				A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.{' '}
				</p>
				{/* <a
					href="works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a> */}
			</div>
		</div>
  )
}

export default HeroSection
