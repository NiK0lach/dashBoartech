'use client';
import React, { useState } from 'react';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import ArrayItemsInput from '@/components/FormInputs/FormInputs/ArrayItemsInput';
import NavButtons from '../NavButtons';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateOnboardingFormData } from '@/redux/slices/onboardingSlice';



    export default function SupplierDetailsForm() {
      const dispatch = useDispatch();
      const currentStep = useSelector((store)=>store.onboarding.currentStep);
      const existingFormData = useSelector((store)=> store.onboarding.onboardingFormData);
      const [experts,setExperts] =useState(["Mecanico","Electricista","Manejo BMS","Manejo Baterias lIthio"]);
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
          }
        });
        
        async function processData(data) {
          data.experts = experts;
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
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Supplier Details</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput 
          label="Tiempo Experincia"
          name="experiencia"
          type='number'
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Producto o Servicio"
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
    </div>
          <NavButtons/>
      </form> 
    </div>
  );
}
