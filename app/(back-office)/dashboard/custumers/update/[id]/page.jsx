import React from 'react';
import FormHeader from '@/components/backoffice/FormHeader';
import CustumerForm from '@/components/backoffice/CustumerForm';
import { getData } from '@/lib/getData';

export default async function UpdateCustumer({ params: { id } }) {
  const user = await  getData(`users/${id}`);
  return (
    <div>
      <FormHeader title="Update Custumer"/>
      <CustumerForm user={user}/>
      
    </div>
  );
}


