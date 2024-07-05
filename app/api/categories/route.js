import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const  { title, slug, description, imageUrl, isActive } = await request.json();
        const exixtingCategory=await db.category.findUnique({
            where:{
                slug,
            },
        });
        if(exixtingCategory){
            return NextResponse.json({
                data:null,
                message:"Categoria ya existe",
            },{ status: 409}
          );
        }
        const newCategory = await db.category.create({
            data: { title, slug, description, imageUrl, isActive },
        });
        return  NextResponse.json(newCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Category",
            error
        },{status:500})
    }

}

export async function GET(request){
    try {
        const categories = await db.category.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(categories);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch categories ",
            error,
        },
        { status:500 }
     );
    }

}