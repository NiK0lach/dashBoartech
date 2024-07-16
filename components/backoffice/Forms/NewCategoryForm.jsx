'use client';
import React, { useState } from 'react';
import SubmitButton from '@/components/FormInputs/FormInputs/SubmitButton';
import TextInput from '@/components/FormInputs/FormInputs/TextInput';
import { useForm } from 'react-hook-form';
import TextAreaInput from '@/components/FormInputs/FormInputs/TextAreaInput';
import { generateSlug } from '@/lib/generateSlug';
import ImageInput from '@/components/FormInputs/FormInputs/ImageInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import ToggleInput from '@/components/FormInputs/FormInputs/ToggleInput';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';


export default function CategoryForm( { updateData={} }) {
    const initialImageUrl = updateData?.imageUrl??"" ;
    const [imageUrl,setImageUrl] =useState(initialImageUrl);
    const id = updateData?.id ??"";

    const [loading,setLoading] =useState(false);
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState:{ errors },
    } = useForm({
        defaultValues: {
            isActive:true,
            ...updateData,
        },
    });
    const isActive = watch("isActive");
    console.log(isActive);
    const router = useRouter();
    function redirect(){
        router.push('/dashboard/categories');
    }
    

    async function onSubmit(data){
        const slug=generateSlug(data.title);
        data.slug=slug;
        data.imageUrl=imageUrl;
        console.log(data);
        
        if(id) {
            data.id = id;
            //make post ruquest update
            makePutRequest(setLoading,`api/categories/${id}`,data,"Category",redirect);
            //console.log("update Request", data);
        } else {
            //make post request Create
            makePostRequest(setLoading, "api/categories", data, "Category", reset, redirect);
            setImageUrl("");
        }

        
       }   
      return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <TextInput 
            label="Category title"
            name="title"
            register={register}
            errors={errors}
            />
            
            <TextAreaInput 
                label="Category Description"
                name="description"
                register={register}
                errors={errors}
            />

            <ImageInput 
            imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            endpoint='categoryImageUploader' 
            label="Category Image" />

            {/* Toggle component */}
            <ToggleInput
                label="Publica Categoria"
                name="isActive"
                trueTitle="Active"
                falseTitle="Draft"
                register={register}
                />

            </div>
            <SubmitButton 
            isLoading={loading} 
            buttonTitle={id ? "Update Category" : "Create a new category"} 
            loadingButtonTitle={`${id ? "Updating" : "Creating" } 
                Category please wait...`} 
            />
        </form> 
    
  )
}


