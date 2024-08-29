"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CircleUser, Cpu, HandshakeIcon, MapPin, MapPinIcon, NotebookPen, NotebookTabs, Phone, Shield, ShieldCheckIcon, Store, User } from "lucide-react";

import { redirect} from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { setCurrentStep } from "@/redux/slices/onboardingSlice";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { makePostRequest} from "@/lib/apiRequest";

export default function SummaryForm({ supplierId }) {
  const [loading, setLoading] = useState(false);
  //const router = useRouter();
  const onboardingFormData = useSelector(
    (store) => store.onboarding.onboardingFormData
  );
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch = useDispatch();

  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1));
  }
 




  async function submitData() {
    const data = {
      isActive:true,
      ...onboardingFormData,
    };
    data.userId = supplierId;
    console.log(data);
    makePostRequest(setLoading, "api/suppliers/", data, "Suppliers Profile");
    
 }

  return (
    <div className="my-6">
    
      <h2 className="text-xl font-bold mb-4 dark:text-lime-400 text-lime-800"> Supplier Summary Details</h2>
      <div className="lg:grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-8 py-8 bg-slate-900 rounded-lg outline outline-lime-300/[.35] -outline-offset-8 gap-4">
      
          <div className="col-span-1   text-slate-600 dark:text-slate-200 pb-3 font-semibold text-sm border border-b px-8 py-6">
            <div className="items-center">
                  <Image className="rounded-xl w-14 h-14" src={onboardingFormData.profileImageUrl} alt={onboardingFormData.onboardingFormData}  width={249} height={249} />
                </div>
              <div className="items-center py-3 space-y-3">
                 <span className="flex items-center gap-3"><User className="w-5 h-5"/>
                    <h5 class=" text-xl font-medium text-gray-900 dark:text-white">{onboardingFormData.firstName} {onboardingFormData.lastName}</h5>
                    </span>
                    <span className="flex items-center gap-3"><Phone className="w-5 h-5 text-slate-800 dark:text-slate-200"/>
                    <p class="text-sm text-slate-800 dark:text-slate-200">{onboardingFormData.phone}</p>
                    </span>
              </div>
              <div className="items-center justify-end mt-4 py-3 border-t-2">
              
              {
                onboardingFormData.experts.map((item,i)=>{
                  return(
                    <div key={i} className="flex text-xs font-light gap-2 items-center text-gray-900 dark:text-slate-300 space-y-1" >
                      <ShieldCheckIcon className="w-4 h-4"/><span>{item}</span></div>
                  );
                })
              }
              <p class="font-light text-sm text-gray-900 dark:text-slate-400"></p>
            </div>
          </div>
           <div className="col-span-1  pb-3 font-semibold text-sm border border-b px-6 py-6">
           <div className="flex items-center justify-end gap-2 mb-6 mt-14">
              <Cpu className="w-4 h-4 text-gray-900 dark:text-slate-400"/>
              <h5 class="font-light text-sm text-gray-900 dark:text-slate-400">{onboardingFormData.campoexpert}</h5>
            </div>
           <div className="items-center space-y-3">
              <div className="flex items-center gap-3">
                <Store className="w-4 h-4 text-slate-800 dark:text-slate-200"/>
                <div class="text-sm text-slate-800 dark:text-slate-200">{onboardingFormData.contact}</div>
              </div> 
              <div className="flex items-center gap-3">
                  <NotebookTabs className="w-4 h-4 text-slate-800 dark:text-slate-200"/>      
                    <p className=""> {onboardingFormData.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                    <MapPinIcon className="w-4 h-4 text-slate-800 dark:text-slate-200"/>
                    <p className="text-sm">{onboardingFormData.physicalAdress}</p>
              </div>
              </div>
           </div>
           <div className="col-span-1 w-full font-ligth text-sm border border-b px-8 py-6">
                 <div className="flex items-center gap-3">
                  <NotebookPen className="w-4 h-4 text-slate-800 dark:text-slate-400"/> 
                  <p className="text-slate-800 dark:text-slate-400"> {onboardingFormData.notes}</p>
                </div>
          </div>
          <div className="col-span-1 w-full font-semibold text-sm border border-b px-8 py-6">
                 <div className="flex items-center gap-3">
                  <HandshakeIcon className="w-4 h-4 text-slate-800 dark:text-slate-400"/>
                  <p className="text-slate-800 dark:text-slate-400"> {onboardingFormData.paymenterms}</p>
                </div>
          </div>
        
      </div>
      

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          type="button"
          className="inline-flex items-center px-6 py-3 mt-4
          sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
          focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
        {loading ? (
          <button
            disabled
            className="inline-flex items-center px-6 py-3 mt-4
                sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
                focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
          >
            Processing please wait...
          </button>
        ) : (
          <button
            onClick={submitData}
            className="inline-flex items-center px-6 py-3 mt-4
                sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
                focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
          >
            <span>Submit Data</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    
    </div>
  );
}
