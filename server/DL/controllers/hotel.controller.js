import { HotelModel } from "../models/hotels.model"

export const readHotels = (filter) => HotelModel.find(filter)
export const readHotelById = (id) => HotelModel.findById(id)
export const createHotel = (data) => HotelModel.create(data)