"use client"

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/data-table-components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/data-table-components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/data-table-components/DataTableColumns/SortableColumn";



export const columns  = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productImage",
    header: "Product Imagen",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="productImage"/>)
  },
    {
      accessorKey: "productTitle",
      header: ({ column }) => (
        <SortableColumn column={column} title="Product Title"/>
      )
    },
     {
        accessorKey: "description",
        header: "Descr",
        cell: ({ row }) => {
          const description = row.getValue("description")
          return <div  className="line-clamp-1">{description}</div>
        },
    },
    {
      accessorKey: "productPrice",
      header: "Product Price",
    },
    {
      accessorKey: "productQty",
      header: "Qty",
    },
    {
      accessorKey: "total",
      header: "Total",
    },
    {
      accessorKey: "createdAt",
      header: "Date Created",
      cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    },
    
    
];
