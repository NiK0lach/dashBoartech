import React from 'react'
import Image from 'next/image';

export default function ImageColumn({row,accessorKey}) {
    const imageUrl = row.getValue(`${accessorKey}`);
    return (
        <Image 
        src={imageUrl} 
        width={100} 
        height={100} 
        alt=""
        className="w-10 h-10 bg-white rounded-full object-cover "/>
  );
}
