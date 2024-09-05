import React from 'react'
import Link from 'next/link'
import TrainingCarousel from './TrainingCarousel'
import { getData } from '@/lib/getData'
import BlogCard from './BlogCard';
import { MoveRight } from 'lucide-react';


export default async function TrainingList({training, title}) {
  
  return (
    <section className="py-12 bg-white dark:bg-slate-800 rounded-md dark:text-slate-100 shadow-lg sm:py-14 lg:py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className=" mx-auto md:mx-0">
          <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 sm:text-4xl">
            {title}
          </h2>
          <Link href="/blogs" className='bg-slate-500 py-3 px-5 rounded flex items-center'>See All <MoveRight className='flex-shrink-0 mx-2'/></Link>
          </div>
          <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-slate-300">
            Create custom landing pages with Rareblocks that converts more visitors than any website.
          </p>
        </div>

        <div
          className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
          
          {
            training.map((training,i)=>{
              return <BlogCard key={i} training={training} />
            })
          }

          
        </div>
      </div>
    </section>
  );
}

