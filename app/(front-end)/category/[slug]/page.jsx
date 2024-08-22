import React from 'react';
import FilterComponent from '@/components/frontend/Filter/FilterComponent';
import { getData } from '@/lib/getData';


export default async function page({params:{slug}}) {
  const categories = await getData(`categories/filter/${slug}`);
  const {products} = categories;
  //console.log(products);
  return (
    <div>
      <h2>Slug:{slug}</h2>
       <FilterComponent products={products}/>
    </div>
  );
}
