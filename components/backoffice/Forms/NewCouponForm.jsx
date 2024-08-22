'use client';
import React, { useState } from 'react';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useForm } from 'react-hook-form';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { generateisoFormattedDate } from '@/lib/generateisoFormattedDate';
import { generateCouponCode } from '@/lib/generateCouponCode';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal';
import { useSession } from 'next-auth/react';


export default function CouponForm({ updateData = {} }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  // if(status==="loading"){
  //   return <p>loading...</p>
  // }
  const vendorId = session?.user?.id;

  const expiryDateNormal = convertIsoDateToNormal(updateData.expiryDate);  
  const id = updateData?.id ?? "";
  updateData.expiryDate=expiryDateNormal;

  const [couponCode,setCouponCode]=useState();
  const [loading,setLoading] =useState(false);
  

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState:{ errors },
  } = useForm({
      defaultValues: {
        isActive: true,
        ...updateData,
    },
  });
  const isActive = watch("isActive");
  
  function redirect(){
    router.push('/dashboard/coupons');
  }
   
  

  async function onSubmit(data){
   data.vendorId=vendorId;  
   const couponCode = generateCouponCode(data.title, data.expiryDate);
   const isoFormattedDate = generateisoFormattedDate(data.expiryDate);
   data.expiryDate= isoFormattedDate;
   data.couponCode = couponCode;
   console.log(data);
   if (id) {
    //data.id = id;
    //make post ruquest update
    makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon", redirect);
    //console.log("update Request", data);
} else {
    //make post request Create
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect);
    //expiryDate("");
    
}
  }   
  return (
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
          <SubmitButton 
            isLoading={loading} 
            buttonTitle={id ? "Update Coupon" : "Create a new Coupon"} 
            loadingButtonTitle={`${id ? "Updating" : "Creating" } Coupon please wait...`} 
            />
      </form> 
  
  );
}


