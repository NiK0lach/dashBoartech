import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

export async function POST(request){
    try {
       const resend = new Resend(process.env.RESEND_API_KEY);  
      //extract credetendials
      const { name, email, password, role} = await request.json();
      //check if usera lready exits
      const existingUser= await db.user.findUnique({
        where: {
            email,
        },
      });
      if(existingUser){
        return NextResponse.json({
            data:null,
            message:"Usuario ya existe!",
        },{status:409}
       );
      }
      //Encrpyt password bcrypt
      const hashedPassword = await bcrypt.hash(password,10);
      // Generate a random UUID (version 4)
      const rawToken = uuidv4();
      //console.log(rawToken);
      // Encode the token using Base64 URL-safe format
      const token = base64url.encode(rawToken);
      const newUser = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
            verificationToken: token,
        },
      });
      console.log(newUser);
      //send the email if user role is == supplier
      if(role==="SUPPLIER"){
        //Send an Email with the Token on the link as a search param
        const userId = newUser.id;
        const linkText = "Verify Account";
        const redirectUrl = `onboarding/${userId}?token=${token}`;
        const sendMail = await resend.emails.send({
            from: "Sparkemove <response@sparemove.com>",
            to: email,
            subject: "Account Verification from Sparkemove",
            react: EmailTemplate({ name, redirectUrl, linkText }),
            });
        console.log(sendMail);
        
      }
      //send the email if user role is == supplier
      return NextResponse.json(
        {
        data: newUser,
        message: "Usuario creado!",
        
       },
       {status:201}
   );
     } catch (error) {
            console.log(error);
            return NextResponse.json(
            { 
                error,
                message:"Server Error: Opps algo paso!",     
            },
            { status:500 }
        );
    }
}

export async function GET(request){
  try {
      const users = await db.user.findMany(
          {
              orderBy:{
                  createdAt:"desc",
              }
          }
      );
      return NextResponse.json(users);
    
  } catch (error) {
      console.log(error);
      return NextResponse.json(
       {
          message:"Failed to fetch User",
          error,
      },
      { status:500 }
   );
  }

}