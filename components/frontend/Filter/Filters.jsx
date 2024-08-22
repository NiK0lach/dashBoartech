
import React from 'react';
import PriceFilter from './PriceFilter';
import BrandFillter from './BrandFillter';

export default function Filters() {
 
  return (
    <div className='bg-green-500'>
      <PriceFilter/>
      <BrandFillter/>
    </div>
  );
}
