import React from 'react';
import ProductForm from '@/components/backoffice/Forms/NewProductForm';
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from '@/lib/getData';

  export default async function UpdateProduct({params:{id}}) {
    const product =await getData(`products/${id}`);
    const categoriesData = await getData("categories");
    const usersData = await getData("users");
    const supplierData = usersData.filter((user)=>user.role==='SUPPLIER');
    const suppliers = supplierData.map((supplier)=>{
      return{
        id:supplier.id,
        title:supplier.name,

      };
    });
    const categories = categoriesData.map((category)=>{
      return{
        id:category.id,
        title:category.title,
      };
    });
  
  return (
    <div>
        <FormHeader title="Update Product"/>
        <ProductForm  
          updateData={product}
          categories={categories}
          suppliers={suppliers} 
        />
    </div>
  );
}


