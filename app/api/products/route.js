import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){


    try {
        const {
            slug,
            title,
            sku, 
            barcode, 
            categoryId,
            supplierId,
            productPrice,
            salePrice,
            isWholesale,
            saleTotalPrice,
            wholsaQty,
            productStock,
            qty,
            description, 
            tags,
            imageUrl,    
            isActive,
            productCode,
        } = await request.json();

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
                productPrice:parseFloat(productPrice),
                salePrice:parseFloat(salePrice),
                isWholesale,
                saleTotalPrice:parseFloat(saleTotalPrice),
                wholsaQty:parseInt(wholsaQty),
                productStock:parseInt(productStock),
                qty:parseInt(qty),
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
