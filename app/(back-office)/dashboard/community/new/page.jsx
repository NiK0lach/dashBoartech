import React from 'react'
import TrainingForm from '@/components/backoffice/Forms/NewTrainingForm';
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from '@/lib/getData';

export default async function NewTraining({params:{id}}) {
  const training = await getData(`training/${id}`); 
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title,
    };
  });
 return (
    <div>
      <FormHeader title="New Training"/>
      <TrainingForm categories={categories}  />
    </div>

  );
}
