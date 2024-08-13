import React from 'react'
import Link from 'next/link';

export default function CartSubTotalCard({subTotal}) {
  const formattedSubTotalPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP', 
  }).format(subTotal);
  const shipping = 35.0;
  const tax = 21;
  const iva = subTotal * 0.21;
  const totalPrice = (Number(subTotal) + Number(shipping) + Number(iva)).toFixed(2);
  //console.log(totalPrice);
 // Format as a financial value
  const formattedTotalPrice = new Intl.NumberFormat('es-CO', {
   style: 'currency',
   currency: 'COP', 
  }).format(totalPrice);
console.log(formattedTotalPrice);
 //console.log(subTotal);
 //console.log(tax); 
 //console.log(iva);
  return (
    <div className="md:col-span-4 col-span-full sm:block  bg-white border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 text-slate-800 overflow-hidden p-5">
              <span className='text-3xl dark:text-slate-100'>Card Total</span>
              <div className="flex items-center justify-between border-b border-gray-600 ">
                <span className='text-xl py-4 dark:text-slate-100'>SubTotal</span>
                <span className='text-lg dark:text-slate-300'>{formattedSubTotalPrice} <small>col</small></span>
              </div>
              <div className='flex items-center justify-between dark:text-slate-200 pb-4 pt-3'>
                <span>Iva</span>
                <span>{tax}%</span>
              </div>
              <div className='flex items-center justify-between dark:text-slate-200 pb-4'>
                <span>Shipping</span>
                <span>${shipping}K</span>
              </div>
              <p className='dark:text-slate-400 pb-4 text-sm font-light py-2'>Solo cargamos shipping si la compra es mas de $50.000.</p>
              <div className='flex items-center justify-between dark:text-slate-100 pb-6 border-t border-gray-600 py-4'>
                <span className='text-2xl font-semibold'>Total</span>
                <span className='text-2xl'>{formattedTotalPrice}</span>
              </div>
              <Link href='#' className='text-slate-900 bg-slate-200  dark:hover:bg-lime-500 hover:bg-lime-500 transition-all duration-300 hover:text-slate-100 rounded-lg py-3 px-4 font-bold float-end'>Continuar con Pago</Link>
    </div>
  );
}

