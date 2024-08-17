import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,{params:{id}}){
    try {
        const order = await db.order.findUnique({
            where:{
                id,
              },
              include:{
                orderItems:true,
            },
            
              
            });
        return NextResponse.json(order);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch order",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingOrder = await db.order.findUnique({
            where:{
              id,
            },
        });
        if(!existingOrder){
            return NextResponse.json({
                data:null,
                message:"Order not found",
            },{status:404}
          );
        }
        const deletedOrder= await db.order.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedOrder);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete order ",
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