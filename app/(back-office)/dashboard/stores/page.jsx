import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';

export default async function Stores() {
  const stores = await getData('stores');
  return (
    <div>
      
      <PageHeader
       heading="Store"
       href="/dashboard/stores/new"
       linkTitle="Add Store"
       />
      
     
      <div className="py-8">
      <DataTable data={stores} columns={columns} filterKeys={["storeTitle"]} />
      </div>
    </div>
  )
}


