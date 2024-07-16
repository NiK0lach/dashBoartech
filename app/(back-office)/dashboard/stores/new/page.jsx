import React from 'react';
import { getData } from '@/lib/getData';
import StoreForm from '@/components/backoffice/Forms/NewStoreForm';
import FormHeader from '@/components/backoffice/FormHeader';

export default async function NewStore() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title,
    };
  });
 
  return (
    <div>
      <FormHeader title="New Product"/>
      <StoreForm categories={categories} />
    </div>
  );
}
