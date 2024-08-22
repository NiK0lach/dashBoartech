import React from 'react';
import FormHeader from '@/components/backoffice/FormHeader';
import NewSupplierForm from '@/components/backoffice/NewSupplierForm';


export default function UpdateSupplier({params:{id}}) {
  return (
    <div>
      
      <FormHeader title="New Supplier"/>
      <NewSupplierForm/>
    </div>
  );
}


