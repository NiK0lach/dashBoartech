import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request){
    try {
        const banners = await db.banner.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(banners);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch Banners",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingBanner = await db.banner.findUnique({
            where:{
              id,
            },
        });
        if(!existingBanner){
            return NextResponse.json({
                data:null,
                message:"Banner not found",
            },{status:404}
          );
        }
        const deletedBanner= await db.banner.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedBanner);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete banner ",
            error,
        },
        { status:500 }
     );
    }

}