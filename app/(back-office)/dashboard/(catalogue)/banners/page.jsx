
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import { Download, Search, Trash2 } from 'lucide-react';


import React from 'react';

export default function page() {
  return (
    <div>
      {/* Hearder */}
      <PageHeader
       heading="Banner"
       href="/dashboard/banners/new"
       linkTitle="Add Banner"
       />
      {/* Image- description, url */}
      
     <TableActions/>
     
     <div className="py-8">
     <h2>Table</h2>
     </div>
    </div>
  )
}


