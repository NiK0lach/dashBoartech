import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,{params:{id}}){
    try {
        const coupons = await db.coupon.findUnique({
            where:{
                id,
              },
            });
        return NextResponse.json(coupons);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch Coupons",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingCoupon = await db.coupon.findUnique({
            where:{
              id,
            },
        });
        if(!existingCoupon){
            return NextResponse.json({
                data:null,
                message:"Coupons not found",
            },{status:404}
          );
        }
        const deletedCoupon= await db.coupon.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedCoupon);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete coupon ",
            error,
        },
        { status:500 }
     );
    }

}

export async function PUT(request, { params:{id}}){
    try {
        const  { title, couponCode, expiryDate, isActive} = await request.json();
        
        const exixtingCoupon = await db.coupon.findUnique({
            where:{
                id,
            },
        });
        if(!exixtingCoupon){
            return NextResponse.json({
                data:null,
                message:`Coupon (${title}) no se encuentra`,
            },{ status: 404}
          );
        }
        const updatedCoupon = await db.coupon.update({
            where:{ id },
            data: { title, couponCode, expiryDate, isActive},
        });
        return  NextResponse.json(updatedCoupon);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Coupon",
            error
        },{status:500});
    }

}