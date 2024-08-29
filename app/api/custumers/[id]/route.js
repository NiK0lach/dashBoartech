import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function PUT(request,{params:{id}}){
    try {
        const  {
                userId,
                name, 
                firstName,
                lastName,
                username,
                email,    
                phone,   
                dateOfBirth,
                profileImage,
                streetAddress,
                city,        
                country,
                zipCode,
              
              } = await request.json();

       const exixtingUser = await db.user.findUnique({
            where:{id},
          });
        console.log("exixtingUser",exixtingUser);
        
        if(!exixtingUser){
            return NextResponse.json({
                data:null,
                message:`Not found`,
            },{ status: 404}
          );
        }
        const updateUser = await db.UserProfile.update({
            where:{id},
            
            data:{
                userId,
                name, 
                firstName,
                lastName,
                username,
                email,    
                phone,   
                dateOfBirth,
                profileImage,
                streetAddress,
                city,        
                country,
                zipCode,
               },
        });
        return  NextResponse.json(updateUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update UserProfile",
            error
        },{status:500});
    }

}

