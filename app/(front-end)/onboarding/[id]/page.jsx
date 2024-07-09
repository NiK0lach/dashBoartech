import NewSupplierForm from '@/components/backoffice/NewSupplierForm';
import { getData } from '@/lib/getData';
import React from 'react'

export default async function NewProduct({ params: {id} }) {
    const user = await getData(`users/${id}`);
    console.log(user);
  return (
    <div className='flex flex-col gap-6 p-16'>
        <div className='max-w-4xl p-4 mx-auto'>
        <h2>Hola {user?.name}, Cuentanos mas de ti?</h2>
        </div>
        <NewSupplierForm user={user}/>   
    </div>
  );
}
