import React from 'react';
import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import DashboardCharts from '@/components/backoffice/DashboardCharts';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import UserDashBoard from '@/components/backoffice/UserDashBoard';
import SupplierDashboard from '@/components/backoffice/SupplierDashboard';


export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if(role==="USER"){
    return <UserDashBoard/>
  }
  if(role==="SUPPLIER"){
    return <SupplierDashboard/>
  }
  return (
    <div>
      <Heading title="Dasboard Overview"/>
      {/*Large cards*/}
      <LargeCards/>
      {/*Small cards*/}
      <SmallCards />
      {/*charts*/}
      <DashboardCharts/>
      {/*Recents order tables*/}
     {/* <CustumTable/>*/}
      
    </div>
  );
}


