'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroCarrousel from './HeroCarrousel';
import { CircleDollarSign, CircleHelp, Repeat2 } from 'lucide-react';
import advert from '../../public/assets/images/gifFrontEnd.gif'


export default function Hero() {
    const categories = [
        {},{},{},{},{},
    ];
  return (
    <div className='grid grid-cols-12 gap-3 mb-6 px-8 lg:px-0 lg:gap-6'>
        <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 dark:border-gray-700 rounded-lg
         dark:bg-gray-800 text-slate-800 overflow-hidden">
            <h2 className='bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-100
            py-3 px-6 font-semibold border-b-2 border-gray-300 dark:border-gray-300'>
                Busca tu Categoria
            </h2>
            <div className='py-3 px-6 h-[300px] overflow-y-auto flex flex-col gap-3 mt-2'>
                {
                    categories.map((category, i) => {
                        return(
                            <Link key={i} href="#" className='flex items-center gap-2
                            hover:bg-slate-50 duration-500 transition-all dark:text-slate-300
                            rounded-md dark:hover:bg-slate-600'>
                            <Image
                            width={556}
                            height={556}
                            className='w-10 h-10 rounded-full object-cover border border-lime-300'
                            src="/assets/images/catalogo/batt/lipo4-prismatic-cell-opt.jpg"
                            alt='Electricas'
                            /><span className='text-md'>Baterias</span>
                            </Link>
                        );
                    })
                }
                
                
                
            </div>
        </div>
        <div className="col-span-full sm:col-span-7 bg-blue-800 rounded-md ">
          <HeroCarrousel/>
        </div>
        <div className='col-span-2 hidden sm:block bg-gray-100 p-3 dark:bg-gray-800 rounded-lg space-y-6'>
            <Link href="#" className='flex items-center space-x-2'>
                <CircleHelp className='shrink-0 w-5 h-5 text-slate-700 dark:text-lime-500'/>
                <div className="flex flex-col ">
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
