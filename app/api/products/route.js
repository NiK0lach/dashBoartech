import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { 
            title,
            slug,
            sku, 
            barcode, 
            productPrice,
            salePrice, 
            description, 
            imageUrl, 
            tags,   
            isActive
        } = await request.json();
        const productData =
        {
            title,
            slug,
            sku, 
            barcode, 
            productPrice,
            salePrice, 
            description, 
            imageUrl, 
            tags,   
            isActive
        };
        
        console.log(productData);
        return  NextResponse.json(productData);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Product",
            error
        },{status:500})
    }

}
