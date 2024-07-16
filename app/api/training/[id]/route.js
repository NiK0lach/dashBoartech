import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,{params:{id}}){
    try {
        const training = await db.training.findUnique({
            where:{
                id,
              },
            
              
            });
        return NextResponse.json(training);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch training",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingTraining = await db.training.findUnique({
            where:{
              id,
            },
        });
        if(!existingTraining){
            return NextResponse.json({
                data:null,
                message:"training not found",
            },{status:404}
          );
        }
        const deletedTraining= await db.training.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedTraining);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete training ",
            error,
        },
        { status:500 }
     );
    }

}

export async function PUT(request,{params:{id}}){
    try {
        const  { id, title, slug, categoryId, description, content, imageUrl, isActive } = await request.json();
        
        const exixtingTraining = await db.training.findUnique({
            where:{
                id,
            },
            
        });
        if(!exixtingTraining){
            return NextResponse.json({
                data:null,
                message:`Training (${title}) no se encuentra`,
            },{ status: 404}
          );
        }
        const updatedTraining = await db.training.update({
            where:{ id },
            data: { title, slug, categoryId, description, content, imageUrl, isActive },
        });
        return  NextResponse.json(updatedTraining);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Training",
            error
        },{status:500});
    }

}