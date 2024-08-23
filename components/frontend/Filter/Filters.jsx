
import React from 'react';
import PriceFilter from './PriceFilter';
import BrandFillter from './BrandFillter';

export default function Filters({slug, isSearch}) {
 
  return (
    <div className='px-8'>
      <PriceFilter slug={slug} isSearch={isSearch}/>
      {/* <BrandFillter slug={slug}/> */}
    </div>
  );
}
