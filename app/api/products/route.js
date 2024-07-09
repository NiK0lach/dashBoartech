import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const productData = await request.json();
        const existingProduct= await db.product.findUnique({
            where:{
                slug,
            },
        });
        if(existingProduct){
            return NextResponse.json({
                data:null,
                message:"Producto ya existe",
            },{ status: 409}
          );
        }
        const newProduct = await db.product.create({
            data: {
                slug,
                title,
                sku, 
                barcode, 
                categoryId,
                userId:supplierId,
                productPrice:parseFloat(productData.productPrice),
                salePrice:parseFloat(productData.salePrice),
                isWholesale,
                saleTotalPrice:parseFloat(productData.saleTotalPrice),
                wholsaQty:parseInt(productData.wholsaQty),
                productStock:parseInt(productData.productStock),
                qty:parseInt(productData.qty),
                description, 
                tags,
                imageUrl,    
                isActive,
                productCode },
        });
        
        console.log(newProduct);
        return  NextResponse.json(newProduct);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Product",
            error
        },{status:500})
    }

}


export async function GET(request){
    try {
        const products = await db.product.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                }
            }
        );
        return NextResponse.json(products);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch productos ",
            error,
        },
        { status:500 }
     );
    }

}
