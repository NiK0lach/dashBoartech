'use client';
import React from 'react';
import { BaggageClaimIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function AddToCartButton({product}) {

    const dispatch = useDispatch();
    function handleAddToCart(){
       //Trigger dispatch the reducer 
       dispatch(addToCart(product));
       toast.success("items added Sucessfully");
    }

  return (
    <button onClick={()=> handleAddToCart()} className='flex items-center p-3 space-x-2 bg-lime-500
    dark:bg-lime-600 text-slate-100 dark:hover:text-slate-500
    text-sm rounded-lg  hover:bg-lime-800 duration-300 transition-all dark:hover:bg-lime-400 '>
    <BaggageClaimIcon className=''/>
    <span>Add to cart</span>
 </button>   
 
  );
}
