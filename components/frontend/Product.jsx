'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BaggageClaimIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function Product({product}) {
    const dispatch = useDispatch();
    function handleAddToCart(){
       //Triiger dispatch the reducer 
       dispatch(addToCart(product));
       toast.success("items added Sucessfully");
    }
  return (
    <div className='rounded-lg mr-3 bg-slate-200 border dark:bg-slate-800 overflow-hidden'>
        <Link href={`/products/${product.slug}`}>
        <Image
            src={product.imageUrl}
            alt={product.title}
            width={80} 
            height={80} 
            className='w-full rounded-lg' />
        </Link>
        <Link href={`/products/${product.slug}`}>
        <h2 className='text-center dark:text-slate-100 mt-2 text-slate-900 font-light text-md'>
        {product.title}</h2>
        </Link> 
        <div className="flex items-center justify-between gap-2 mt-3 py-2 px-2 pb-3">
            <p className='dark:text-blue-400 text-blue-600 text-md font-medium'>$ {product.productPrice}
                <small className="text-xs"> col</small></p>
            <button onClick={()=> handleAddToCart()} className='flex items-center space-x-2 bg-lime-500
            dark:bg-lime-800 text-slate-50
                text-sm rounded-lg p-1 hover:bg-lime-800 duration-300 transition-all dark:hover:bg-lime-400 '>
            <BaggageClaimIcon className=''/>
            <span>Add</span>
            </button>
        </div>              
    </div>
  );
}
