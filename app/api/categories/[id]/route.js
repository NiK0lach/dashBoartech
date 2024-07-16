import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request,{params:{id}}){
    try {
        const category = await db.category.findUnique({
            where:{
              id,
            },
            include:{
              products:true,
             },
        });
        return NextResponse.json(category);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch category ",
            error,
        },
        { status:500 }
     );
    }

}


export async function DELETE(request,{params:{id}}){
    try {
        const existingCategory = await db.category.findUnique({
            where:{
              id,
            },
        });
        if(!existingCategory){
            return NextResponse.json({
                data:null,
                message:"Category not found",
            },{status:404}
          );
        }
        const deletedCategory= await db.category.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedCategory);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete category ",
            error,
        },
        { status:500 }
     );
    }

}


export async function PUT(request,{params:{id}}){
    try {
        const  { id, title, slug, description, imageUrl, isActive } = await request.json();
        
        const exixtingCategory=await db.category.findUnique({
            where:{
                id,
            },
        });
        if(!exixtingCategory){
            return NextResponse.json({
                data:null,
                message:`Categoria (${title}) no se encuentra`,
            },{ status: 404}
          );
        }
        const updatedCategory = await db.category.update({
            where:{ id },
            data: { title, slug, description, imageUrl, isActive },
        });
        return  NextResponse.json(updatedCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Category",
            error
        },{status:500});
    }

}

