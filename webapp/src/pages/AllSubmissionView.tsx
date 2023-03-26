import React from 'react'
import AppBar from '../components/header/AppBar'




function AllSubmissionView() {
    const projects = [1,1,1,1,1,1,1]
    const tech_stacks = ['Vue JS','React','Angular','Laravel','NodeJS','ExpressJS','Ruby','Rails']
    return (
        <div>
            <AppBar/>
            <div className='flex h-screen'>
                    {/* Sidebar */}
                <div className='bg-white w-1/5 mr-2'>

                    <div className='ml-14 mt-10'>
                            <div className="w-full max-w-md bg-white drop-shadow-xl rounded-lg shadow sm:p-8">
                                {/* Sidebar content here */}
                            <h3 className='mt-1 mb-2 font-semibold text-2xl'>FILTER BY</h3>

                            <div className='bg-gray-300 h-[1px]'></div>

                            {/* Category Section */}
                            <h3 className="mb-4 mt-5 font-semibold text-gray-600 text-xl">Categories</h3>

                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-indigo-800 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-text-indigo-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">Mobile</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900">Machine Learning</label>
                            </div>
                            <br></br>
                            <div className='bg-gray-300 h-[2px]'></div>
                            {/* Tech-Stack Section */}
                            <h3 className="mt-4 mb-4 font-semibold text-gray-600 text-xl">Tech Stacks</h3>
                            <ul className="w-[100%] text-sm font-medium text-gray-900 bg-white">
                                {tech_stacks.map((stack)=> (
                                    <li className="w-full rounded-t-lg my-1">
                                        <div className="flex items-center pl-3">
                                            <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">{stack}</label>
                                            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#B71B3D] bg-gray-100 border-gray-300 rounded focus:ring-[#B71B3D] focus:ring-2"/>
                                        </div>
                                    </li>
                                ))}
                            </ul> 
                        </div>


                        

                    </div>
                </div>

                {/* <!-- Main content --> */}
                <div className="w-4/5 mt-10 ml-2 mr-4">
                    <header className='bg-white'>
                    {/* <!-- Header content here --> */}


                    {/* <input type="text" placeholder="Search..." /> */}
                    <form className="flex items-center rounded-full ml-4">
                        <div className="flex px-8 w-[100%] py-4 shadow-sm rounded-full border-2 border-black rounded-[35px] flex-row items-center">
                            <span className='material-symbols-outlined material-icons'>
                                search
                            </span>
                            <input
                            type="text"
                            placeholder="Search Project"
                            className={'ml-4 focus:outline-none'}
                            />

                        </div>
                        

                    </form>

                    </header>
                    <main className='p-4 bg-white rounded'>


                    {/* <!-- Main content here --> */}
                    <div className="grid grid-cols-3 gap-4 bg-white rounded">
                        {projects.map(x=> (
                            <div className="bg-white rounded-lg bg-white border border-gray-200 rounded-lg shadow sm:pb-8">
                            <img className='rounded-t-lg w-full' src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg" alt="vrproject" />
                            <div className='p-4'>
                                    <h4><em>The Force</em></h4>
                                    <p>The force is here. A web application for Star Wars fans; get information about all the films in the franchise.</p>
                                    <div>
                                        <button className="bg-[#B71B3D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-full float-right">More</button>
                                    </div>
                            </div>
                            
                        </div>

                        ))}
                    
                        
                    </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AllSubmissionView
