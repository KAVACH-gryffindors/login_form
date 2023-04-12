import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chains, wagmiClient } from "../../config/walletConfig"
import "@rainbow-me/rainbowkit/styles.css"
import { Dialog } from '@headlessui/react'
import {useState} from "react"
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import {RiCloseCircleLine} from 'react-icons/ri'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link"
import localStorage from "localStorage"

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Transactions', href: '/Transactions' },
	]
  
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const data =localStorage.getItem("Cache")
  const signout = () => {
    localStorage.clear("Cache")
    window.location.href = "/"
}
    
	return (
		<>
    <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
		 <header className="absolute inset-x-0 top-0 mb-20 font-Fredoka z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h3 className="text-gray-200 font-AgrandirGrandHeavy leading-[62px] font-extrabold text-3xl md:text-5xl">
						ZK
						<span className='text-yellow-400'>ryptoScan 📈</span>
					</h3>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <BsReverseLayoutTextSidebarReverse className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 font-bold  lg:gap-x-12 lg:justify-end">
          {navigation.map((item) => (
              <Link  href={item.href} key={item.name} className="text-lg py-2 font-semibold leading-6  text-gray-200">
                {item.name}
              </Link>
            ))}
              <ConnectButton />
              <div>
              {data ===null ? <></>: <button className="btn-grad" onClick={signout}>Sign out</button>}
              </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
         
              <h3 className="text-yellow font-AgrandirGrandHeavy leading-[62px] font-extrabold text-3xl">
						ZK
						<span className='text-blue-600'>ryptoScan</span>
					</h3>
           
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <RiCloseCircleLine className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                 <ConnectButton />
                </div>
                <div>
              {data ===null ? <></>: <button className="btn-grad" onClick={signout}>Sign out</button>}
              </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>	
      </RainbowKitProvider>
    </WagmiConfig>
		</>
	)
}

export default Header;