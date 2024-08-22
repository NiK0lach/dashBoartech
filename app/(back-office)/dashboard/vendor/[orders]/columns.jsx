"use client"

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/data-table-components/DataTableColumns/DateColumn";
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
      accessorKey: "couponCode",
      header: "Coupon Code",
    },
    {
      accessorKey: "expiryDate",
      header: "Expiry Date",
      cell: ({ row }) => <DateColumn row={row} accessorKey="expiryDate" />,
    },
    
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
        const coupon = row.original;
        return <ActionColumn
        row={row}
        title="coupon"
        editEndpoint={`coupons/update/${coupon.id}`}
        endpoint={`coupons/${coupon.id}`}
        />
      }

    },
];
