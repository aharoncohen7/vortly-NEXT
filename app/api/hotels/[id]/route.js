import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
   try {
      const { id } = params;
     
      const searchParams = Object.fromEntries(req.nextUrl.searchParams)    //query
      return NextResponse.json({  id, searchParams })
  
   } catch (error) {
      console.log(error);
   }
    }
git 

export const PUT = async (req, { params }) => {
try {
   const body = await req.json();
   const { id } = params;
  
   const searchParams = Object.fromEntries(req.nextUrl.searchParams)    //query
   // return NextResponse.json({ body, id, searchParams })
   console.log(body);
} catch (error) {
   console.log(error);
}
 }