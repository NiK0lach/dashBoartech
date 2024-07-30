import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroCarrousel from './HeroCarrousel';
import { CircleDollarSign, CircleHelp, Repeat2 } from 'lucide-react';
import advert from '../../public/assets/images/gifFrontEnd.gif'
import SideBarCategories from './SideBarCategories';
import { getData } from '@/lib/getData';


export default async function Hero() {
    const banners = await getData('banners');
    //console.log(banners);
  return (
    <div className='grid grid-cols-12 gap-3 mb-6 px-8 lg:px-0 lg:gap-6'>
        <SideBarCategories/>
        <div className="col-span-full sm:col-span-7 bg-blue-800 rounded-md ">
          <HeroCarrousel banners={banners}/>
        </div>
        <div className='col-span-2 hidden sm:block bg-gray-100 p-3 dark:bg-gray-800 rounded-lg space-y-6'>
            <Link href="#" className='flex items-center space-x-2'>
                <CircleHelp className='shrink-0 w-5 h-5 text-slate-700 dark:text-lime-500'/>
                <div className="flex flex-col">
                    <h2 className='uppercase text-sm'>Help Center</h2>
                    <p className='text-[0.6rem]'>Guide to custumer care</p>
                </div>
            </Link>
            <Link href="#" className='flex items-center space-x-2'>
                <Repeat2 className='shrink-0 w-5 h-5 text-slate-700 dark:text-lime-500'/>
                <div className="flex flex-col ">
                    <h2 className='uppercase text-sm'>Easy Return</h2>
                    <p className='text-[0.6rem]'>Quick Return</p>
                </div>
            </Link>
            <Link href="/register-supplier" className='flex items-center space-x-2 mb-6'>
                <CircleDollarSign className='shrink-0 w-5 h-5 text-slate-700 dark:text-lime-500'/>
                <div className="flex flex-col ">
                    <h2 className='uppercase text-sm'>Vender Gernik</h2>
                    <p className='text-[0.6rem]'>Guide to custumer care</p>
                </div>
            </Link>
            <Image src={advert} alt='' className='w-full rounded-lg' />
        </div>
    </div>
  );
}
