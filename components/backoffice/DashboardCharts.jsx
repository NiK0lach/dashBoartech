import React from 'react';
import WeeklySalesCharts from './WeeklySalesCharts';
import BestSellingProductsChart from './BestSellingProductsChart';

export default function DashboardCharts({sales}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <WeeklySalesCharts sales={sales} />
      <BestSellingProductsChart sales={sales}/>

    </div>
  )
}
