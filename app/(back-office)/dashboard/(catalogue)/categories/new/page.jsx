'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextareaInput from '@/components/FormInputs/FormInputs/TexAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import SelectInput from '@/components/FormInputs/FormInputs/SelectInput';

export default function New() {
  const [imageUrl,setImageUrl] =useState("");
  const marcas =[
    {
      id:1,
      title:"Patinetas Electricas marca #1"
    },
    {
      id:2,
      title:"Scooters Electricas marca #1"
    },
    {
      id:3,
      title:"Biciletas Electricas marca #1"
    },
    {
      id:4,
      title:"Motos Electricas marca #1"
    },
  ]
  const [loading,setLoading] =useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState:{ errors },
  } = useForm();

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
      data.slug=slug
      data.imageUrl=imageUrl;
      console.log(data);
      makePostRequest(setLoading, "api/categories", data, "Category", reset);
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
          <SelectInput 
           label="Select Marca"
           name="marcaIds"
           register={register}
           errors={errors}
           className='w-full'
           options={marcas}
           hasMultipleSelect={false}
          />
        <TextareaInput 
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
            className='w-full'
          />


          <ImageInput 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          endpoint='categoryImageUploader' 
          label="Category Image" />
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Category" loadingButtonTitle="Creating Category please wait..." />
      </form> 
    
    </div>
    
  )
}


