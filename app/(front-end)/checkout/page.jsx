'use client';
import React from "react";
import CartBanner from "@/components/Checkout/CartBanner";
import StepForm from "@/components/Checkout/StepForm";
import Steps from "@/components/Checkout/steps";

export default function page() {
  const steps = [
    {
      number:1,
      title:"Personal details",
    },
    {
      number:2,
      title:"Shiping Details",
    },
    {
      number:3,
      title:"Payment Method",
    },
    {
      number:4,
      title:"Order Summary",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-lime-300 dark:border-lime-700 p-6">
        {/*Steps*/}
        <Steps steps={steps}/>
         <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700">
           <CartBanner/>
           {/*form*/}
           <StepForm/>

         </div>
       </div>
    </div>
  );
}
