'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import TextAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { makePostRequest } from '@/lib/apiRequest';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { generateUserCode } from '@/lib/generateUserCode';
import { redirect, useRouter } from 'next/navigation';
import ArrayItemsInput from '../FormInputs/FormInputs/ArrayItemsInput';

export default function NewSupplierForm( { user } ) {
   const [loading,setLoading] =useState(false);
   const [imageUrl,setImageUrl] =useState("");
   const [experts,setExperts] =useState(["Mecanico","Electricista","Manejo BMS","Manejo Baterias lIthio"]);
   const {
      register,
      reset,
      watch,
      handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        isActive:true,
        ...user,
    },
  });

  const isActive = watch("isActive");
  console.log(isActive);
  const router = useRouter();
  function redirect(){
  router.push('/dashboard/suppliers');
  }
   
  async function onSubmit(data){
     const supplierCode = generateUserCode('IRSN', data.name);
     data.supplierCode = supplierCode;
     data.userId=user.id;
     data.experts = experts;
     data.profileImageUrl = imageUrl;
     console.log(data);
     makePostRequest(setLoading, "api/suppliers", data, "Suppliers Profile", reset, redirect);
      
 }
  return (
   <div>
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
          isRequired={false}
          />
          <TextInput 
          label="Contact Phone"
          name="contactphone"
          register={register}
          errors={errors}
          className='w-full'
          isRequired={false}
          />
          {/*nuevos iput para contratista */}
          <TextInput 
          label="Tiempo Experincia"
          name="experiencia"
          type='number'
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Producto Principal"
          name="campoexpert"
          type='text'
          register={register}
          errors={errors}
          className='w-full'
          />
          <ArrayItemsInput 
          setItems={setExperts} 
          items={experts}
          itemTitle="Extras"
          />

           <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='supplierLogoUploader'
          label="Supplier Logo"
          
          />
           
          <TextAreaInput
          label="Suppliers Payment Terms"
          name="paymenterms"
          register={register}
          errors={errors}
          isRequired={false}
          
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
