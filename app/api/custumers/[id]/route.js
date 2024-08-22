import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,{params:{id}}){
    try {
        const custumers = await db.user.findUnique({
            where:{
                id,
              },
            });
         
        return NextResponse.json(custumers);
      
    } catch (error) {
        console.log(error);
        return NextResponse.json(
         {
            message:"Failed to fetch user",
            error,
        },
        { status:500 }
     );
    }

}

export async function PUT(request, { params:  {id} } ){
    try {
        const  {   
            name,   
            firstName,  
            lastName,   
            username,  
            email,      
            phone,      
            streetAddress,
            city,          
            country,       
            dateOfBirth,   
            profileImage,  
            zipCode} = await request.json();

       const exixtingUser = await db.user.findUnique({
            where:{
                id,
            },
        });
        console.log(exixtingUser);
        
        if(!exixtingUser){
            return NextResponse.json({
                data:null,
                message:`Not found`,
            },{ status: 404}
          );
        }
        const updatedUser = await db.userprofile.update({
            where:{ id },
            data: { name,   
                firstName,  
                lastName,   
                username,  
                email,      
                phone,      
                streetAddress,
                city,          
                country,       
                dateOfBirth,   
                profileImage,  
                zipCode},
        });
        return  NextResponse.json(updatedUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update user",
            error
        },{status:500});
    }

}