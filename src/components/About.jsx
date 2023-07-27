import React from 'react';
import myImg from '../assets/pic3.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12 bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				Im Software Developer, proficient in JavaScript, Reactjs, Nextjs, Tailwind, Redux, Nodejs, and Firebase. I have a track record of delivering and maintaining projects on Github. I am eager to contribute my skills and expertise to the Software Developer Intern role at Ezage.
				</p>
				<a
					href="rautprajwal36@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>

				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
