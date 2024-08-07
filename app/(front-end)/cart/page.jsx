'use client'
import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import BreadCrumb from '@/components/frontend/BreadCrumb';
//import Image from 'next/image'
//import { Minus, BaggageClaimIcon, Plus, Share2, TagIcon, Send, Trash2 } from 'lucide-react';
//import CartProducts from '@/components/frontend/cartProducts';
import CartItems from '@/components/frontend/CartItems';
import CartSubTotalCard from '@/components/frontend/CartSubTotalCard';
import EmptyCart from '@/components/frontend/EmptyCart';


export default function Cart() {
  const cartItems = useSelector((store)=> store.cart);
  const subTotal = cartItems.reduce((acc,currentItem) => {
  return acc + (currentItem.salePrice * currentItem.qty)
  }, 0).toFixed(2) ?? 0;
  console.log(cartItems)
  return (
  <>
    <BreadCrumb/>
       {cartItems.length>0?(<div className="grid grid-cols-12 md:gap-8 gap-6 px-8 py-3">
         <CartItems cartItems={cartItems} />
         <CartSubTotalCard subTotal={subTotal} />)
         </div>):(
          <EmptyCart/>
        )}
   </>
  );
}
