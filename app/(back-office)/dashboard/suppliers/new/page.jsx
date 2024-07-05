'use client';
import FormHeader from '@/components/backoffice/FormHeader';
import React, { useState } from 'react';
import NewSupplierForm from '@/components/backoffice/NewSupplierForm';

export default function NewSupplier() {
  return (
   <div>
      <FormHeader title="New Supplier"/>
      <NewSupplierForm/>
   </div>
    
  );
}
