import React, { useState } from 'react'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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
    <div>

<div className="flex flex-col max-w-md px-10 py-10 bg-black rounded-lg shadow dark:bg-cyan-300 sm:px-6 md:px-10 lg:px-18">
    <div className="self-center mb-2 text-xl font-light text-cyan-400	color: rgb(34 211 238);
Aa sm:text-2xl dark:text-white">
        Create a new account
    </div>
    <span className="justify-center text-sm text-center text-cyan-400	color: rgb(34 211 238);
Aa flex-items-center dark:text-gray-400">
        Already have an account ?
        <a href="#" target="_blank" className="px-2 text-sm text-red-500 underline hover:text-blue-700">
            Sign in
        </a>
    </span>
    <div className="p-6 mt-8">
        <form action="#">
            <div className="flex flex-col mb-2">
                <div className=" relative ">
                    <input type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-blue text-gray-700 placeholder-black-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange}   placeholder="FullName"/>
                    </div>
                </div>
                <div className="flex gap-4 mb-2">
                    <div className=" relative ">
                        <input type="email" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-blue-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange}   placeholder="Email"/>
                        </div>

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="password" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-blue-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-white-400 focus:border-transparent" name="password" value={user.password} onChange={handleChange}      placeholder="password"/>
                                </div>
                            </div>
                            <div className="flex w-full my-4">
                                <button type="submit" className="py-2 px-4  bg-cyan-500 hover:bg-cyan-600 focus:ring-white-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" onClick={regist} >
                                    Register
                                </button>
                            </div>
                        </form>


                                                        </div>
                                                    </div>
    </div>
  )
}

export default Register