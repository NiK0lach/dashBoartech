"use client"
import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


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
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "imageUrl",
      header: "Cat Imagen",
      cell: ({ row }) => {
        const imageUrl = row.getValue("imageUrl")
        return <Image src={imageUrl} width={100} height={100} alt="" className="w-10 h-10 bg-white rounded-full object-cover "/>
      },
    },
 /* {
      accessorKey: "description",
      header: "Descripcion",
      cell: ({ row }) => {
        const description = row.getValue("description")
        return <div  className="line-clamp-2">{description}</div>
      },
  }, */
    {
      accessorKey: "isActive",
      header: "Estado",
       

    },
    {
      accessorKey: "createdAt",
      header: "Date Created",
      cell: ({ row }) => {
        const createdAt = row.getValue('createdAt');
        const originalDate = new Date(createdAt);
        //const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = originalDate.getDate();
        const month = originalDate.toLocaleString('default', { month: 'short'});
        const year = originalDate.getFullYear();

        // Format the date as "11 Dec 2024"
        const formattedDate = `${day} ${month} ${year}`;
        return <div className="">{formattedDate}</div>;
        
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const isActive = row.isActive
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button> */}
              {/* <Button className="" variant="outline">...</Button> */}
              <Button variant="outline"><MoreHorizontal/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(isActive)}
              >
                Copy the status
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delete category</DropdownMenuItem>
              <DropdownMenuItem>Edit Category</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
];
