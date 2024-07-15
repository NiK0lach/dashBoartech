import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';


export default async function page() {
  const training = await getData('training');
  return (
    <div>
    
      <PageHeader
       heading="Electric Community"
       href="/dashboard/community/new"
       linkTitle="New Community"
       />
     
     
      <div className="py-8">
      <DataTable data={training} columns={columns} filterKeys={["title"]} />
      </div>
    </div>
  )
}


