'use client';
import React, { useState } from 'react';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';


    export default function ShippingDetailsForm() {
      const dispatch = useDispatch();
      const currentStep = useSelector((store)=>store.checkout.currentStep);
      const existingFormData = useSelector((store)=> store.checkout.checkoutFormData);
      
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
        const initialShippinCost = existingFormData.shippingCost || "";

        const[shippingCost,setShippingCost] =  useState(initialShippinCost); 
        console.log(shippingCost);    

        async function processData(data) {
          data.shippingCost = shippingCost;
            console.log(data);
             //update thwe check oput data
             dispatch(updateCheckoutFormData(data));
             //update the current state
             dispatch(setCurrentStep(currentStep + 1));
        }

 
  return (
    <div>
       <form onSubmit={handleSubmit(processData)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Información de Envio</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput 
          label="Dirección"
          name="streetAddress"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Ciudad"
          name="city"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput 
          label="Pais"
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
          
    {/* radio BUtton*/}
              <div className='col-span-full'>
                  <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Costo de Envío ?</h3>
                  <ul class="grid w-full gap-6 md:grid-cols-2">
                      <li>
                          <input type="radio" id="ship-cheap" name="shippingCost" value="8" class="hidden peer"
                           required
                          onChange={(e)=> setShippingCost(e.target.value)} />
                          <label for="ship-cheap" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                              {/* Desing */}
                             
                            <div className="flex gap-2 items-center">
                              <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
                              <div className=''>
                                <p>UPS</p>
                                <p>Delivery Cost: $35</p>
                              </div>
                            </div>
                            <Circle className='w-8 h-8 ms-3 flex-shrink-0'/>
                          </label>
                      </li>
                      <li>
                          <input type="radio" id="ship-expensive" name="shippingCost" value="20" class="hidden peer"onChange={(e)=> setShippingCost(e.target.value)}  />
                          <label for="ship-expensive" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="flex gap-2 items-center">
                              <Truck className='w-8 h-8 ms-3 flex-shrink-0'/>
                              <div className=''>
                                <p>UPS</p>
                                <p>Delivery Cost: $20</p>
                              </div>
                            </div>
                            <Circle className='w-8 h-8 ms-3 flex-shrink-0'/>
                          </label>
                      </li>
                  </ul>
              </div> 



          </div>
          <NavButtons/>
      </form> 
    </div>
  );
}
