import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
         /*const { supplierCode,
            name,
            phone,
            email,
            adress,
            contact,
            contactphone,
            paymenterms,
            notes,
            isActive,
            profileImageUrl,
            experiencia,
            campoexpert,
            experts,
            userId
        } = await request.json();*/
        const supplierData = await request.json();
        //console.log(supplierData);
        const newSupplierProfile = await db.SupplierProfile.create({
            data:{
                name:supplierData.name,   
                phone: supplierData.phone,
                profileImageUrl: supplierData.profileImageUrl,
                email: supplierData.email,
                adress: supplierData.adress,
                contact:supplierData.contact,
                contactphone:supplierData.contactphone, 
                paymenterms:supplierData.paymenterms,
                notes:supplierData.notes,
                supplierCode : supplierData.supplierCode, 
                isActive:supplierData.isActive,
                experiencia:parseFloat(supplierData.experiencia),
                campoexpert:supplierData.campoexpert,
                experts:supplierData.experts,
                userId:supplierData.userId,
            },
        });
        console.log(newSupplierProfile);
        return  NextResponse.json(newSupplierProfile);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Supplier",
            error
        },{status:500})
    }

}

export async function GET(request){
    try {
        const suppliers = await db.user.findMany(
            {
                orderBy:{
                    createdAt:"desc",
                },
                where: {
                    role:"SUPPLIER",
                },
                include: {
                    supplierProfile:true,
                },
            }
        );
        return NextResponse.json(suppliers);
      
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