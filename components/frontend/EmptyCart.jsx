import React from 'react';
import Link from 'next/link';

export default function EmptyCart() {
  return (
  <div className="flex items-center justify-center min-h-screen">
    <div className='px-4 py-6 text-center md:text-2xl'>
       <p>No items your car is empty
       <Link className='text-lime-500' href="/"> Start Shooping</Link>
       </p>
    </div>
  </div>
  );
}
