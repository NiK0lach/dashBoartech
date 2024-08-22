import React from 'react';
import PageHeader from '@/components/backoffice/PageHeader';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';


export default async function custumers() {
 const custumers = await getData("custumers")
  return (
    <div>
          {/* <PageHeader
            heading="Custumers"
            href="/dashboard/custumers/new"
            linkTitle="Add Coupon"
            />   */}
        <div className="py-8">
          <DataTable data={custumers} columns={columns} />
        </div>
    </div>
  );
}


