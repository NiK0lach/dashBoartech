
import React from 'react';
import Breadcrumb from './Breadcrumb';
import Sorting from './Sorting';
import Filters from './Filters';
import FilteredProducts from './FilteredProducts';

export default function FilterComponent({category, products}) {
    const {title, slug } = category;
  return (
    <div>
        <div className="bg-white space-y-4 py-8 px-8 text-slate-900 ">
            <Breadcrumb title={title}/>
            <Sorting title={title} slug={slug}/>
        </div>
        <div className="grid grid-cols-12 py-8 gap-4">
            <div className="col-span-3"><Filters slug={slug}/> </div>
            <div className="col-span-9"><FilteredProducts products={products}/></div>
        </div>
    </div>
  );
}
