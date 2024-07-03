
export default function TexAreaInput( 
 {  label,
    name,
    register,
    errors,
    isRequired = true,
   className = "sm:col-span-2",
  }) {
    return (
        <div className={className}>
          <label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
          >
            {label}
          </label>
          <div className="mt-2">
            <textarea
              {...register(`${name}`, { required: isRequired })}
              name={name}
              id={name}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500
               ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600
                dark:bg-transparent dark:focus:ring-lime-600 dark:text-slate-100 sm:text-sm sm:leading-6"
              defaultValue={""}
              placeholder={`Type the ${label.toLowerCase()}`}
            />
            {errors[`${name}`] && (
              <span className="text-sm text-red-600 ">{label} is required</span>
            )}
          </div>
        </div>
      );
    }
