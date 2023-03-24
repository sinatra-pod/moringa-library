import React, { useEffect, useState } from 'react'
import useHeader from '../hooks/useHeader'
import logo from '../assets/moringalogo.png'


const LoginView = () => {

    const {header, setHeader} = useHeader()

    useEffect(() => {
      setHeader('Login Page')
    }, [setHeader])
  
    

  return (
    <div className='flex h-[100vh] justify-center items-center '>
    <section className="signcard flex flex-col md:flex-row box-border border-1 border-gray rounded-xl h-[80%] w-[80%] justify-center items-center shadow-2xl">
        <div className='logopart bg-gray-900 dark:bg-gray-900 h-full w-full basis-1/2 text-white-200 flex flex-col md:flex-row items-center justify-center'>
            <div className="imagepart basis-1/2 flex justify-end items-end ">
                {/* <img className="object-contain h-48 w-96  rounded-tl-xl" src={logo} alt="logo"/> */}
            </div>
            <div className="basis-1/2 flex flex-col justify-start items-start">
                <h1 className='text-gray-500 text-5xl p-3 font-medium'>MORINGA</h1>
                <h2 className='text-white text-5xl p-3 font-semibold'>HUB</h2>
            </div>
        </div>
        <div className='formpart bg-white-50 basis-1/2 h-full w-full flex flex-col justify-center'>
            <h1 className='text-5xl text-gray-900 p-5 font-medium m-5'>Create an Account</h1>

           

            
            
        </div>
    </section>
    
</div>
  
  )
}

export default LoginView