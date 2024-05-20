import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
   image: {
      type: String,
      required: true,
   },
   slug: {
      type: String,
      required: true,
      unique: true
   },
   title: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
});



export const HotelModel = mongoose.models.Hotel || mongoose.model('Hotel', hotelSchema);

