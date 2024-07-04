import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const  { title, slug, description, imageUrl, isActive } = await request.json();
        const newCategory = { title, slug, description, imageUrl, isActive };
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
