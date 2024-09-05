import React from 'react';
import RecentTraining from '@/components/frontend/RecentTraining';
import { getData } from '@/lib/getData';
import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal';
import Image from 'next/image';
import TrainingHtml from '@/components/TrainingHtml';
import CategoryList from '@/components/frontend/CategoryList';



export default async function page({params:{slug}}) {
    const training = await getData(`training/training/${slug}`);
    const trainigId = training.id;
    const normalDate = convertIsoDateToNormal(training.createdAt);
    const allTrainings = await getData("training");
    const recentTraining = allTrainings.filter((training)=>training.id !== trainigId);
    const category = await getData(`categories/${training.categoryId}`)
  return (
    <>
    <section className="py-12 bg-white sm:py-16 lg:py-20 rounded-md dark:bg-slate-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">


        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
          <div className="bg-gray-100 lg:col-span-5 rounded-xl">
            <div className="px-4 py-5 sm:p-6 ">
             
                
                    <div className="mx-auto">
                       
                        <div className="max-w-3xl mx-auto">
                            <p className="text-base font-medium text-gray-500">
                           {normalDate}
                            </p>
                            <h1 className="mt-6 text-4xl font-bold text-gray-900">
                            {training.title}
                            </h1>
                        </div>

                        <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
                           <Image className='object-cover w-full h-full' src={training.imageUrl} height={500} width={500} alt={training.title}/>
                        </div>

                        <div className="">
                           <p className="text-lg py-8 text-gray-900">{training.description}</p>
                           <hr className='mt-6'/>
                           <div className="py-8">
                           <TrainingHtml content={training.content}/>
                           </div>
                         </div>
                      </div>
                 </div>
          </div>
         <RecentTraining recentTraining={recentTraining}/>
        </div>
     </div>
     
    </section>
    <div className="py-8">
    <CategoryList isStorePage={false} category={category}/>
    </div> 
</>
  );
}
