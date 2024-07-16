import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DeleteBtn from '@/components/Actions/DeleteBtn';
import EditBtn from '@/components/Actions/EditBtn';

export default function ActionColumn({ row, title, endpoint, editEndpoint }) {
  const isActive = row.isActive;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir Menu</span>
            <MoreHorizontal className="h-4 w-4" variant="outline" />
          </Button> 
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DeleteBtn title={title} endpoint={endpoint}/>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <EditBtn title={title} editEndpoint={editEndpoint}/>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
