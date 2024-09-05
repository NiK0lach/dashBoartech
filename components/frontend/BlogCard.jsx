import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal';
import { MoveRight } from 'lucide-react';
import { getData } from '@/lib/getData';

export default async function BlogCard({training}) {
    const categoryId=training.categoryId;
    const category = await getData(`categories/${categoryId}`);
    const categoryTitle = category.title;

    //console.log(category);
    const normalDate = convertIsoDateToNormal(training.createdAt);
  return (
    <div className="group  rounded">
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <Image className="object-cover w-full h-48 transition-all duration-200 transform group-hover:scale-110"
                  src={training.imageUrl} alt={training.title} height={200} width={200}/>
              </div>
              <span
                className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                {categoryTitle}
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-gray-500 dark:text-slate-300">
              {normalDate}
            </p>
            <h2 className="mt-4 text-xl font-bold leading-tight text-gray-900 dark:text-slate-100 xl:pr-8">
              <Link href={`/blogs/${training.slug}`} title="" className="line-clamp-2">
               {training.title}
              </Link>
            </h2>
            <div className="mt-6">
              <Link href={`/blogs/${training.slug}`} title=""
                className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 dark:text-slate-100 uppercase border-b border-gray-900 group">
                Continue Reading
                <MoveRight className='w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1'/>
              </Link>
            </div>
          </div>
  );
}
