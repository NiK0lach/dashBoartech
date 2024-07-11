import React from 'react'
import Link from 'next/link'
import TrainingCarousel from './TrainingCarousel'


export default function TrainingList() {
  return (
    <div className='bg-white border border-gray-300 dark:border-gray-700 rounded-lg
         dark:bg-gray-800 text-slate-800 overflow-hidden mt-6'>
       <div className='bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-100
            py-3 px-6 font-semibold border-b-2 border-gray-300 dark:border-gray-300 flex justify-between items-center'>
            <h2 className='text-center dark:text-slate-100 text-slate-800 my-2 text-xl'>Gernik communidad</h2> 
            <Link className='bg-lime-900 hover:bg-lime-800 duration-300 transition-all
             text-slate-50 rounded-md px-4 py-2'
             href="#" alt="">Ver mas</Link>
        </div>
       <div className="bg-white dark:bg-slate-900 py-4">
           <TrainingCarousel/>
       </div>
    </div>
  )
}

