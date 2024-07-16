'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TexAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import SelectInput from '@/components/FormInputs/FormInputs/SelectInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import ArrayItemsInput from '@/components/FormInputs/FormInputs/ArrayItemsInput';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { redirect, useRouter } from 'next/navigation';
import { generateUserCode } from '@/lib/generateUserCode';

export default function NewProductForm({categories,suppliers,updateData={}}) {
  console.log(updateData);
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  
  const [imageUrl,setImageUrl]=useState(initialImageUrl);
  const [tags, setTags]=useState(initialTags);
  const [loading,setLoading] =useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        isActive:false,
        isWholesale:false,
        ...updateData,
    },
  });
  const isActive = watch("isActive");
  const isWholesale=watch("isWholesale")
  const router = useRouter();
  function redirect(){
    router.push('/dashboard/products');
  }
   

  async function onSubmit(data){
      const slug=generateSlug(data.title);
      const productCode=generateUserCode('ELG',data.title)
          data.slug=slug;
          data.imageUrl=imageUrl;
          data.tags=tags;
          data.qty=1;
          data.productCode=productCode;
          console.log(data);
     
      if(id) {
        data.id = id;
        makePutRequest(setLoading,`api/products/${id}`,data,"Product",redirect);
        //console.log("update Request", data);
    } else {
        makePostRequest(setLoading, "api/products", data, "Product", reset, redirect);
        setImageUrl("");
        setTags([]);
    }

  }   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
       <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput 
          label="Product title"
          name="title"
          register={register}
          errors={errors}
         />
          <TextInput 
          label="Product SKU "
          name="sku"
          register={register}
          errors={errors}
          className='w-full'
          />
        <TextInput 
          label="Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className='w-full'
         />
         <SelectInput 
           label="Select Category"
           name="categoryId"
           register={register}
           errors={errors}
           multiple={false}
           className='w-full'
           options=""
         />
          <SelectInput 
           label="Select Marca"
           name="supplierId"
           register={register}
           errors={errors}
           multiple={false}
           options=""
           className='w-full'
          />
          <TextInput 
          label="Product Price (before discount)"
          name="productPrice"
          register={register}
          errors={errors}
          className='w-full'
          type='number'
          />
          
           <TextInput 
          label="Product Sale Price (Discounted) "
          name="salePrice"
          register={register}
          errors={errors}
          className='w-full'
          type='number'
          />
          <TextInput 
          label="Product Stock "
          name="productStock"
          register={register}
          errors={errors}
          className='w-full'
          type='number'
          />
          <ToggleInput
            label="Soporta Ventas grandes"
            name="isWholesale"
            trueTitle="No"
            falseTitle="Si"
            register={register}
          />
          {
            isWholesale&&(
              <>
            <TextInput 
              label="Precio Total"
              name="saleTotalPrice"
              register={register}
              errors={errors}
               className='w-full'
            />
            <TextInput 
              label="Precio por cantidad"
              name="wholsaQty"
              register={register}
              errors={errors}
              type='number'
              className='w-full'
            />
            </>
            )
           }
          <TexAreaInput 
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
           {/* TAGS */}
          <ArrayItemsInput 
            setItems={setTags} 
            items={tags} 
            itemTitle="Tag"/>
            <ImageInput 
            imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            endpoint='productImageUploader' 
            label="Product Image" 
            />
          <ToggleInput
            label="Publica Producto"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
           
        </div>
         

        <SubmitButton 
            isLoading={loading} 
            buttonTitle={id ? "Update Producto" : "Create a new Producto"} 
            loadingButtonTitle={`${id ? "Updating" : "Creating" } 
                Producto please wait...`} 
            />
      </form> 
   
  );
}

