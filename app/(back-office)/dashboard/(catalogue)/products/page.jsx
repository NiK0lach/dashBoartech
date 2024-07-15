import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';


export default async function products() {
  const products = await getData('products');
  return (
    <div>
      
      <PageHeader
       heading="Products"
       href="/dashboard/products/new"
       linkTitle="Add Products"
       />
      
     <div className="py-8">
     <DataTable data={products} columns={columns} />
     </div>
    </div>
  );
}


