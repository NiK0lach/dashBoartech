import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
//Custom Tool Bar

export default function QuillEditor({
   label,
   className="sm:col-span-2",
   value,
   onChange,
  
  }){
  
    const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "color", "image"],
        [{ "code-block": true }],
        ["clean"],
      ],
    };
    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "indent",
      "image",
      "code-block",
      "color",
    ];

  return (
  
       <div className={className}>
                <label
                  htmlFor="content"
                  className="block w-full rounded-md border-0 py-1.5
                   text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-slate-600 dark:bg-transparent dark:focus:ring-lime-600
                      dark:text-slate-100 sm:text-sm sm:leading-6 px-6 py-4"
                >
                {label}
                </label>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={onChange}
                  modules={modules}
                  formats={formats}
                 />
        </div>
    
  )
}
