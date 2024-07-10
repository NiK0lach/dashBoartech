import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { title, slug, categoryId, description, content, imageUrl, isActive 

        } = await request.json();
        const existingTraining= await db.training.findUnique({
            where:{
                slug,
            },
        });
        if(existingTraining){
            return NextResponse.json({
                data:null,
                message:"Store ya existe",
            },{ status: 409}
          );
        }
       const newTraining =  await db.training.create({ 
            data:{
            title,
            slug,
            categoryId,
            description,
            content,
            imageUrl,
            isActive,
          },
        });
        console.log(newTraining);
        return  NextResponse.json(newTraining);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Training",
            error
        },{status:500})
    }

}



export async function GET(request){
    try {
        const trainings = await db.training.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(trainings);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch training ",
            error,
        },
        { status:500 }
     );
    }
}



  