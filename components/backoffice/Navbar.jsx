"use client";
import React from 'react';
import { AlignJustify, Sun, Bell, User, LayoutDashboard, Settings, LogOut, X } from 'lucide-react';
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';

export default function Navbar({ setShowSidebar,showSidebar }) {
  return (
    <div className='flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50  h-20 py-8 
    fixed top-0 w-full px-8 z-50 sm:pr-[20rem]'>
      {/* Icon */}
      <button onClick={() => setShowSidebar(!showSidebar)} className='text-lime-700 dark:text-lime-500'>
        <AlignJustify />
      </button>
      {/* 3 icons */}
      <div className='flex space-x-3'>
        <button  className=' text-lime-700 dark:text-lime-500'>
            <ThemeSwitcherBtn />
        </button>
        <DropdownMenu>
                <DropdownMenuTrigger>
                  <button type="button" class="relative inline-flex items-center p-4 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                    <Bell className='text-lime-700 dark:text-lime-500' />
                    <span className="sr-only">Notifications</span>
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 end-5 dark:border-gray-900">5</div>
                  </button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent className="py-2 px-4 pr-8">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                  <Image src='/Snake2.webp' alt='user profile' width={200} height={200} className="w-8 h-8 rounded-full"/>
                  <div className="flex flex-col space-y-1">
                        <p>Cara the mon da text</p>
                          <div className="flex items-center space-x-2">
                            <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock out</p>
                            <p className=''>May 19 2024 - 2:40PM</p>
                            <button> <X /></button>
                          </div>
                    </div>
                  </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                  <Image src='/Snake2.webp' alt='user profile' width={200} height={200} className="w-8 h-8 rounded-full"/>
                  <div className="flex flex-col space-y-1">
                        <p>Cara the mon da text</p>
                          <div className="flex items-center space-x-2">
                            <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock out</p>
                            <p className=''>May 19 2024 - 2:40PM</p>
                            <button> <X /></button>
                          </div>
                    </div>
                  </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <div className='flex items-center space-x-2'>
                  <Image src='/Snake2.webp' alt='user profile' width={200} height={200} className="w-8 h-8 rounded-full"/>
                  <div className="flex flex-col space-y-1">
                        <p>Cara the mon da text</p>
                          <div className="flex items-center space-x-2">
                            <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>Stock out</p>
                            <p className=''>May 19 2024 - 2:40PM</p>
                            <button> <X /></button>
                          </div>
                    </div>
                  </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
                <DropdownMenu>
                <DropdownMenuTrigger>
                <button>
                 <Image src='/Snake2.webp' width={200} height={200} alt='Profile user' className="w-8 h-8 rounded-full"/>
               </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="py-2 px-4 pr-8">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                   <span>Dashboard</span>
                  </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <button className='flex items-center space-x-2'>
                  <Settings className="mr-2 h-4 w-4" />
                   <span>Edit Profile</span>
                  </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                   <button className='flex items-center space-x-2'>
                   <LogOut className="mr-2 h-4 w-4" />
                   <span>Log out</span>
                   </button>
                  </DropdownMenuItem>
                
                </DropdownMenuContent>
              </DropdownMenu>
    
      </div>    
    </div>
  )
}
