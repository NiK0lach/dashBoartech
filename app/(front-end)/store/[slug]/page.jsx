import React from "react";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import CategoryList from "@/components/frontend/CategoryList";
import BreadCrumb from "@/components/frontend/BreadCrumb";

export default async function page({ params: { slug } }) {
  const store = await getData(`/stores/details/${slug}`);
  const storeCategoriesIds = store.categoryIds;
  //console.log(storeCategoriesIds);

  const categoriesData = await getData("categories");
  const categories = await categoriesData.filter((category) => {
    return category.products.length > 3;
  });
  const storeCategories = categories.filter((category) =>
    storeCategoriesIds.includes(category.id)
  );
  console.log(storeCategories);

  return (
    <>
      <BreadCrumb />
      <div
        className="flex items-center gap-6 py-2 w-full bg-white border border-gray-300 dark:border-gray-700 rounded-lg
         dark:bg-gray-800 text-slate-800 dark:text-white p-4 overflow-hidden"
      >
        <div className="">
          <Image
            src={store.logoUrl}
            width={50}
            height={50}
            alt={store.slug}
            className="w-16 h-16 rounded-full object-cover bg-slate-900 border-b border-slate-700 "
          />
        </div>
        <div className="">
          <h2 className="py-2 text-base lg:text-3xl ">{store.storeTitle}</h2>
          <p className="text-xs line-clamp-2 mb-4">{store.description}Descripcion mientras</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 w-full mt-4">
        <div className="col-span-full sm:col-span-12 rounded-md">
          {categories.map((category, i) => {
            return (
              <div key={i} className="space-y-8">
                <CategoryList isStorePage={false} category={category} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
