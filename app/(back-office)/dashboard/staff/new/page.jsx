'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import TextAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import SelectInput from '@/components/FormInputs/FormInputs/SelectInput';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateUserCode } from '@/lib/generateUserCode';

export default function New() {
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
  const isActive = watch("isActive");
  console.log(isActive);


  async function onSubmit(data){
     const code = generateUserCode('IRM', data.name);
     data.code = code;
     makePostRequest(setLoading, "api/staffs", data, "Staff", reset)
       console.log(data);
 }
  return (
   <div>
      <FormHeader title="New Staff"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
         />
         <TextInput 
          label="NIN (ID number)"
          name="nin"
          register={register}
          errors={errors}
          className='w-full'
          />

         <TextInput 
          label="Date of birth"
          name="dob"
          type='date'
          register={register}
          errors={errors}
          className='w-full'
          />

          <TextInput 
          label="Password"
          name="password"
          type='password'
          register={register}
          errors={errors}
          className='w-full'
          />

          <TextInput 
          label="Adress"
          name="adress"
          register={register}
          errors={errors}
          className='w-full'
          />
          
           <TextInput 
          label="Phone"
          name="phone"
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          />
           <TextInput 
          label="email"
          name="email"
          type='email'
          register={register}
          errors={errors}
          className='w-full'
          />
        
          
          <TextAreaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
          />
          {/* Toggle component */}
          <ToggleInput
            label="Publica Staff"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
          
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Staff" loadingButtonTitle="Creating Staff please wait..." />
      </form> 
    
    </div>
    
  )
}
