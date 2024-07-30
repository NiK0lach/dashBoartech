import React from 'react';
import CartProducts from '@/components/frontend/CartProducts';
import EmptyCart from './EmptyCart';


export default function CartItems({ cartItems }) {
  return (
    <div className="md:col-span-8 col-span-full">
           {cartItems.length > 0 && (
            <>
                <h2 className='py-2 mb-6 text-2xl'>Your Cart</h2>
                <div className="flex items-center justify-between border-b border-slate-400 text-slate-600 dark:text-slate-200 pb-3 font-semibold text-sm mb-4">
                <h2 className="uppercase">Product</h2>
                <h2 className="uppercase">Quantity</h2>
                <h2 className="uppercase">Price</h2>
              </div>
            </>
            )}
              <div className='border-b'>
                {cartItems.length > 0 ? (cartItems.map((item, i) => {
                  return <CartProducts cartItem={item} key={i} />
                  }) ) : ( <EmptyCart /> )
                }
              </div>
              
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
  );
}