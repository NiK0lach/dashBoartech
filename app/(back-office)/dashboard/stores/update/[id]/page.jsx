import React from 'react';
import { getData } from '@/lib/getData';
import StoreForm from '@/components/backoffice/Forms/NewStoreForm';
import FormHeader from '@/components/backoffice/FormHeader';

export default async function UpdateStore({params:{id}}) {
  const store = await getData(`stores/${id}`)
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title,
    };
  });
 
  return (
    <div>
      <FormHeader title="New Store"/>
      <StoreForm updateData={store} categories={categories} />
    </div>
  );
}
