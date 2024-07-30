'use client'
import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { decrementQty, removeFromCart , incrementQty} from '@/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartProducts( { cartItem } ) {
    const dispatch =useDispatch();
    function handleCartItemDelete(cartId){
        //invoque dispatch remove from card reducer
        dispatch(removeFromCart(cartId));
    }
    function handleCartItemQtyIncrement(cartId){
        dispatch(incrementQty(cartId));
    }
    function handleCartItemQtyDecrement(cartId){
        dispatch(decrementQty(cartId));
    }
  return (
        <div className='flex items-center justify-between text-slate-600
        dark:text-slate-200 pb-3 font-semibold text-sm'>
        <div className="flex items-center gap-3">
        <Image 
            src={cartItem.imageUrl}
            alt={cartItem.title}
            width={249}
            height={249}
            className='rounded-xl w-20 h-20'
        />
            <div className="flex flex-col">
            <h2>{cartItem.title}</h2>
            
            </div>
        </div>
        <div className='flex gap-3 items-center rounded-xl border border-gray-400 '>
            <button onClick={()=>handleCartItemQtyDecrement(cartItem.id)} className='px-4 py-2 hover:text-lime-400 transition-all duration-300 border-r border-gray-400'>
            <Minus/>
            </button>
            <p className='flex-grow px-6 py-3'>{cartItem.qty}</p>
            <button onClick={()=>handleCartItemQtyIncrement(cartItem.id)} className='px-6 py-3 hover:text-lime-400 transition-all duration-300 border-l border-gray-400'>
            <Plus/>
            </button>
            
        </div>
        <div className="flex items-center gap-2">
        <h4 className='text-2xl px-4'>${cartItem.salePrice} <small>col</small></h4>
        <button onClick={()=>handleCartItemDelete(cartItem.id)}>
            <Trash2 className='dark:text-red-600 h-5 w-5 hover:text-white dark:hover:text-white'/>
        </button>
        </div>
    </div>
  );
}

