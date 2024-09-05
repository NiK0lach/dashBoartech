'use client';
import React, { useState }  from 'react';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '@/redux/slices/onboardingSlice';
import { updateOnboardingFormData } from '@/redux/slices/onboardingSlice';
import { getData } from '@/lib/getData';
import { usePathname} from 'next/navigation';



export default function BasicInformationForm() {
  const [name, setName] = useState(""); // State to store the fetched name
 // const [firstName, setFirstName] = useState("");
 // const [lastName, setLastName] = useState("");
 const pathname = usePathname();
  //console.log("Current Pathname:", pathname);
  // Extract the ID from the pathname
  const startIndex = pathname.indexOf("onboarding/") + "onboarding/".length;
  const id = pathname.substring(startIndex);
  //console.log("Extracted ID:", id);
  async function fetchUser(){
    const userResponse = await getData("users");
    const user = userResponse.find(user => user.id === id);
    //const name = user.name;
    //console.log(name);
    if (user) {
      setName(user.name); // Set the fetched name to state
    }
  } 
 fetchUser(); 
        const {userName} = name;
        function splitFullName(name) {
          const nameParts = name.trim().split(' ');
      
          let firstName = "";
          let lastName = "";
      
          if (nameParts.length === 1) {
              // Only one word, treat it as the first name
              firstName = nameParts[0];
          } else if (nameParts.length === 2) {
              // Two words, treat the first as first name and the second as last name
              firstName = nameParts[0];
              lastName = nameParts[1];
          } else if (nameParts.length > 2) {
              // More than two words, concatenate all except the last one for the first name
              firstName = nameParts.slice(0, -1).join(' ');
              lastName = nameParts[nameParts.length - 1];
          }
      
          return { firstName, lastName };
      }
        const fullName = name;
        const { firstName, lastName } = splitFullName(fullName);
        console.log("First Name:", firstName); 
        console.log("Last Name:", lastName);    


        const currentStep = useSelector((store) => store.onboarding.currentStep);
        //console.log(currentStep);
        //const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);
        //console.log("existingFormData",existingFormData);
        const existingFormData = {
          name:'monda',
          firstName,
          lastName,
      };

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
          
            //update thwe check oput data
            dispatch(updateOnboardingFormData(data));
            //update the current state
            dispatch(setCurrentStep(currentStep + 1));
           //console.log(data);
        }

 
  return (
    <div>
       <form onSubmit={handleSubmit(processData)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
           shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
             <h2 className='text-xl font-bold mb-4 dark:text-lime-400 text-lime-800'>Personal Details</h2>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput 
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          className='w-full '
          />
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
