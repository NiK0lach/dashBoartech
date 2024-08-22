import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';


export default async function products() {
  const session = await getServerSession(authOptions);
  if(!session){
   return null
  }
  const role = session?.user?.role;
  const allProducts = await getData('products');
  const id = session?.user?.id;
  const supplierProduct = allProducts.filter((product) => product.userId === id);
  console.log(id);
  return (
    <div>
      <PageHeader
       heading="Products"
       href="/dashboard/products/new"
       linkTitle="Add Products"
      />
      
     <div className="py-8">
     {
       role === "ADMIN" ? (
       <DataTable data={allProducts} columns={columns} />
      ):(
      <DataTable data={supplierProduct} columns={columns} />
    )}
     </div>
    </div>
  );
}


