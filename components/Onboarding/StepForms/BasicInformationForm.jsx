'use client';
import React from 'react';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '@/redux/slices/onboardingSlice';


export default  function BasicInformationForm() {
      
        const currentStep = useSelector((store) => store.onboarding.currentStep);
        const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);
        console.log(existingFormData);
        
        const {
            register,
            reset,
            handleSubmit,
            formState:{ errors },
        } = useForm({
            defaultValues:{
                ...existingFormData,
            },
        });

        const dispatch =useDispatch();
        async function processData(data) {
          
            //update thwe check oput data
            dispatch(updateOnboardingFormData(data));
            //update the current state
            dispatch(setCurrentStep(currentStep + 1));
          // console.log(data);
        }

 
  return (
    <div>
       <form onSubmit={handleSubmit(processData)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Personal Details</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className='w-full'
          />
          
          <TextInput 
          label="Phone Number"
          name="phone"
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          />

         <TextInput 
          label="Supplier Adress"
          name="physicalAdress"
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
          register={register}
          errors={errors}
          className='w-full'
          
          />

          </div>
          <NavButtons/>
      </form> 
    </div>
  );
}
