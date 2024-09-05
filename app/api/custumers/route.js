import db from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(request){
    try {
        const custumers = await db.user.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                },
                where: {
                    role:"USER",
                },
                include: {
                   profile:true,
                },
            }
        );
        return NextResponse.json(custumers);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch custumer",
            error,
        },
        { status:500 }
     );
    }

}