import React, { useState } from 'react'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {  FcGoogle,} from 'react-icons/fa';


export default Signin;
const menuItems = [
    {
      href: "/FcGoogle",
      title: "Google",
    },
    {
      href: "/github",
      title: "Github",
    },
    {
      href: "/twitter",
      title: "Twitter",
    },
  ];

function Signin() {
  return (
    <>

      <main className={(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
</>
  )
}