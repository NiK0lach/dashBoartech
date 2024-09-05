import React from 'react';
import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import DashboardCharts from '@/components/backoffice/DashboardCharts';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import UserDashBoard from '@/components/backoffice/UserDashBoard';
import SupplierDashboard from '@/components/backoffice/SupplierDashboard';
import { getData } from '@/lib/getData';



export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const sales = await getData("sales");
  //const salesById = sales.filter((sale)=> sale.vendorId === id);
  const products = await getData("products");
  const orders = await getData("orders");


  if(role==="USER"){
    return <UserDashBoard/>
  }
  if(role==="SUPPLIER"){
    return <SupplierDashboard/>
  }
  return (
    <div>
      <Heading title="Dashboard Overview"/>
      {/*Large cards*/}
      <LargeCards sales={sales}/>
      {/*Small cards*/}
      <SmallCards orders={orders} />
      {/*charts*/}
      <DashboardCharts sales={sales}/>
      {/*Recents order tables*/}
     {/* <CustumTable/>*/}
      
    </div>
  );
}


