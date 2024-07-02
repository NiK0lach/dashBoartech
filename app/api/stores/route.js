import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { code, storeTitle, contactPhone, contactEmail, contactAdress, contact, terms, notes  } = await request.json();
        const newStore = {code, storeTitle, contactPhone, contactEmail, contactAdress, contact, terms, notes  };
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