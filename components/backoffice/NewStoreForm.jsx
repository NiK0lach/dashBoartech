'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import TexAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import SelectInput from '@/components/FormInputs/FormInputs/SelectInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { redirect, useRouter } from 'next/navigation';


export default function NewStoreForm({categories}) {
 const [imageUrl,setImageUrl]=useState("");
 const [loading,setLoading] =useState(false);
 const {
    register,
    reset,
    watch,
    handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        isActive:true,
    },
  });
  const isActive = watch("isActive");
  console.log(isActive);

  const router = useRouter();
  function redirect(){
    router.push('/dashboard/stores');
  }

  async function onSubmit(data){
    
   const slug=generateSlug(data.storeTitle);
   data.slug=slug;
   data.imageUrl=imageUrl;
   console.log(data);
   makePostRequest(setLoading, "api/stores", data, "Stores", reset, redirect)
   setImageUrl("");
          
  
    }   
  return (
   <div>
      <FormHeader title="New Store"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Store Title"
          name="storeTitle"
          register={register}
          errors={errors}
          className='w-full'
          />
          <SelectInput
           label="Selecciona Categorias"
           name="categoryIds"
           register={register}
           errors={errors}
           options={categories}
           multiple={true}
           className='w-full'
          />
           <TextInput 
          label="Store Phone Number"
          name="storePhone"
          register={register}
          errors={errors}
          className='w-full'
          type='tel'
          />
          <TextInput 
          label="Store Email"
          name="storeEmail"
          register={register}
          errors={errors}
          className='w-full'
          type='email'
          />
          <TextInput 
          label="Store Adress"
          name="storeAdress"
          register={register}
          errors={errors}
          className='w-full'
          />
         <TextInput 
          label="Contact Person"
          name="contactName"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="contact Phone Number"
          name="contactPhone"
          register={register}
          errors={errors}
          className='w-full'
          type='tel'
          />
          <TexAreaInput 
          label="Contact Payment Terms"
          name="terms"
          register={register}
          errors={errors}
          />
            <TexAreaInput 
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
          />
          <TextInput 
          label="Store WebSite"
          name="link"
          type="url"
          register={register}
          errors={errors}
          isRequired={false}
          />
          <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='storesLogoUploader'
          label="Store Logo"
          />
          {/* Toggle component */}
          <ToggleInput
            label="Publica Store"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Store" loadingButtonTitle="Creating Store please wait..." />
      </form> 
    
    </div>
    
  )
}


