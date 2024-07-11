
import React from 'react'
import StoreSlider from './StoreSlider'
import { getData } from '@/lib/getData'

export default async function StoreList() {
  const stores = await getData('stores');
  return (
    <div className='px-8 py-16'>
      
      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
      <h2 className='py-2 pb-4 text-xl font-light text-slate-600 dark:text-slate-200 text-center'>Stores list</h2>
      <StoreSlider stores={stores}/>
      </div>
      
    </div>
  )
}
