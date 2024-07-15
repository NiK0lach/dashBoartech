import React from 'react'

export default function DateColumn({row,accessorKey}) {
    const createdAt = row.getValue(`${accessorKey}`);
    const originalDate = new Date(createdAt);
    //const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = originalDate.getDate();
    const month = originalDate.toLocaleString('default', { month: 'short'});
    const year = originalDate.getFullYear();

    // Format the date as "11 Dec 2024"
    const formattedDate = `${day} ${month} ${year}`;
    return <div className="">{formattedDate}</div>;
}
