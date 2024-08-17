'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '@/components/frontend/BreadCrumb';
import CartItems from '@/components/frontend/CartItems';
import CartSubTotalCard from '@/components/frontend/CartSubTotalCard';
import EmptyCart from '@/components/frontend/EmptyCart';


export default function Cart() {
  const cartItems = useSelector((store)=> store.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
    //return acc + (currentItem.salePrice * currentItem.qty)}, 0).toFixed(2) ?? 0;
    return acc + currentItem.salePrice * currentItem.qty;
   }, 0).toFixed(2) ?? 0;


  console.log(cartItems);
  //console.log(subTotal);

    return(
      <>
      <BreadCrumb/>
        {cartItems.length > 0 ?(
          <div className="grid grid-cols-12 md:gap-8 gap-6 px-8 py-3">
            <CartItems cartItems={cartItems} />
            <CartSubTotalCard subTotal={subTotal} />
          </div>
          ):(
            <EmptyCart/>
          )}
      </>
    );
}
