
import React from 'react';
import PriceFilter from './PriceFilter';
import BrandFillter from './BrandFillter';

export default function Filters({slug}) {
 
  return (
    <div className='px-8'>
      <PriceFilter slug={slug}/>
      {/* <BrandFillter slug={slug}/> */}
    </div>
  );
}
