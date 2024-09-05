import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request, { params: { id } }){
    try {
        const supplier = await db.user.findMany(
            {
                where:{
                    id,
                },
                include: {
                    supplierProfile:true,
                },
            },
        );
        return NextResponse.json(supplier);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch supplier",
            error,
        },
        { status:500 }
     );
    }

}

export async function DELETE(request,{params:{id}}){
    try {
        const existingSupplier = await db.user.findUnique({
            where:{
              id,
            },
        });
        if(!existingSupplier){
            return NextResponse.json({
                data:null,
                message:"supplier not found",
            },{status:404}
          );
        }
        const deletedSupplier= await db.user.delete({
            where:{
                id,
              }, 
        });
        return NextResponse.json(deletedSupplier);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to delete supplier ",
            error,
        },
        { status:500 }
     );
    }

}

export async function PUT(request,{params:{id}}){
    try {
        const  { status,emailVerified } = await request.json();
        
        const exixtingSupplier=await db.user.findUnique({
            where:{
                id,
            },
        });
        if(!exixtingSupplier){
            return NextResponse.json({
                data:null,
                message:`Not Found`,
            },{ status: 404}
          );
        }
        const updatedSupplier = await db.user.update({
            where:{ id },
            data: { status, emailVerified  },
        });
        return  NextResponse.json(updatedSupplier);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update Supplier",
            error
        },{status:500});
    }

}
