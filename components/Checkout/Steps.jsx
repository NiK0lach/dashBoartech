'use client';
import React from 'react';
import {ChevronRight} from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Steps({ steps }) {
  const currentStep=useSelector((store)=>store.checkout.currentStep);
  console.log(currentStep);
return (
     <nav className="flex text-sm md:text-xl mb-8">
          <ol role="list" className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5">
              <li>
                <div className="-m-1">
                  <Link href="/cart" title="" className="inline-flex items-center p-1 text-sm md:text-base font-medium rounded-md
                   text-slate-500 hover:text-lime-700
                   dark:text-lime-500 dark:hover:text-lime-100">
                    Cart
                    <span className="inline-flex items-center justify-center w-5 h-5 ml-2
                     text-xs font-bold bg-lime-600 rounded-full text-white">
                      {" "}
                      4{" "}
                    </span>
                  </Link>
                </div>
              </li>

                {steps.map((step, i) => {
                  return (
                    <li key={i}>
                      <div className="flex items-center text-slate-400">
                        <ChevronRight className="flex-shrink-0 w-4 h-4"/>
                        <div className="-m-1">
        <p className={`p-1 ml-1.5 text-sm md:text-base font-medium rounded-md ${step.number===currentStep?"text-lime-400":""}`}>
                            {" "}
                            {step.title}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ol>
          </nav>
  );
}
