import { createHotel, readHotelById, readHotels } from "@/server/DL/controllers/hotel.controller";


export const createHotelService = (data) => createHotel(data)
export const readHotelsService = (filter) => readHotels(filter)
export const readHotelByIdService = (id) => readHotelById(id)