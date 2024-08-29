'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import TextAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { setCurrentStep, updateOnboardingFormData } from '@/redux/slices/onboardingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateUserCode } from "@/lib/generateUserCode";

    export default function AdditionalInformationForm({supplierId}) {
      const [imageUrl,setImageUrl] =useState("");
      const currentStep = useSelector((store)=>store.onboarding.currentStep);
      const existingFormData = useSelector((store)=>store.onboarding.onboardingFormData);
      console.log(existingFormData);
      
      
      
        const {
            register,
            reset,
            watch,
            handleSubmit,
            formState:{ errors },
        } = useForm({
          defaultValues:{
            ...existingFormData
          },
        });
         
        const dispatch =useDispatch();
        async function processData(data) {
          const fullName = `${data.firstName} ${data.lastName}`;
          const supplierCode = generateUserCode("IRSN", fullName);
           data.supplierCode = supplierCode;
            data.profileImageUrl = imageUrl;
            console.log(data);
            //update thwe check oput data
            dispatch(updateOnboardingFormData(data));
            //update the current state
            dispatch(setCurrentStep(currentStep + 1));
        }

 
  return (
    <div>
       <form onSubmit={handleSubmit(processData)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Additional Information</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          
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
          
          
          />
          <TextAreaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
          />
         </div>
          <NavButtons/>
      </form> 
    </div>
  );
}
