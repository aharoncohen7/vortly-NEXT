"use server"

import { connectToMongo } from "@/server/connectToMongo"
import { createHotelService } from "../services/hotel.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createHotelAction = async (fd) => {
   const body = Object.fromEntries(fd)

   try {
      await connectToMongo()
      await createHotelService(body)
      revalidatePath('/airbnb')
   } catch (error) {
      console.log({ error });
   }
   redirect('/airbnb')
} 