import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { 
            slug,
            storeTitle,
            description,
            logoUrl,
            storePhone,
            storeEmail,
            storeAdress,
            contactName,
            contactPhone,
            terms,
            notes,
            link,
            isActive,} = await request.json();
          const newStore = {
            slug,
            storeTitle,
            description,
            logoUrl,
            storePhone,
            storeEmail,
            storeAdress,
            contactName,
            contactPhone,
            terms,
            notes,
            link,
            isActive, };
       console.log(newStore);

        return  NextResponse.json(newStore);
            } catch (error) {
                console.log(error);
                return NextResponse.json({
                    message:"Failed to create Store",
                    error
                },{status:500}
            );
    }

}
