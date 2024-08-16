'use client';
import React from 'react';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
import { useSession } from 'next-auth/react';


    export default function PersonalDetailsForm() {
        const {data:session,status}=useSession();
        const userId=session?.user?.id;
        const currentStep = useSelector((store) => store.checkout.currentStep);
        const existingFormData = useSelector((store) => store.checkout.checkoutFormData);
        
        const {
            register,
            reset,
            watch,
            handleSubmit,
            formState:{ errors },
        } = useForm({
            defaultValues:{
                ...existingFormData,
            },
        });

        const dispatch =useDispatch();
        async function processData(data) {
            data.userId=userId;
            //update thwe check oput data
            dispatch(updateCheckoutFormData(data));
            //update the current state
            dispatch(setCurrentStep(currentStep + 1));
           // console.log(data);
        }

 
  return (
    <div>
       <form onSubmit={handleSubmit(processData)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Información Personal</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Nombres"
          name="firstName"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Apellidos"
          name="lastName"
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
          label="Telefono"
          name="phone"
          type='tel'
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
