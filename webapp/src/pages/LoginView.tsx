import React, { useEffect, useState } from 'react'
import useHeader from '../hooks/useHeader'
import logo from '../assets/moringalogo.png'


const LoginView = () => {

    const {header, setHeader} = useHeader()

    useEffect(() => {
      setHeader('Login Page')
    }, [setHeader])
  
    

  return (
  <div className='flex flex-row justify-center items-center h-screen w-full'>
  <div >
      <form className='max-w-[400px] w-full mx-auto bg-white shadow-lg rounded-lg bg-[#121A45] p-8 '>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Moringa</h2>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Hub</h2>
          <img src={logo} alt="moringalogo" className='w-0. h-'/>
      </form>
  </div>


  <div className='bg-white justify-center items-center'>
      <form className='max-w-[400px] w-full mx-auto bg-white shadow-lg rounded-lg bg-white-900 p-8 px-8'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
              <label>Your Email</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label>Your Password</label>
              <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
              <p>Forgot Password</p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
          
      </form>
  </div>
</div>
  )
}

export default LoginView