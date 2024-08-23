
import React from 'react';
import Link from 'next/link';


export default function PriceFilter({slug}) {
    const priceRanges =[
        {
            display:"Under 200",
            max:200,
        },
        {
            display:"Between 300 and 700",
            max:700,
            min:300,
        },
        {
            display:"Above 800",
            min:700,
        },
     ];
  return (
    <div>
        <div className="">
          <div className="flex justify-between">
            <h2 className='font-medium text-1xl'>Price</h2>
            <Link className='text-xs text-lime-500 border border-b border-lime-600 p-1 rounded-md' href={`/category/${slug}?sort=asc`}>Reset</Link> 
          </div>

           <div className="flex flex-col gap-3 text-sm py-4 text-slate-400">
                {
                  priceRanges.map((range, i) => {
                    return(
                      <Link 
                      key={i} 
                      href={range.max && range.min 
                        ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}` 
                            : range.max 
                            ? `/category/${slug}?sort=asc&max=${range.max}` 
                            : `/category/${slug}?sort=asc&min=${range.min}`
                        }>
                        {range.display}
                      </Link>
                     );
                  })}
           </div>
        </div>
    </div>
  );
}
