import React from 'react'
import exp1 from '../assets/exp1.jpeg'
const Experience = () => {
  return (
   <>
    <p className="text-3xl pt-3 font-bold mb-5 text-indigo-600 dark:text-indigo-500">
        Experience
      </p>
      <section className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Software Engineer Intern at Ezage</h2>
            <li className="mb-4">Architected and coded a dynamic web application using cutting-edge front-end technologies such as
React,Redux and Node.js Redux, and Next.js</li>
<li> To enhance the user experience, I implemented a gender-selection navigation bar using Tailwind CSS and
React.js.
</li>
            
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            {/* <img class="w-full rounded-lg" src={exp1} alt="office content 1"> */}
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={exp1} alt="office content 2"/>
        </div>
    </div>
</section>
   </>
  )
}

export default Experience
