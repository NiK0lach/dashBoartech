'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Circle } from 'lucide-react';


export default function PriceFilter({ slug }) {
    const searchParams = useSearchParams();
    const minParam = searchParams.get("min");
    const maxParam = searchParams.get("max");
    //console.log(minParam,maxParam);
    //console.log(slug);
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
            min:800,
        },
     ];

     const router = useRouter();
     const {handleSubmit, reset, register } = useForm();
     function onSubmit(data){
      const { min, max } = data;
        //min = parseInt(data.min);
        //max = parseInt(data.max);
        //console.log(min, max);
        if(min && max){
           router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`);
           reset(); 
        } else if (min) {
        router.push(`/category/${slug}?sort=asc&min=${min}`);
           reset(); 
        } else if (max){
            router.push(`/category/${slug}?sort=asc&max=${max}`);
            reset();  
        }
     }

  return (
    <div>
        <div className="">
          <div className="flex justify-between">
            <h2 className='font-medium text-xl'>Price</h2>
            <Link className='text-white text-sm bg-lime-500 hover:bg-lime-800
            focus:right-4 focus:ring-lime-300 font-medium  border border-b border-lime-600
             px-5 py-2.5 mb-2 rounded-lg
            dark:bg-lime-700 dark:hover:bg-lime-400 focus:outline-none dark:focus:ring-lime-800'
             href={`/category/${slug}`}>Reset Filters</Link> 
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
                      }
                      className={`${
                         (range.min && range.min == minParam) ||
                         (range.max && range.max == maxParam) ||
                         (range.min &&
                            range.max &&
                            range.min == minParam &&
                            range.max == maxParam)
                            ? "flex gap-2 items-center text-lime-500"
                            : "flex gap-2 items-center"
                        }`}  
                        >
                         <Circle className='w-4 h-4 flex-shrink-0'/>
                        {range.display}
                      </Link>
                     );
                  })}
           </div>

          <form 
             onSubmit={handleSubmit(onSubmit)}
             className='grid grid-cols-3 gap-2 my-4'  
             >
              <div className="col-span-1">
                  <input
                   {...register("min")}
                   type='number'
                   id="cvv-input"
                   area-describedby="helper-text-explanation"
                   className='bg-gray-50 border border-gray-300 text-gray-900
                   text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500
                   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
                   placeholder='min'
                  />
                </div>  
                <div className="col-span-1">
                    <input
                      {...register("max")}
                       type='number'
                       id="cvv-input"
                   area-describedby="helper-text-explanation"
                   className='bg-gray-50 border border-gray-300 text-gray-900
                   text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500
                   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
                   placeholder='max'
                    />
                </div>
                <div className="col-span-1">
                   <button
                   type='submit'
                   className='text-white bg-lime-700 hover:bg-lime-800
                   focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5
                   me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800'
                   >Go</button>  
                </div>  
            </form>     
        </div>
    </div>
  );
}
