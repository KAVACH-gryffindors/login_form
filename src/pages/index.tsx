import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('./components/Landing'), {
  loading: () => <p className='text-center'>Loading...</p>, ssr:false,
});

const Login = dynamic(() => import('./components/Login'), {
  loading: () => <p className='text-center'>Loading...</p>,ssr:false,
});

export default function Home() {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const cachedUser = localStorage.getItem("Cache");
    if (cachedUser) {
      setLoginUser(cachedUser);
    }
  }, []);

  return (
    <div className="bg-black">
      {loginUser == null ? (
        <Login />
      ) : (
        <Landing />
      )}
    </div>
  );
}
