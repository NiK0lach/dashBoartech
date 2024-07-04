'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { redirect, useRouter } from 'next/navigation';

export default function New() {
  const [imageUrl,setImageUrl] =useState("");
  //const marcas =[];
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
    router.push('/dashboard/categories');
  }
   

  async function onSubmit(data){
      {/* 
      -id=>auto
      -title
      -slug=>auto
      -image
      -description
      */}
   //setLoading(true)
    const slug=generateSlug(data.title);
      data.slug=slug;
      data.imageUrl=imageUrl;
      console.log(data);
      makePostRequest(setLoading, "api/categories", data, "Category", reset, redirect);
      setImageUrl("");
  
    }   
  return (
   <div>
      <FormHeader title="New Category"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Category title"
          name="title"
          register={register}
          errors={errors}
          />
          
        <TextAreaInput 
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />

         <ImageInput 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          endpoint='categoryImageUploader' 
          label="Category Image" />

          {/* Toggle component */}
          <ToggleInput
            label="Publica Categoria"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />

          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Category" loadingButtonTitle="Creating Category please wait..." />
      </form> 
    
    </div>
    
  )
}


