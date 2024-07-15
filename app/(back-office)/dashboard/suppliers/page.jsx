import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';

export default async function page() {
  const suppliers = await getData('suppliers');
  return (
    <div>
     
      <PageHeader
       heading="Suppliers"
       href="/dashboard/suppliers/new"
       linkTitle="Add Suppliers"
       />
      
      <div className="py-8">
      <DataTable data={suppliers} columns={columns} filterKeys={["name"]}/>
      </div>
    </div>
  )
}
