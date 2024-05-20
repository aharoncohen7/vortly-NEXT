import { readHotelsService } from "@/server/BL/services/hotel.service";
import { connectToMongo } from "@/server/connectToMongo";
import { NextResponse } from "next/server";

export const GET = async () => {
   try {
      await connectToMongo()
      const hotels = await readHotelsService()
      return NextResponse.json(hotels)
   } catch (error) {
      console.log(error);
   }
}

export const POST = async () => {

}