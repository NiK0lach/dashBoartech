
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import { Download, Search, Trash2 } from 'lucide-react';


import React from 'react';

export default function Store() {
  return (
    <div>
      {/* Hearder */}
      <PageHeader
       heading="Store"
       href="/dashboard/stores/new"
       linkTitle="Add Store"
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


