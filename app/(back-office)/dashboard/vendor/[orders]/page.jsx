import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function vendorOrders() {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  const role = session?.user?.role;
  const sales = await getData('sales');
  const supplierSales = allSales.filter((sale)=>sale.vendorId===id);
  return (
    <div>
      {/* <PageHeader
       heading="Sales"
       href="/dashboard/coupons/new"
       linkTitle="Add Coupon"
       /> */}
      
     
     <div className="py-8">
     {
       role === "ADMIN"?(<DataTable data={allSales} columns={columns} />):(<DataTable data={supplierSales} columns={columns} />)
     }
     </div>
    </div>
  )
}


