import React from 'react';
import BannerForm from '@/components/backoffice/Forms/NewBannerForm';
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewBanner() {
  return (
    <div>
         <FormHeader title="New Banner"/>
         <BannerForm/>
    </div>
  );
}


