import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,{params:{id}}){
    try {
        const product = await db.product.findUnique({
            where:{
                id,
              },
              
            });
        return NextResponse.json(product);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch product",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingProduct = await db.product.findUnique({
            where:{
              id,
            },
        });
        if(!existingProduct){
            return NextResponse.json({
                data:null,
                message:"product not found",
            },{status:404}
          );
        }
        const deletedProduct= await db.product.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedProduct);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete product ",
            error,
        },
        { status:500 }
     );
    }

}

export async function PUT(request,{params:{id}}){
    try {
        const  { 
           
                slug,
                title,
                sku, 
                barcode, 
                categoryId,
                userId:supplierId,
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
                productCode } = await request.json();
        
        const exixtingProduct=await db.product.findUnique({
            where:{
                id,
            },
            // include:{
            //     categoryId:true,
            //     userId:true,
            //    },
        });
        if(!exixtingProduct){
            return NextResponse.json({
                data:null,
                message:`Producto (${title}) no se encuentra`,
            },{ status: 404}
          );
        }
        const updatedProduct = await db.product.update({
            where:{ id },
            // include:{
            //     categoryId:true,
            //     userId:true,
            //        },
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
                productCode, }
        });
        return  NextResponse.json(updatedProduct);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Producto",
            error
        },{status:500});
    }

}