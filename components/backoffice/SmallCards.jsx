import React from 'react';
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function SmallCards({orders}) {
  const status={
     pending:"PENDING",
     processing:"PROCESSING",
     shipping:"SHIPPED",
     delivering:"DELIVERED",
     canceled:"CANCELED",
  }
  function getOrderCountByStatus(status){
    const filteredOrders = orders.filter((order)=>order.orderStatus === status);
    const count = filteredOrders.length.toString().padStart(2, "0");
    return count;
  }
  const orderCount = orders.length.toString().padStart(2, "0");
  const pendingOrdersCount = getOrderCountByStatus(status.pending);
  const procesingOrdersCount = getOrderCountByStatus(status.processing);
  const deliveredOrdersCount = getOrderCountByStatus(status.delivering);
  const orderstatus = [
        {
            title:"Today Orders",
            number: orderCount,
            iconBg:"bg-green-600", 
            icon:ShoppingCart
        },
        {
            title:"Orders Pending",
            number: pendingOrdersCount,
            iconBg:"bg-blue-600",
            icon:Loader2 
        },
        {
            title:"Orders Procesing",
            number: procesingOrdersCount,
            iconBg:"bg-orange-600",
            icon:RefreshCcw
        },
        {
            title:"Orders Delivered",
            number: deliveredOrdersCount,
            iconBg:"bg-purple-600" ,
            icon:CheckCheck
         }
        
    ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
      {
        orderstatus.map((data,i)=>{
            return(
                <SmallCard data={data} key={i} />
            )
        }) 
      }
    </div>
  )
}
