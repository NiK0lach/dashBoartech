import React from 'react';
import Heading from '@/components/backoffice/Heading';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function PageHeader({ heading,linkTitle, href }) {
  return (
    <div className="flex justify-between py-4 mb-4">
        <Heading title={heading} />
        <Link href={href} className='text-white bg-lime-600  hover:bg-lime-600/90 focus:ring-4 focus:outline-none  py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-slate-600 /30 me-2 space-x-3'>
        <Plus/>
        <span>{linkTitle}</span>
        </Link>
      </div>
  );
}


