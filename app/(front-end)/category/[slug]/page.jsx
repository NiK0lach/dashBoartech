import React from 'react';
import FilterComponent from '@/components/frontend/Filter/FilterComponent';
import { getData } from '@/lib/getData';


export default async function page({params:{slug}, searchParams}) {
  const {sort = "asc", min = 0, max = "", page = 1} = searchParams;
  const category = await getData(`categories/filter/${slug}`);
  let products = await getData(
    `products?catId=${category.id}&page=${page}&sort=${sort}&min=${min}&max=${max}`);
  
  //console.log(products);
  return (
    <div>
      <h2>Slug:{slug}</h2>
       <FilterComponent category={category} products={products}/>
    </div>
  );
}
