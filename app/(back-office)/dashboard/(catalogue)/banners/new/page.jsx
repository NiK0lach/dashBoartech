'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { makePostRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';

export default function NewBanner() {
  const [imageUrl,setImageUrl] =useState("");
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

  async function onSubmit(data){
      {/* 
      -id=>auto
      -title
      -link
      -image
       */}
   //setLoading(true)
    const slug=generateSlug(data.title);
      data.slug=slug
      data.imageUrl=imageUrl;
      console.log(data);
      makePostRequest(setLoading, "api/banners", data, "Banner", reset);
      setImageUrl("");
  
    }   
  return (
   <div>
      <FormHeader title="New Banner"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Banner title"
          name="title"
          register={register}
         
          errors={errors}
          />
           <TextInput 
          label="Banner Link"
          name="link"
          register={register}
          type='url'
          errors={errors}
          />
       {/* COnfigure thi endpoint in the core s. */}
         <ImageInput 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          endpoint='bannerImageUploader' 
          label="Banner Image" />
          
           {/* Toggle component */}
          <ToggleInput
            label="Publica Banner"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Banner" loadingButtonTitle="Creating Banner please wait..." />
      </form> 
    
    </div>
    
  )
}


