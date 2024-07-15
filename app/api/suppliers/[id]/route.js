import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
    try {
        const suppliers = await db.SupplierProfile.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(suppliers);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch supplier",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingSupplier = await db.SupplierProfile.findUnique({
            where:{
              id,
            },
        });
        if(!existingSupplier){
            return NextResponse.json({
                data:null,
                message:"supplier not found",
            },{status:404}
          );
        }
        const deletedSupplier= await db.SupplierProfile.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedSupplier);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete supplier ",
            error,
        },
        { status:500 }
     );
    }

}