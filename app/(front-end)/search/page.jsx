'use client';
import React from 'react';
import FilterComponent from '@/components/frontend/Filter/FilterComponent';
import { getData } from '@/lib/getData';


export default async function Search({searchParams}) {
  const {search, sort, min, max} = searchParams;
  const page = searchParams.page || 1;
  //console.log(max);
 
  let products;
  if(search){
    products = await getData(`products?search=${search}`);
  }else{
    products = await getData(`products?search=`);
  }

  const category = {
    title:search,
    slug:"",
    products,
    isSearch:true
  };
  
  
  //const {products} = category;
  //console.log(products);
  return (
    <div>
      
       <FilterComponent
        category={category}
        products={products}
        />
    </div>
  );
}

