'use client';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import FormHeader from '@/components/backoffice/FormHeader';
import { makePostRequest } from '@/lib/apiRequest';
import { generateCouponCode } from '@/lib/generateCouponCode';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { generateisoFormattedDate } from '@/lib/generateisoFormattedDate';
import { redirect, useRouter } from 'next/navigation';





export default function NewCoupon() {

  const [loading,setLoading] =useState(false);
  const [couponCode,setCouponCode]=useState();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        isActive: true,
    },
  });
  const isActive = watch("isActive");
  //console.log(isActive);
  const router = useRouter();
  function redirect(){
    router.push('/dashboard/coupons');
  }
   
  

  async function onSubmit(data){
      {/* 
      -id=>auto
      -title
      -code=>auto
      -expiry date
      */}
   //setLoading(true)
   const couponCode = generateCouponCode(data.title, data.expiryDate);
   const isoFormattedDate = generateisoFormattedDate(data.expiryDate);
   data.expiryDate= isoFormattedDate;
   data.couponCode = couponCode;
   console.log(data);
   makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
  }   
  return (
   <div>
      <FormHeader title="New Coupon"/>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Coupon Title"
          name="title"
          register={register}
          errors={errors}
          className='w-full'
          />
          
          <TextInput 
          label="Coupon Expiry Date"
          type='date'
          name="expiryDate"
          register={register}
          errors={errors}
          className='w-full'
          />
           {/* Toggle component */}
           <ToggleInput
            label="Publica Coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            />
        
        
          </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Coupon" loadingButtonTitle="Creating Coupon please wait..." />
      </form> 
    
    </div>
    
  )
}


