import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Hero() {
  return (
    <div className='flex gap-8'>
        <div className="w-1/3 bg-white border border-gray-300 rounded-lg
         dark:bg-gray-700 text-slate-800 overflow-hidden ">
         <h2 className='bg-slate-100  py-3 px-6 font-semibold border-b border-gray-300'>Busca tu Categoria</h2>
         <div className='py-3 px-6'>
            <Link href="#" className='flex items-center gap-3 hover:bg-slate-50 duration-500 transition-all'>
            <Image
            width={556}
            height={556}
            className='w-12 h-12 rounded-full object-cover border border-lime-300'
            src="/assets/images/catalogo/batt/lipo4-prismatic-cell-opt.jpg"
            alt='Electricas'
            /><span className='font-bold'>Baterias</span>
            </Link>
            
            
         </div>
        </div>
        <div className="w-2/3 bg-blue-800 rounded-md py-3 px-6">
        Carrousel
        </div>
    </div>
  );
}
