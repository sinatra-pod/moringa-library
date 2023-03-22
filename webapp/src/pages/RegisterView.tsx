import React,{useState} from 'react';
import useHeader from "../hooks/useHeader";
import logo from "../assets/logo.png"
import {MdOutlineEmail, MdLockOutline} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";





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
  function submitData(data:any){
    // fetch("http://localhost:9292/users",{
    //     method:"POST",
    //     mode:"cors",
    //     body:JSON.stringify({
    //         email:email,
    //         password:password
    //     }),
    //     headers:{
    //         "Content-type":"application/json"
    //     }
    // })
    console.log(data)
  }

  const styleIcons = {color: "gray"}
  const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <div className='flex h-[250vh] md:h-[100vh] justify-center items-center '>
            <section className="signcard flex flex-col md:flex-row box-border border-1 border-gray rounded-[35px] h-[85%] w-[85%] justify-center items-center shadow-2xl">
                <div className='logopart bg-gray-900 dark:bg-gray-900 h-full w-full md:w-full basis-1/2 text-white-200 flex flex-col  items-center justify-center rounded-tl-[35px] rounded-tr-[35px] md:rounded-tr-none md:rounded-bl-[35px]'>
                    <div className="imagepart basis-1/2 flex justify-end items-end m-5 ">
                        <img className="object-contain h-48 w-96 " src={logo} alt="logo"/>
                    </div>
                    <div className="basis-1/2 flex flex-col  items-center">
                        <h1 className='text-gray-500 text-5xl p-3 font-medium'>MORINGA</h1>
                        <h2 className='text-white text-5xl p-3 font-semibold'>HUB</h2>
                    </div>
                </div>
                <div className='formpart bg-white-50 basis-1/2 h-full w-full flex flex-col justify-center items-center '>
                    <h1 className='text-5xl text-center text-gray-900 p-5 font-medium m-5'>Create an Account</h1>
                    <div className="loginpart flex justify-center mt-2">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-900">Already have an account? <a href="#" className="font-semibold text-pink-600 hover:underline dark:text-pink-500">Login here</a></p>
                    </div>

                    <form className="w-[80%]  m-5" onSubmit={handleSubmit(submitData)}>
                        
                        <div className='flex border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Your name" aria-label="name"   {...register("name", { required: true, maxLength: 100 })}/>
                            <BiUser size={28} />
                        </div>
                        {
                            errors.name && (<p className="py-3 ml-5 mb-[10px] text-sm text-red-500 ">Please add username</p>)
                            
                        }
                        <div className='flex shrink border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="email" placeholder="Your Email" aria-label="Email" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                            <MdOutlineEmail size={28}/>
                        </div>
                        {
                            errors.email && (<p className="py-3 ml-5 mb-[10px] text-sm text-red-500 ">Please add valid email</p>)
                            
                        }
                        <div className='flex border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Your Password" aria-label="password" {...register("password", {
                            required: true,
                        })}/>
                            <MdLockOutline size={28}/>
                        </div>
                        {
                            errors.password && (<p className="py-3 ml-5 mb-[10px] text-sm text-red-500 ">Please add valid password</p>)
                            
                        }
                        <div className='flex border-b border-gray-600 py-3 ml-5 mb-[20px]'>
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Confirm Your Password" aria-label="confirm password"/>
                            <MdLockOutline size={28} />
                        </div>
                        <div className="flex justify-center items-center m-5">
                            <button className="flex-shrink-0 w-[200px] bg-gray-900 hover:bg-gray-700 border-gray-900 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded-[35px] font-medium m-3" type="submit">Sign Up </button>

                        </div>
                        <div className="socials flex flex-row divide-x items-center justify-center m-3">
                            <div className='flex flex-row items-center p-2'><FcGoogle/> <p className='p2 m-2'>Google</p> </div>
                            <div className='flex flex-row items-center p-2'><FaGithub/> <p className='p2 m-2'>Github</p> </div>

                        </div>
                        
                    </form>
                    
                    
                </div>
            </section>
            
        </div>
    );
}

export default SignupView;