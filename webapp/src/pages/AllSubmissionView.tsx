import React from 'react'
import AppBar from '../components/header/AppBar'

function AllSubmissionView() {
  return (
    <div>
        <AppBar/>
        <div className='flex h-screen bg-gray-100 mt-6'>
                {/* Sidebar */}
            <div className='bg-white w-1/5'>



                <div className='ml-14'>


                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        {/* Sidebar content here */}
                    <h3 className='mt-5 mb-2 font-semibold'>FILTER BY</h3>


                    {/* Category Section */}
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Categories</h3>

                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-indigo-800 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-text-indigo-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile</label>
                    </div>
                    <div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Machine Learning</label>
                    </div>
                    <br></br>




                    {/* Tech-Stack Section */}

                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Tech Stacks</h3>
                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NodeJS</label>
                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ExpressJS</label>
                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ruby</label>
                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <label htmlFor="laravel-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rails</label>
                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                        </li>
                    </ul>
                       



                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Neil Sims
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $320
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Bonnie Green
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $3467
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Michael Gough
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $67
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Lana Byrd
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $367
                                            </div>
                                        </div>
                                    </li>
                                    <li className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    Thomes Lean
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    email@windster.com
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                $2367
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                    </div>


                    

                </div>
            </div>

            {/* <!-- Main content --> */}
            <div className="w-4/5">
                <header className='bg-white border-b border-gray-200'>
                {/* <!-- Header content here --> */}


                {/* <input type="text" placeholder="Search..." /> */}
                <form className="flex items-center rounded-full ml-10">
                    <input
                        type="text"
                        placeholder="Search Project"
                        className="px-80 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent rounded-full"
                        // value={query}
                        // onChange={(event) => setQuery(event.target.value)}
                    />








                    {/* <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
                        Search
                    </button> */}
                </form>
                   {/* Search section  */}
                   {/* <form>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form> */}


                </header>
                <main className='p-4 bg-white rounded'>
                {/* <!-- Main content here --> */}
                <div className="grid grid-cols-3 gap-4 bg-white rounded">
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-[#B71B3D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-full">More</button>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">View</button>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">View</button>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">View</button>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">View</button>
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                        <img className='rounded-lg' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                        The Force
                        <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">View</button>
                        </div>
                    </div>
                </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default AllSubmissionView