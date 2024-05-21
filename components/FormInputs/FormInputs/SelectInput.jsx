import React from 'react'

export default function SelectInput({
    label,
    name,
    register,
    className = "sm:col-span-2",
    options = [],
    multiple=true,
}){
  
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
        >
          {label}
        </label>
        <div className="mt-2">
            <select
              {...register(`${name}`)}
              id={name}
              multiple={multiple}
              name={name}
              className='block text-md font-medium leading-10 rounded-md text-gray-900 dark:text-slate-50 mb-2 dark:bg-transparent dark:focus:bk-slate-600'
            >
            {options.map((option, i) => {
                return(
                    <option className='bg-transparent dark:bg-slate-900 dark:focus:bk-slate-600' key={i} value={option.id}>
                        {option.title}
                    </option>
                );
               })}
            </select>
        </div>
        
      </div>
  )
}