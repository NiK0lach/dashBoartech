'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import TexAreaInput from '@/components/FormInputs/FormInputs/TexAreaInput';
import FormHeader from '@/components/backoffice/FormHeader';
import { makePostRequest } from '@/lib/apiRequest';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateUserCode } from '@/lib/generateUserCode';



export default function NewStore() {

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
      -code=>auto
      -expiry date
      */}
   //Suppliers name
   const code = generateUserCode("IRSN", data.name);
   data.code = code;
   console.log(data);
  makePostRequest(setLoading, "api/stores", data, "Stores", reset)
   //console.log(data);
          
  
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
           <TextInput 
          label="Store Phone Number"
          name="contactPhone"
          register={register}
          errors={errors}
          className='w-full'
          type='tel'
          />
          <TextInput 
          label="Store Email"
          name="contactEmail"
          register={register}
          errors={errors}
          className='w-full'
          type='email'
          />
          <TextInput 
          label="Store Adress"
          name="contactAdress"
          register={register}
          errors={errors}
          className='w-full'
          />
         <TextInput 
          label="Contact Person"
          name="contact"
          register={register}
          errors={errors}
          className='w-full'
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
        
        
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Store" loadingButtonTitle="Creating Store please wait..." />
      </form> 
    
    </div>
    
  )
}


