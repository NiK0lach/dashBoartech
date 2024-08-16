import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {checkoutFormData, orderItems} = await request.json();
        const {city,country,email,firstName,lastName,paymentMethod,phone,shippingCost,streetAddress,userId,zipCode} = checkoutFormData;
        
        
       const newOrder =  await db.order.create({ 
            data:{
                userId,
                firstName,
                lastName,      
                email,  
                phone,   
                streetAddress,
                city,          
                country,       
                zipCode,       
                shippingCost:parseFloat(shippingCost),   
                paymentMethod, 
          },
        });

       //Create order Item
        const newOrderItems = await prisma.orderItem.createMany({
            data: orderItems.map((item) => ({
                productId:item.id,
                quantity:parseInt(item.qty),
                price:parseFloat(item.salePrice),
                orderId:newOrder.id,
            })),
        });

        console.log(newOrder,newOrderItems);

       

        return  NextResponse.json(newOrder);
        } catch (error) {
            console.log(error);
            return NextResponse.json({
                message:"Failed to create Order",
                error
            },{status:500})
        }

}



export async function GET(request){
    try {
        const orders = await db.order.findMany({
            
                orderBy:{
                    createdAt:"desc",
                },
               
            });
        return NextResponse.json(orders);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch Orders",
            error,
        },
        { status:500 }
     );
    }
}



  