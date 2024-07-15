import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
    try {
        const stores = await db.store.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(stores);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch store",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingStore = await db.store.findUnique({
            where:{
              id,
            },
        });
        if(!existingStore){
            return NextResponse.json({
                data:null,
                message:"store not found",
            },{status:404}
          );
        }
        const deletedStore= await db.store.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedStore);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete store ",
            error,
        },
        { status:500 }
     );
    }

}