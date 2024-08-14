'use client';
import React from 'react';
import { User } from 'lucide-react';
import SearchForm from './SearchForm';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/images/logo/img_logogernik-00_03.png';
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';
import HelpModal from './HelpModal';
import CartCount from './CartCount';
import UserAvatar from '../backoffice/UserAvatar';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const {data:session,status}=useSession();
   if(status === "Loading"){
     return <p>Loading...</p>
   }
   

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
                { status === "unauthenticated" ? (
                  <Link href="/login" className='flex items-center space-x-1 text-xs  text-slate-700 dark:text-slate-50'>
                    <User />
                    <span>Login</span>
                  </Link>
                  ):( status==="authenticated" && <UserAvatar user={session?.user} /> )}

                  <HelpModal />
                  <CartCount/>
                </div>
               <ThemeSwitcherBtn/>
        </div>
    </div>
  );
}

