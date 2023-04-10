import React from 'react'
import localStorage from "localStorage"
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), {
    loading: () => <p className='text-center'>Loading...</p>,ssr:false,
  });

function Landing() {
   
  return (
    <div>
<Header />
      
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 -z-10">
				<h3 className="text-xl text-white  text-opacity-70 w-full whitespace-nowrap">
					Made with 💙  by ZKryptoScan
				</h3>
			</div>
    </div>
  )
}

export default Landing