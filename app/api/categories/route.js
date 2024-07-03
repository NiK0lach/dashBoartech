import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { title, slug, marcaIds, description, imageUrl } = await request.json();
        const newCategory = { title, slug, marcaIds, description, imageUrl  };
        console.log(newCategory);
        return  NextResponse.json(newCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Category",
            error
        },{status:500})
    }

}