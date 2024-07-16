import React from 'react';
import NewCategoryForm from "@/components/backoffice/Forms/NewCategoryForm";
import FormHeader from "@/components/backoffice/FormHeader";

export default function NewCategory() {
  return (
    <div>
        <FormHeader title="New Category"/>
        <NewCategoryForm />
    </div>
  );
}


