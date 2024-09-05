'use client';
import React, { useState } from 'react';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { generateisoFormattedDate } from '@/lib/generateisoFormattedDate';
import { redirect, useRouter } from 'next/navigation';
import {  makePostRequest, makePutRequest } from '@/lib/apiRequest';


export default  function CustumerForm( { user } ) {
function getProfileDta(){

}
  //console.log("customerfORM usER LANDED",user);
   const [loading,setLoading] =useState(false);
   const [imageUrl,setImageUrl] =useState("");
   const {
      register,
      reset,
      handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        ...user,
    },
  });

 
  const router = useRouter();
  function redirect(){
  router.push('/dashboard/custumers');
  }
   
  async function onSubmit(data) {
     data.userId=user.id;
     data.firstName=user.name;
     data.lastName=user.name;
 
     data.profileImage = imageUrl;
     const isoFormattedDate = generateisoFormattedDate(data.dateOfBirth);
     data.dateOfBirth= isoFormattedDate;
    
     console.log("to send Data on profile", data);
    
     makePutRequest(setLoading,`api/custumers/${user.id}`, data,"Custumer Profile",redirect,reset);
    
    /*  if(data.userId=user.id) {
      
      makePostRequest(setLoading, `api/custumers/${user.id}`, data, "Custumer Profile", reset, redirect);
    
      //make post ruquest update
    
      //console.log("update Request", data);
  } else {
      //make post request Create
      makePutRequest(setLoading,`api/custumers/${user.id}`,data,"Custumer Profile",redirect);
    
  } */
  
 }


  return (
   <form 
     onSubmit={handleSubmit(onSubmit)}
     className='w-full max-w-3xl p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700'>
        <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800 pb-5'>Personal Details</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 border-b border-gray-600 pb-10'>
           <TextInput 
            label="Full Name"
            name="name"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput 
            label="UserName"
            name="username"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput 
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput 
            label="Email"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className='w-full'
            />
            <TextInput 
            label="Phone Number"
            name="phone"
            register={register}
            errors={errors}
            className='w-full'
            />
            <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='custumerProfileUploader'
            label="Custumer Profile Image "
            />
          </div>
          <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800 pt-10'>Shipping Adress</h2>
         <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput 
              label="Adress"
              name="streetAddress"
              register={register}
              errors={errors}
              className='w-full'
              />
              <TextInput 
              label="City"
              name="city"
              register={register}
              errors={errors}
              className='w-full'
              />
              <TextInput 
              label="Country"
              name="country"
              register={register}
              errors={errors}
              className='w-full'
              />
              <TextInput 
              label="Zip Code"
              name="zipCode"
              register={register}
              errors={errors}
              className='w-full'
              />  
         </div>
        <SubmitButton isLoading={loading} buttonTitle="Update Custumer" loadingButtonTitle="Updating Custumer please wait..." />
    </form> 
  );
}
