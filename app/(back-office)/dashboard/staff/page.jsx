
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';



import React from 'react';

export default function page() {
  return (
    <div>
      {/* Hearder */}
      <PageHeader
       heading="Staff"
       href="/dashboard/staff/new"
       linkTitle="Add Staff"
       />
      {/* Table */}
      {/* Export // Search // Bulk Delete */}
      <TableActions/>
     
     <div className="py-8">
     <h2>Table</h2>
     </div>
    </div>
  )
}
