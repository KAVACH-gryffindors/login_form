import Link from "next/link";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import localStorage from "localStorage"

interface User {
  email: string;
  password: string;
}


export default function Login() {
 
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:6969/Login", user)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data.message)
        if (res.data.message == "login success") {
          localStorage.setItem("Cache", res.data);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };
  

  return (
    <>
    <Header />
      <div className=" max-h-max ">
        <div className="flex-1 flex flex-col justify-center py-36 px-4 sm:py-20 sm:px-4  lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full bg-white px-10 py-5 rounded-xl max-w-sm lg:w-96">
            <div>
              <h2 className="mt-5 text-3xl font-extrabold text-gray-900 ">Sign in </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link href="/components/Register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Create new Account
                </Link>
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                       id="email"
                       name="email"
                       type="email"
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
                        type="password"
                         value={user.password}  onChange={handleChange} 
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    <button type="button" className ="w-full flex justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-800 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-200 text-lg rounded-lg px-5 py-2.5 text-center mr-2 mb-2 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-60 focus:outline focus:ring-offset-2" onClick={login}> Login </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 -z-10">
				<h3 className="text-xl text-white text-opacity-70 w-full whitespace-nowrap">
					Made with 💙  by ZKryptoScan
				</h3>
			</div>
    </>
  )
}