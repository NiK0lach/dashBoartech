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
        isActive:true,
    },
  });
  const isActive = watch("isActive");
  console.log(isActive);


  async function onSubmit(data){
     const supplierCode = generateUserCode('IRSN', data.name);
     data.supplierCode = supplierCode;
     makePostRequest(setLoading, "api/suppliers", data, "Suppliers", reset)
       console.log(data);
 }
  return (
   <div>
      <FormHeader title="New Supplier"/>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
       shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Supplier full Name"
          name="name"
          register={register}
          errors={errors}
          className='w-full'
          />
          
           <TextInput 
          label="Supplier Phone"
          name="phone"
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          />
           <TextInput 
          label="Supplier email"
          name="email"
          type='email'
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Supplier Adress"
          name="adress"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Supplier Contact Name"
          name="contact"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Contact Phone"
          name="contactphone"
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          />
           
          <TextAreaInput
          label="Suppliers Payment Terms"
          name="paymenterms"
          register={register}
          errors={errors}
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
            label="Publica Supplier"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
          
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Supplier" loadingButtonTitle="Creating Supplier please wait..." />
      </form> 
    
    </div>
    
  )
}
