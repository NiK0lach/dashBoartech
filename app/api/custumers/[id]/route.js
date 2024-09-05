import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function PUT(request,{params:{id}}){
    try {
        const  {
                userId:userId,
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
                userId:userId,
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

export async function POST(request){
    try {
         const {
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
            userId:userId,
        } = await request.json();
        
        const existingUser= await db.user.findUnique({
            where: {
                id:userId,
            },
          });
        if(!existingUser){
            return NextResponse.json({
                data:null,
                message:`Usuario no existe!`,
            },{status:404}
           );
          }
         
       
        const newCustumerProfile = await db.UserProfile.create({
            data:{
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
                userId:userId,
            },
        });
        console.log(newCustumerProfile);
        return  NextResponse.json(newCustumerProfile);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Supplier",
            error
        },{status:500})
    }

}

