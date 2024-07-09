import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewProduct() {
  //passing categories and suppliers
  const usersData = await getData("users");
  const supplierData = usersData.filter((user)=>user.role==='SUPPLIER');

  const categoriesData = await getData("categories");
  //const supplierData = await getData("suppliers");
 

  const categories = categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title,
    };
  });
  const suppliers = supplierData.map((supplier)=>{
    return{
      id:supplier.id,
      title:supplier.name,

    };
  });

  //console.log(categoriesData);
  //console.log(usersData);
  //console.log(categories);
  //console.log(suppliers);
  return (
    <NewProductForm categories={categories} suppliers={suppliers}/>
  )
}
