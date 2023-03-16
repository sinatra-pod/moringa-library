import React,{useState} from 'react';
import useHeader from "../hooks/useHeader";
import logo from "../assets/logo.png"
import {MdOutlineEmail, MdLockOutline} from 'react-icons/md'

function SignupView() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  function handleEmail(event:any){
    setEmail(event.target.value)
    console.log(email)
  }
  function handlePassword(event:any){
    setPassword(event.target.value)
  }
  function handleSubmit(){
    fetch("http://localhost:9292/users",{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            email:email,
            password:password
        }),
        headers:{
            "Content-type":"application/json"
        }
    })
  }
    return (
        <div className='flex h-[100vh] justify-center items-center '>
            <section className="signcard flex flex-col md:flex-row box-border border-1 border-gray rounded-xl h-[80%] w-[80%] justify-center items-center shadow-2xl">
                <div className='logopart bg-gray-900 dark:bg-gray-900 h-full w-full basis-1/2 text-white-200 flex flex-col md:flex-row items-center justify-center'>
                    <div className="imagepart basis-1/2 flex justify-end items-end ">
                        <img className="object-contain h-48 w-96  rounded-tl-xl" src={logo} alt="logo"/>
                    </div>
                    <div className="basis-1/2 flex flex-col justify-start items-start">
                        <h1 className='text-gray-500 text-5xl p-3 font-medium'>MORINGA</h1>
                        <h2 className='text-white text-5xl p-3 font-semibold'>HUB</h2>
                    </div>
                </div>
                <div className='formpart bg-white-50 basis-1/2 h-full w-full flex flex-col justify-center'>
                    <h1 className='text-5xl text-gray-900 p-5 font-medium m-5'>Create an Account</h1>

                    <form className="w-[80%]  m-5" onSubmit={handleSubmit}>
                        <div className='flex shrink border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="email" placeholder="Your Email" aria-label="Email" onChange={handleEmail}/>
                            <MdOutlineEmail style={{ fontSize: '25 '}}/>
                        </div>
                        <div className='flex border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Your Password" aria-label="password" onChange={handlePassword}/>
                            <MdLockOutline style={{ fontSize: '25 '}}/>
                        </div>
                        <div className='flex border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Confirm Your Password" aria-label="confirm password"/>
                            <MdLockOutline style={{ fontSize: '25 '}}/>
                        </div>
                        <div className="flex justify-center items-center m-5">
                            <button className="flex-shrink-0 bg-gray-900 hover:bg-gray-700 border-gray-900 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-xl font-medium" type="submit" onClick={handleSubmit}>Sign Up </button>

                        </div>
                        <div className="socials flex flex-row divide-x">
                            <button></button>
                        </div>
                        <div className="loginpart flex justify-center">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-900">Already have an account? <a href="#" className="font-semibold text-pink-600 hover:underline dark:text-pink-500">Login here</a></p>
                        </div>
                    </form>

                    
                    
                </div>
            </section>
            
        </div>
    );
}

export default SignupView;