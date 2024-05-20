import { readHotelByIdService, readHotelsService } from '@/server/BL/services/hotel.service'
import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'


export async function generateStaticParams() {
   await connectToMongo()
   const all = await readHotelsService()
   return all.map((hotel) => ({ id: String(hotel._id) }))
}

export default async function page({ params: { id } }) {
   await connectToMongo()
   const hotel = await readHotelByIdService(id)

   return (
      <div>
         <h1>{hotel.title}</h1>
         <p>{hotel.description}</p>
         <Image src={hotel.image} alt={hotel.title} width={600} height={400} />
      </div>
   )
}
