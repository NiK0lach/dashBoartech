"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo/img_logogernik-00_03.png';
import { BoxIcon, ChevronDown, ChevronRight, CircleDollarSign, GitCommitHorizontal, LayoutGrid, LogOut, Settings, Slack, Store, Truck, User2, UserSquare, Warehouse} from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
 

export default function Sidebar({showSidebar,setShowSidebar}) {
    const pathname= usePathname();
    const sidebarLinks =[
      {
        title:"Custumers",
        icon:User2,
        href:"/dashboard/custumers"
      },
      {
        title:"Stores",
        icon:Warehouse,
        href:"/dashboard/stores"
      },
      {
        title:"Suppliers",
        icon:BoxIcon,
        href:"/dashboard/suppliers"
      },
      {
        title:"Orders",
        icon:Truck,
        href:"/dashboard/orders"
      },
      {
        title:"Staff",
        icon:UserSquare,
        href:"/dashboard/staff"
      },
      {
        title:"Wallet",
        icon:CircleDollarSign,
        href:"/dashboard/wallet"
      },
      {
        title:"Settings",
        icon:Settings,
        href:"/dashboard/settings"
      },
      {
        title:"Online Store",
        icon:Store,
        href:"/"
      },
    ];

    const catalogueLinks =[
      {
        title:"Products",
        icon:GitCommitHorizontal,
        href:"/dashboard/products"
      },
      {
        title:"Categories",
        icon:GitCommitHorizontal,
        href:"/dashboard/categories"
      },
      {
        title:"Atributes",
        icon:GitCommitHorizontal,
        href:"/dashboard/atributes"
      },
      {
        title:"coupons",
        icon:GitCommitHorizontal,
        href:"/dashboard/coupons"
      },
      {
        title:"Staff",
        icon:GitCommitHorizontal,
        href:"/dashboard/staff"
      },
      {
        title:"Banners",
        icon:GitCommitHorizontal,
        href:"/dashboard/banners"
      },
    
    ];
 const [openMenu,setOpenMenu]=useState(false);
  return (
    <div className={showSidebar?"sm:block mt-20 sm:mt-0 bg-white dark:bg-slate-700 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 z-50 shadow-md overflow-y-scroll"
                    :"hidden sm:block mt-20 sm:mt-0 bg-white dark:bg-slate-700 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 z-50 shadow-md overflow-y-scroll"}>
      <Link onClick={() => setShowSidebar(false)} className='px-6 py-4' href="/dashboard">
        <Image src={logo} alt="Logo gernik" className='w-full'/>
      </Link>
      <div className='space-y-3 flex flex-col '>

        <Link onClick={() => setShowSidebar(false)} href="/dashboard" className={ pathname === "/dashboard" ? "flex items-center space-x-3 px-6 py-4 border-l-8 border-green-600 text-green-600" : "flex items-center space-x-3 px-6 py-4" }>
          <LayoutGrid/>
          <span>DashBoard</span>
        </Link>
         
        <Collapsible className='px-6 py-2'>
        <CollapsibleTrigger className='' onClick={() => setOpenMenu(!openMenu)}>
            <button className='flex items-center space-x-6 py-2'>
            <div className="flex items-center space-x-3">
            <Slack/>
            <span> Catalogue</span>
            </div>
           {openMenu? <ChevronDown/>: <ChevronRight/>}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className='rounded-lg py-3 px-3 pl-6 bg-slate-50 dark:bg-slate-800'>
            {
              catalogueLinks.map((item,i)=>{
                const Icon =item.icon;
                return(
                 
                     <Link onClick={() => setShowSidebar(false)} key={i} href={item.href} className={ pathname === item.href 
                        ? "flex items-center space-x-3 py-1 text-md border-green-600 text-green-600" 
                        : "flex items-center space-x-3 py-1 text-sm" 
                        }>
                      <Icon/>
                      <span>{item.title}</span>
                    </Link>
                  
                )
              })
            }
            </CollapsibleContent>
          </Collapsible>
        


        {
          sidebarLinks.map((item,i)=>{
            const Icon =item.icon;
           // const pathname=item.href;
              return(
                <Link onClick={() => setShowSidebar(false)} key={i} href={item.href} className={item.href == pathname ? 'flex items-center space-x-3 px-6 py-4 border-l-4 border-green-600 text-green-600':'flex items-center space-x-3 px-6 py-4'}>
                  <Icon/>
                  <span>{item.title}</span>
                </Link>
              );
          })
        }
        <div className='px-6 py-4'>
        <button className='flex items-center space-x-3 px-6 py-3  rounded-md bg-green-600'>
          <LogOut/><span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
