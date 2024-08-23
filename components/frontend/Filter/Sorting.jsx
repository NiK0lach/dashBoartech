'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Sorting({ title, slug, isSearch}) {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  console.log("sortParam",sortParam);
 // const pathname = usePathname();
  // console.log(pathname);
  /* if(window !== "undefined"){
  const path = window.location.href;
    console.log(path);
  } */
 const sortingLinks =[
  {
    title:"Relevance",
    href:`/category/${slug}`,
    sort:null,
  },
  {
    title:"Price - Hi to Low",
    href:`/category/${slug}?sort=desc`,
    sort:"desc",
  },
  {
    title:"Price - Low to High",
    href:`/category/${slug}?sort=asc`,
    sort:"asc",
  },
]
  return (
    <div className='flex items-center justify-between'>
        {/* <h2 className='text-2xl'>Search Results - {title}</h2> */}
        <h2 className='text-2xl font-medium'>{isSearch && "Search Results -"} {title}</h2>
       <div className="flex text-sm items-center gap-3">
            <p className=''>Sort by:</p>
            <div className="flex items-center">
           {sortingLinks.map((link, i)=>{
             return(
              <Link key={i}
                className={`${link.sort === sortParam
                  ? "border border-lime-400 bg-slate-900 px-2 p-1 text-lime-400"
                  : "border border-slate-500 px-2 p-1"}`} 
                href={link.href}
                > {link.title}</Link>
               );
              })}
            </div>
        </div>
   </div> 
  );
}
