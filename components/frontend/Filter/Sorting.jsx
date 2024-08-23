'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function Sorting({ title, slug}) {
 const pathname = usePathname();
// console.log(pathname);
/* if(window !== "undefined"){
 const path = window.location.href;
  console.log(path);
} */
 const sortinLinks =[
  {
    title:"Relevance",
    href:`/category/${slug}`,
    params:"",
  },
  {
    title:"Price - Hi to Low",
    href:`/category/${slug}?sort=desc`,
    params:"?sort=desc",
  },
  {
    title:"Price - Low to High",
    href:`/category/${slug}?sort=asc`,
    params:"?sort=asc",
  },
]
  return (
    <div className='flex items-center justify-between'>
        {/* <h2 className='text-2xl'>Search Results - {title}</h2> */}
        <h2 className='text-2xl font-medium'>{title}</h2>
        <div className="flex text-sm items-center gap-3">
            <p className=''>Sort by:</p>
            <div className="flex items-center">
           {
            sortinLinks.map((link, i)=>{
              const actualPathName = `${pathname}${link.params}`;
              //console.log(link.href);
              //console.log(actualPathName);
              return(
                <Link key={i}
                className={`${actualPathName === link.href
                  ?"border border-lime-400 bg-slate-700 px-2 p-1 text-lime-400"
                  :"border border-lime-400 px-2 p-1"}`} 
                href={link.href}
                > {link.title}</Link>
               )})
            }
                
            </div>
        </div>
  </div> 
  );
}
