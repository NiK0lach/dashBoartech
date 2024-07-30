import React from 'react'
import Link from 'next/link';

export default function CartSubTotalCard({subTotal}) {
  return (
    <div className="col-span-4 sm:col-span-full sm:block  bg-white border border-gray-300
          dark:border-gray-700 rounded-lg
            dark:bg-gray-800 text-slate-800 overflow-hidden p-5">
              <span className='text-3xl dark:text-slate-100'>Card Total</span>
              <div className="flex items-center justify-between border-b border-gray-600 pb-3">
                <span className='text-xl py-4 dark:text-slate-100'>SubTotal</span>
                <span className='text-xl  dark:text-slate-100'>${subTotal} col</span>
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
  )
}

