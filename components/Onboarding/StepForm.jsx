'use client';
import React from 'react';
import BasicInformationForm from './StepForms/BasicInformationForm';
import SupplierDetailsForm from './StepForms/SupplierDetailsForm';
import AdditionalInformationForm from './StepForms/AdditionalInformationForm';
import SummaryForm from './StepForms/SummaryForm';
import { useSelector } from 'react-redux';





export default function StepForm({supplierId}) {
    const currentStep = useSelector((store) => store.onboarding.currentStep);
    function renderFormByStep(step){
        if(step===1){
            return <BasicInformationForm/>
        }else if(step===2){
            return <SupplierDetailsForm/>
        }else if(step===3){
            return <AdditionalInformationForm/>
        }else if(step===4){
            return <SummaryForm supplierId={supplierId}/>
        }
    }
  return (<div>{renderFormByStep(currentStep)}</div>);
}
