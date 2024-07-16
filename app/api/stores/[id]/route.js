import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET( request,{params:{id}}){
    try {
        const store = await db.store.findUnique({
            where:{
                id,
              },
        });
        return NextResponse.json(store);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch store",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingStore = await db.store.findUnique({
            where:{
              id,
            },
        });
        if(!existingStore){
            return NextResponse.json({
                data:null,
                message:"store not found",
            },{status:404}
          );
        }
        const deletedStore= await db.store.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedStore);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete store ",
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
        
        const exixtingStore = await db.store.findUnique({
            where:{
                id,
            },
            // include:{
            //     categoryId:true,
            //     userId:true,
            //    },
        });
        if(!exixtingStore){
            return NextResponse.json({
                data:null,
                message:`Producto (${title}) no se encuentra`,
            },{ status: 404}
          );
        }
        const updatedStore = await db.store.update({
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
                productCode }
        });
        return  NextResponse.json(updatedStore);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Store",
            error
        },{status:500});
    }

}