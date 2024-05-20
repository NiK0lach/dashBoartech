
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import { Download, Search, Trash2 } from 'lucide-react';


import React from 'react';

export default function coupons() {
  return (
    <div>
      {/* Hearder */}
      <PageHeader
       heading="Coupons"
       href="/dashboard/coupons/new"
       linkTitle="Add Coupon"
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


