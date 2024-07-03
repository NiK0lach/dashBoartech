import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { supplierCode,
            name,
            phone,
            email,
            adress,
            contact,
            contactphone,
            paymenterms,
            notes,} = await request.json();
        const newSupplier = { supplierCode,
            name,
            phone,
            email,
            adress,
            contact,
            contactphone,
            paymenterms,
            notes,};
        console.log(newSupplier);
        return  NextResponse.json(newSupplier);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Supplier",
            error
        },{status:500})
    }

}