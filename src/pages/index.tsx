import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Head from "next/head";

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
      <Head>
        <title>ZkryptoScan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-Y2_QQk-UWmdMS8Cf8VP4bmki6RncRR51EVGyop2qbianfLLvlzpz1Z8a6aB90AU1CPR0V88kivDAJ2I13mik127Rp-LRTmdg1lMyUuXHV8H8ruEWwP8hDSqZVd2FjNjtYrCewagC1_qQzIyEmd3nNTlHkHFxbf2ggS33qTw9j8_76nY7etEOs77K/s320/Kavachlogo-removebg-preview.png" />
      </Head>
      {loginUser == null ? (
        <Login />
      ) : (
        <Landing />
      )}
    </div>
  );
}
