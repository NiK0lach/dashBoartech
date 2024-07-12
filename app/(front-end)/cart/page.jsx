import BreadCrumb from '@/components/frontend/BreadCrumb'
import Image from 'next/image'
import React from 'react'
import { Minus, BaggageClaimIcon, Plus, Share2, TagIcon, Send, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  return (
  <>
    <BreadCrumb/>
    <div className="grid grid-cols-12 gap-8">
         <div className="col-span-8">
              <h2 className='py-2 mb-6 text-2xl'>Your Cart</h2>
              <div className="flex items-center justify-between border-b border-slate-400
              text-slate-600 dark:text-slate-200 pb-3 font-semibold text-sm mb-4">
                <h2 className="uppercase">Product</h2>
                <h2 className="uppercase">Quantity</h2>
                <h2 className="uppercase">Price</h2>
              </div>

              <div className='border-b'>
                 <div className='flex items-center justify-between text-slate-600
                   dark:text-slate-200 pb-3 font-semibold text-sm'>
                    <div className="flex items-center gap-3">
                      <Image 
                       src="/assets/images/banner/bn-0Post 4_1.jpg"
                       alt=''
                       width={249}
                       height={249}
                       className='rounded-xl w-20 h-20'
                      />
                        <div className="flex flex-col">
                          <h2>Apple Watch Series 7 - 44mm</h2>
                          <small>Golden</small>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center rounded-xl border border-gray-400 '>
                          <button className='px-4 py-2 hover:text-lime-400 transition-all duration-300 border-r border-gray-400'>
                          <Minus/>
                          </button>
                          <p className='flex-grow px-6 py-3'>1</p>
                          <button className='px-6 py-3 hover:text-lime-400 transition-all duration-300 border-l border-gray-400'>
                          <Plus/>
                          </button>
                          
                    </div>
                    <div className="flex items-center gap-2">
                      <h4>$278.000</h4>
                      <button><Trash2 className='dark:text-red-600 h-5 w-5 hover:text-white dark:hover:text-white'/></button>
                    </div>
                  </div>
              </div>
              {/* CouponForm */}
              <div className="flex items-center gap-2 py-4 px-3">
              <input 
                type="text" 
                id="email"
                aria-describedby='helper-text-explanation'
                className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
                placeholder="name@electrnik.com"/>
                <button className='shrink-0 py-2.5 px-4 rounded-lg bg-lime-600 hover:bg-lime-400 dark:hover:bg-lime-800'>Apply coupon</button>
              </div>
              
         </div>
         
         <div className="col-span-4 sm:block  bg-white border border-gray-300
          dark:border-gray-700 rounded-lg
            dark:bg-gray-800 text-slate-800 overflow-hidden p-5">
              <span className='text-3xl dark:text-slate-100'>Card Total</span>
              <div className="flex items-center justify-between border-b border-gray-600 pb-3">
                <span className='text-xl py-4 dark:text-slate-100'>SubTotal</span>
                <span className='text-xl  dark:text-slate-100'>$589.000</span>
              </div>
              <div className='flex items-center justify-between dark:text-slate-100 pb-4 pt-3'>
                <span>Iva</span>
                <span>$135.000</span>
              </div>
              <div className='flex items-center justify-between dark:text-slate-100 pb-4'>
                <span>Shipping</span>
                <span>$35.000</span>
              </div>
              <p className='dark:text-slate-400 pb-4 text-sm font-light py-2'>Solo cargamos shipping si la compra es mas de $50.000.</p>
              <div className='flex items-center justify-between dark:text-slate-100 pb-6 border-t
               border-gray-600 py-4'>
                <span className='text-2xl font-semibold'>Total</span>
                <span className='text-2xl'>$850.000</span>
              </div>
              <Link href='#' alt="" className='text-slate-900 bg-slate-200
               dark:hover:bg-lime-500 hover:bg-lime-500 transition-all duration-300 hover:text-slate-100
               rounded-lg py-3 px-4 font-bold' >Continuar con Pago</Link>
         </div>
    </div>
 </>
  );
}
