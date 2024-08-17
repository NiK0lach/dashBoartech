
import React from 'react'
import OrderCart from '@/components/Order/OrderCart';
import { authOptions } from '@/lib/authOptions';
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth';


export default async function page() {
    //Fetch all Orders 
    const orders =  await getData("orders");
    //Get user Id
    const session = await getServerSession(authOptions);
    if(!session) return;

    const userId = session?.user?.id;
    console.log(userId);

      if(orders.length===0 || !orders){
            return <p>No Orders Yet</p>
        }
    ///Filter By user Id
    const userOrders = orders.filter((order) => order.userId===userId);
    //console.log(userOrders);
    
  return (
    <section className="py-12 bg-white dark:bg-slate-800 sm:py-16 lg:py-16">
        <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-6xl mx-auto">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100 sm:text-3xl">Order Details</h1>
                    <p className="mt-2 text-sm font-normal text-gray-600 dark:text-gray-400">Check the status of recent and old orders & discover more products</p>
                </div>
                <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
                {
                    userOrders.map((order, i)=>{
                        return(
                            <OrderCart key={i} order={order} />
                        );
                    })
                }
                </ul>
            </div>
        </div>
    </section>
  );
}
