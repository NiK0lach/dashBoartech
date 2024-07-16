"use client"

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/data-table-components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/data-table-components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/data-table-components/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/data-table-components/DataTableColumns/ActionColumn";


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
      accessorKey: "title",
      header: ({ column }) => (
        <SortableColumn column={column} title="title"/>
      )
    },
    {
      accessorKey: "imageUrl",
      header: "Training Imagen",
      cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl"/>)
    },
    // {
    //     accessorKey: "description",
    //     header: "Descripcion",
    //     cell: ({ row }) => {
    //       const description = row.getValue("description")
    //       return <div  className="line-clamp-1">{description}</div>
    //     },
    // }, 
    {
      accessorKey: "isActive",
      header: "Estado",
    
    },
    {
      accessorKey: "createdAt",
      header: "Date Created",
      cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
      
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const training = row.original;
        return <ActionColumn
        row={row}
        title="Training"
        editEndpoint={`community/update/${training.id}`}
        endpoint={`training/${training.id}`}
        />
      }

    },
];