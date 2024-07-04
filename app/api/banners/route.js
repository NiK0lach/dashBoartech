import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const { title, link, imageUrl, isActive } = await request.json();
        const newBanner = { title, link, imageUrl, isActive };
        console.log(newBanner);
        return  NextResponse.json(newBanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Banner",
            error
        },{status:500})
    }

}


export async function GET(request){
    try {
        const banners = await db.banners.findMany({
            orderBy:{
                createdAt:"desc",
            },
        });
       
      return  NextResponse.json(banners);
      //console.log(banners);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to fetch Banner",
            error
        },{status:500})
    }

}