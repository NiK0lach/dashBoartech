
import React from 'react'
import { User } from 'lucide-react'
import SearchForm from './SearchForm'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/assets/images/logo/img_logogernik-00_03.png'
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import HelpModal from './HelpModal'

export default function Navbar() {
  return (
    <div className='bg-gray-300 dark:bg-gray-600'>
        <div className='flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8'>
            <Link className="" href="/">
                <Image src={Logo} alt="Gernik Logo" className="w-24" />
            </Link>
              {/* SEARCH */}
              <div className="flex-grow">
                <SearchForm />
              </div>
              <div className="flex gap-8">
                  <Link href="/login" className='flex items-center space-x-1 text-xs  text-slate-700 dark:text-slate-50'>
                    <User />
                    <span>Login</span>
                  </Link>
                  <HelpModal />
                  <Link href="/cart"
                        type="button"
                        className="relative inline-flex items-center
                        p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
                        >
                        <ShoppingCart className="text-lime-700 dark:text-lime-500" />
                        <span className="sr-only">Carta</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
                        25
                        </div>
                  </Link>
                  
               </div>
               <ThemeSwitcherBtn/>
        </div>
    </div>
  );
}

