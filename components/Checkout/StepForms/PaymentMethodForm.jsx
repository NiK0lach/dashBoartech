'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, CreditCardIcon, HandshakeIcon} from 'lucide-react';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
import { useDispatch, useSelector } from 'react-redux';


    export default function PaymentMethodForm() {
      const dispatch =useDispatch();
      const currentStep = useSelector((store)=>store.checkout.currentStep);
      const existingFormData = useSelector((store)=>store.checkout.checkoutFormData);
      
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
        const initialpaymentMethod = existingFormData.paymentMethod || "";

        const[paymentMethod,setPaymentMethod] =  useState(initialpaymentMethod); 
        console.log(paymentMethod);    

        async function processData(data) {
          data.paymentMethod = paymentMethod;
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
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Tipo de Pago</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          
          
    {/* radio BUtton*/}
              <div className='col-span-full'>
                  <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Como tipo de metodo vas a usar ?</h3>
                  <ul class="grid w-full gap-6 md:grid-cols-2">
                      <li>
                          <input type="radio" id="ship-cheap" name="shippingCost" value="Cash" class="hidden peer"
                           required
                          onChange={(e)=> setPaymentMethod(e.target.value)} />
                          <label for="ship-cheap" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                              {/* Desing */}
                             
                            <div className="flex gap-2 items-center">
                              <HandshakeIcon className='w-8 h-8 ms-3 flex-shrink-0'/>
                              <div className=''>
                                <p>Pago contra Entrega</p>
                              </div>
                            </div>
                            <Circle className='w-8 h-8 ms-3 flex-shrink-0'/>
                          </label>
                      </li>
                      <li>
                          <input type="radio" id="ship-expensive" name="shippingCost" value="Credito" class="hidden peer"onChange={(e)=> setPaymentMethod(e.target.value)}  />
                          <label for="ship-expensive" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="flex gap-2 items-center">
                              <CreditCardIcon className='w-8 h-8 ms-3 flex-shrink-0'/>
                              <div className=''>
                                <p>Pago con Tarjeta de Credito</p>
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
