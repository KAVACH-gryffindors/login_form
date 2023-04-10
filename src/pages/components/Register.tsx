import React, { useState } from 'react'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Header from './Header';

function Register() {
    const notify = () => toast("Wow You're registered!");

    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = (e) =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
   const regist = (e)=>{
    e.preventDefault();
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:6969/Register",user )
    .then(res=>{
        if (res.status === 200){
        toast.success("Success!");
        }else {
            toast.error("Invalid data field")
        }                 
        console.log(res)
    })                
    console.log(user)
   }
   else{

    toast.error('🦄 type all data fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 
       
   }
}
   
  return (
   <div >
   <Header />
    <div className=" max-h-max ">
    <div className="flex-1 flex flex-col justify-center py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm bg-white px-10 py-5 rounded-xl lg:w-96">
        <div>
          <h2 className="mt-5 text-3xl font-extrabold text-gray-900">Register</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link href="/components/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Already User?
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={user.name} onChange={handleChange} 
                    autoComplete=""
                    required
                    className="bg-gray-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={user.email} onChange={handleChange} 
                    autoComplete=""
                    required
                    className="bg-gray-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={user.password} onChange={handleChange} 
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-gray-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                {/* <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button> */}
                <button type="button" className ="w-full flex justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-800 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 px-5 py-2.5 text-center mr-2 mb-2 border-transparent rounded-md text-sm font-medium text-white bg-indigo-60 focus:outline focus:ring-offset-2" onClick={regist}> Register </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <div className="fixed bottom-5 left-1/2 -translate-x-1/2 -z-10">
				<h3 className="text-xl text-white  text-opacity-70 w-full whitespace-nowrap">
					Made with 💙  by ZKryptoScan
				</h3>
			</div>
  
   </div>
   
  
  )
}

export default Register