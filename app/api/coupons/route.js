import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const { title, couponCode, expiryDate, isActive } = await request.json();
        const newCoupon = await db.coupon.create({
            data:{
                title,
                couponCode,
                expiryDate,
                isActive
            },
        });
        console.log(newCoupon);
        return  NextResponse.json(newCoupon);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Coupon",
            error
        },{status:500})
    }

}


export async function GET(request){
    try {
        const coupon = await db.coupon.findMany({
            orderBy:{
                createdAt:"desc",
            },
        });
      return  NextResponse.json(coupon);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to fetch Coupon",
            error
        },{status:500})
    }

}