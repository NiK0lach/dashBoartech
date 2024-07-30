import React from 'react';
import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import DashboardCharts from '@/components/backoffice/DashboardCharts';


function page() {
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
  )
}

export default page
