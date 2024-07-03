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
import SelectInput from '@/components/FormInputs/FormInputs/SelectInput';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import QuillEditor from '@/components/FormInputs/FormInputs/QuillEditor';



export default function New() {
  const [imageUrl,setImageUrl] =useState("");
  const categories =[
    {
      id:1,
      title:"Categories #1"
    },
    {
      id:2,
      title:"Categories #2"
    },
    {
      id:3,
      title:"Categories #3"
    },
    {
      id:4,
      title:"Categories #4"
    },
  ]
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
    },
  });

 //Quill editor setUp
  const [content, setContent] = useState("");
  const isActive = watch("isActive");
  console.log(isActive);

  async function onSubmit(data){
      {/* 
      -id=>auto()
      -title
      -expertId
      -categoryId
      -slug=>auto()
      -description
      -content=>rich text
      -image
      */}
   //setLoading(true)
    const slug=generateSlug(data.title);
      data.slug=slug;
      data.imageUrl=imageUrl;
      data.content=content;
      console.log(data);
      makePostRequest(setLoading, "api/training", data, "Training", reset);
      setImageUrl("");
  
    }   
  return (
   <div>
      <FormHeader title="New Training"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Training title"
          name="title"
          register={register}
          errors={errors}
          className='w-full'
          />
          <SelectInput 
           label="Select Category"
           name="categoryId"
           register={register}
           errors={errors}
           options={categories}
           className='w-full'
           multiple={false}
          />
        <TextAreaInput 
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
           />
             {/* QuillEditor component */}
           <QuillEditor 
           label="Training Content"
           value={content}
           onChange={setContent}
          />
         
          <ImageInput 
          imageUrl={imageUrl} 
          setImageUrl={setImageUrl} 
          endpoint='trainingImageUploader' 
          label="Training Thumbnail"
          
          />
         {/* Toggle component */}
          <ToggleInput
            label="Publica Training"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />

          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Training" loadingButtonTitle="Creating Training please wait..." />
      </form> 
    
    </div>
    
  )
}


