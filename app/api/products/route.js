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
            isActive,
            productCode,
            productImages
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
                productImages,
                imageUrl:productImages[0],    
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
   const categoryId = request.nextUrl.searchParams.get("catId");
   const sortBy = request.nextUrl.searchParams.get("sort");
   const min = request.nextUrl.searchParams.get("min");
   const max = request.nextUrl.searchParams.get("max");
   console.log(sortBy, categoryId);
   let where = {
      categoryId,
   };
   if(min && max) {
       where.salePrice =  {
         gte: parseFloat(min),
         lte: parseFloat(max),  
       };
     } else if(min) {
         where.salePrice = {
         gte: parseFloat(min),
        };
      } else if(max) {
         where.salePrice = {
         lte: parseFloat(max),       
        };
      }
   

   let products;

    try {

        if(categoryId && sortBy) {
            products = await db.product.findMany({
                where,
                orderBy:{salePrice:sortBy === "asc" ? "asc" : "desc",},
              });

        } else if(categoryId) {
             products = await db.product.findMany({
                where,
                orderBy:{createdAt:"desc",},  
             });
        } else {
            products = await db.product.findMany({
                orderBy:{createdAt:"desc",}, 
            });
        }
    
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
