import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Breadcrumb({title}) {
  return (
       <div className=" py-4 px-8">
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                    <Link href="/">Home</Link>
                    <ChevronRight className='w-5 h-5'/>
                    <p className='text-lime-800'>{title}</p>
                </div>
                <p>1-40 of 1,000 results </p>
            </div>
        </div>
   );
}
