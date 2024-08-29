import React from 'react';
import DataTable from '@/components/data-table-components/DataTable';
import { getData } from '@/lib/getData';
import { columns } from './columns';


export default async function custumers() {
 const custumers = await getData("custumers");
  return (
    <div>
         <div className="py-8">
          <DataTable data={custumers} columns={columns} />
        </div>
    </div>
  );
}


