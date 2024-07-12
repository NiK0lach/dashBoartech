
import React from 'react';
import BreadCrumb from '@/components/frontend/BreadCrumb';
import Image from 'next/image';
import { Minus, BaggageClaimIcon, Plus, Share2, TagIcon, Send } from 'lucide-react';
import CategoryCarousel from '@/components/frontend/CategoryCarousel';
import { getData } from '@/lib/getData';
import Link from 'next/link';


export default async function ProductDetailPage({params:{slug}}) {
    const category= await getData('/categories/66906817973bcb0869e99eca');
  return (
    <div>
        <BreadCrumb/> 
       <div className="grid grid-cols-12 gap-8">
          <div className='col-span-3'>
           <Image src='/assets/images/banner/bn-0Post 4_1.jpg'
            alt=''
            width={500}
            height={600}
            className='w-full object-cover' />
        </div>
        <div className='col-span-6'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl lg:text-3xl font-semibold'>Baterias de lithio</h2>
                <button>
                    <Share2/>
                </button>
            </div>
            
            <div className='border-b border-gray-700 pb-3'>
            <p className='py-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Perspiciatis nostrum voluptatibus aliquam necessitatibus id.</p>
                <div className='flex items-centern justify-between mb-4'>
                    <p className='pt-4 text-sm font-light'><span className='font-bold'>SKU:</span> 36546434</p>
                    <p className='bg-lime-600 px-4 py-2 rounded-full text-slate-900 font-ligth '>
                        <span className='font-bold'>Stock</span>: 10</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 pb-6  justify-between border-b border-gray-700">
                <div className="flex items-center gap-4">
                    <h4 className='pt-3 text-2xl'>$120.0000 co</h4>
                    <del className='text-slate-400 text-sm'>$110.000 co</del>
                </div>
                
                <p className='flex items-center font-extralight'>
                 <TagIcon className='w-5 h-5 text-slate-400 me-2'/>
                 <span>Save 50% rigth now</span>
                </p>
            </div>

            <div className='flex justify-between items-center py-6'>
               <div className="flex gap-3 items-center rounded-xl border border-gray-400">
                   <button className='px-4 py-2 hover:text-lime-400 transition-all duration-300 border-r border-gray-400'
                   ><Minus/></button>
                    <p className='flex-grow px-6 py-3'>1</p>
                   <button className='px-6 py-3 hover:text-lime-400 transition-all duration-300 border-l border-gray-400'>
                    <Plus/></button>
                </div> 
                <button className='flex items-center p-3 space-x-2 bg-lime-500
                   dark:bg-lime-500 text-slate-100 dark:hover:text-slate-500
                   text-sm rounded-lg  hover:bg-lime-800 duration-300 transition-all dark:hover:bg-lime-400 '>
                   <BaggageClaimIcon className=''/>
                   <span>Add to cart</span>
                </button>   
            </div>    
        </div>
       <div className='col-span-3 sm:block  bg-white border border-gray-300 dark:border-gray-700 rounded-lg
            dark:bg-gray-800 text-slate-800 overflow-hidden'>
                <h2 className='bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-100
                py-3 px-6 font-semibold '> Delivery and returns</h2>
                
                <div className="p-4">
                    <div className="flex items-center gap-3 py-2 px-4
                        dark:text-slate-50 text-slate-50 rounded-lg bg-orange-400 justify-between">
                            <span>Gernik express</span>
                            <Send/>
                    </div>
                    <div className='text-sm py-3 text-slate-800 dark:text-slate-100 border-b border-gray-500'>
                        <span className='text-slate-500 dark:text-slate-300 mr-3'>Elegible para entrega gratuita</span>
                        <Link href="#" className='text-sm py-1 block  text-lime-600 dark:text-lime-500 '>Ver detalle</Link>
                    </div>
                    <h2 className='text-slate-500 dark:text-slate-300  font-semibold py-2'>
                        Elija su Ubicación</h2>
                    <div className="py-2 ">
                      <select id="countries" className="bg-gray-50  text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="py-2 ">
                        <select id="countries" className="bg-gray-50 border
                        border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="py-2 ">
                        <select id="countries" className="bg-gray-50 border
                        border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
                
            </div>
       </div>

       <div className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-slate-900
        py-3 h-96 px-8 rounded-lg mt-6">
            <h2 className='text-xl font-semibold mb-4 py-6 px-5 bg-slate-50 dark:bg-slate-800 dark:border-gray-900 rounded-lg'>Related products</h2>
            <div className='scale-75 origin-top-left my-5 rounded-xl'>
            <CategoryCarousel products={category.products} className=""/> 
           </div>
       </div>
    </div>
  );
}
