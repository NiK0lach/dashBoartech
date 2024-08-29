'use client';
import React from "react";

import StepForm from "@/components/Onboarding/StepForm";
import Steps from "@/components/Onboarding/steps";

export default function page({params:{id}}) {
  const steps = [
    {
      number:1,
      title:"Personal details",
    },
    {
      number:2,
      title:"Supplier Details",
    },
    {
      number:3,
      title:"Additional Information",
    },
    {
      number:4,
      title:"Summary",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-lime-300 dark:border-lime-700 p-6">
        {/*Steps*/}
        <Steps steps={steps}/>
         <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-700 dark:border-gray-700">
           {/*form*/}
           <StepForm supplierId={id}/>
         </div>
       </div>
    </div>
  );
}
