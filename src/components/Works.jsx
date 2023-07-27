import React from "react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";



function Works() {
  return (
    <>
    
      <p className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500">
        My project
      </p>
      <div  class="flex flex-wrap  flex-row items-center justify-center text-xs md:text-sm gap-4">
        <div class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
          <div  class="max-w-sm ">
            <div class="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">
              <img
                className="w-full h-36 md:h-48 object-cover"
                src={p1}
                alt=""
              />
              <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                <h1 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  Real Estate Site
                </h1>
                <p className="flex flex-wrap gap-1 mb-8 flex-row items-center justify-start text-xs md:text-sm">
                  {" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    HTML5
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    CSS
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    JAVASCRIPT
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    BOOTSTRAP
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    REACT JS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    REDUX
                  </strong>{" "}
                </p>
                <a
                  href="https://github.com/Prajwalraut29/Real-Estate-"
                  className=" mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://homefinderr.netlify.app/"
                  className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 "
                >
                  Host Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
          <div class="max-w-sm ">
            <div class="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">
              <img
                className="w-full h-full md:h-48 object-cover"
                src={p2}
                alt=""
              />
              <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                <h1 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  Food Ordering Site
                </h1>
                <p className="flex flex-wrap gap-1 mb-8 flex-row items-center justify-start text-xs md:text-sm">
                  {" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    HTML5
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    CSS
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    JAVASCRIPT
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    REACT JS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    MATERIAL UI
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    NODE JS
                  </strong>{" "}
                </p>

                <a
                  href="https://github.com/Prajwalraut29/food-order-website"
                  className=" mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://myrestaurantfood.netlify.app/"
                  className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  Host Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 ">
          <div class="max-w-sm ">
            <div class="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">
              <img
                className="w-full h-36 md:h-48 object-cover"
                src={p4}
                alt=""
              />
              <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                <h1 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  Crypto Changer
                </h1>
                <p className="flex flex-wrap gap-1 mb-8 flex-row items-center justify-start text-xs md:text-sm">
                  {" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    HTML5
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    CSS
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    JAVASCRIPT
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    CHART JS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    REACT JS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    NODE JS
                  </strong>{" "}
                </p>
                <a
                  href="https://github.com/Prajwalraut29/cryptoxreact"
                  className=" mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://cryptoxreact.vercel.app"
                  className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 "
                >
                  Host Link
                </a>
               
                
                
              </div>
              
            </div>
          </div>
        </div>

        <div class="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 ">
          <div class="max-w-sm ">
            <div class="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">
              <img
                className="w-full h-36 md:h-48 object-cover"
                src={p3}
                alt=""
              />
              <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                <h1 class="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  MBA CHAI WALA SITE
                </h1>
                <p className="flex flex-wrap gap-1 mb-8 flex-row items-center justify-start text-xs md:text-sm">
                  {" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    HTML5
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    CSS
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    JAVASCRIPT
                  </strong>{" "}
                  <strong className="inline-block px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    REACT JS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    SASS
                  </strong>{" "}
                  <strong className="inline-block px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">
                    NODE JS
                  </strong>{" "}
                </p>

                <a
                  href="https://github.com/Prajwalraut29/Mba-chai-wala"
                  className=" mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-2"
                >
                  Github
                </a>
                <a
                  href="https://mbachaiwala2.netlify.app/"
                  className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  Host Link
                </a>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="py-12">
    // 	<SectionTitle id="works">Recent Works</SectionTitle>
    // 	<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    // 		{works.map(work => (
    // 			<WorkItem
    // 				key={work.title}
    // 				imgUrl={work.imgUrl}
    // 				title={work.title}
    // 				tech={work.tech}
    // 				workUrl={work.workUrl}
    // 			/>
    // 		))}
    // 	</div>
    // </div>
  );
}

export default Works;
