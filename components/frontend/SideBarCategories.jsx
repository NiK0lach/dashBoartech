import { getData } from '@/lib/getData';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default async function SideBarCategories() {
    const categories = await getData('categories');
    
  return (
    <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 dark:border-gray-700 rounded-lg
         dark:bg-gray-800 text-slate-800 overflow-hidden">
            <h2 className='bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-100
            py-3 px-6 font-semibold border-b-2 border-gray-300 dark:border-gray-300'>
                Busca tu Categoria ({categories.length})
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
                            src={category.imageUrl}
                            alt={category.title}
                            /><span className='text-md'>{category.title}</span>
                            </Link>
                        );
                    })
                }
                
                
                
            </div>
        </div>
  )
}
