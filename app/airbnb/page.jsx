import HotelForm from '@/components/HotelForm'
import {  readHotelsService } from '@/server/BL/services/hotel.service'
import { createHotel } from '@/server/DL/controllers/hotel.controller'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'

const fakeData = [
  {
    "image": "https://example.com/hotel1.jpg",
    "slug": "grand-palace-hotel",
    "title": "Grand Palace Hotel",
    "location": "New York, NY",
    "description": "A luxurious hotel in the heart of New York City offering world-class amenities and services.",
    "price": 299
  },
  {
    "image": "https://example.com/hotel2.jpg",
    "slug": "seaside-resort",
    "title": "Seaside Resort",
    "location": "Malibu, CA",
    "description": "Enjoy a relaxing stay at our seaside resort with stunning ocean views and top-notch facilities.",
    "price": 349
  },
  {
    "image": "https://example.com/hotel3.jpg",
    "slug": "mountain-escape-lodge",
    "title": "Mountain Escape Lodge",
    "location": "Aspen, CO",
    "description": "Escape to the mountains and experience tranquility at our cozy lodge, perfect for outdoor enthusiasts.",
    "price": 199
  },
  {
    "image": "https://example.com/hotel4.jpg",
    "slug": "urban-chic-hotel",
    "title": "Urban Chic Hotel",
    "location": "Chicago, IL",
    "description": "Stay in style at our chic urban hotel, offering modern accommodations and convenient city access.",
    "price": 259
  },
  {
    "image": "https://example.com/hotel5.jpg",
    "slug": "desert-oasis-resort",
    "title": "Desert Oasis Resort",
    "location": "Phoenix, AZ",
    "description": "Discover a desert paradise at our oasis resort, complete with luxury spa and gourmet dining.",
    "price": 279
  },
  {
    "image": "https://example.com/hotel6.jpg",
    "slug": "historic-inn",
    "title": "Historic Inn",
    "location": "Boston, MA",
    "description": "Experience the charm of our historic inn, featuring elegant rooms and rich cultural heritage.",
    "price": 189
  },
  {
    "image": "https://example.com/hotel7.jpg",
    "slug": "beachfront-villa",
    "title": "Beachfront Villa",
    "location": "Miami, FL",
    "description": "Relax in our beachfront villa, offering stunning views and direct access to the sandy shores.",
    "price": 399
  },
  {
    "image": "https://example.com/hotel8.jpg",
    "slug": "forest-retreat",
    "title": "Forest Retreat",
    "location": "Portland, OR",
    "description": "Immerse yourself in nature at our forest retreat, perfect for a peaceful and rejuvenating getaway.",
    "price": 219
  },
  {
    "image": "https://example.com/hotel9.jpg",
    "slug": "city-center-hotel",
    "title": "City Center Hotel",
    "location": "San Francisco, CA",
    "description": "Conveniently located in the city center, our hotel offers easy access to popular attractions and business districts.",
    "price": 329
  },
  {
    "image": "https://example.com/hotel10.jpg",
    "slug": "lakeview-cabin",
    "title": "Lakeview Cabin",
    "location": "Lake Tahoe, CA",
    "description": "Enjoy a serene stay at our lakeview cabin, perfect for family vacations and outdoor adventures.",
    "price": 249
  }
]

export default async function Airbnb() {
  // unstable_noStore()
  // await new Promise(resolve => setTimeout(resolve, 7000))
  await connectToMongo()

// createHotel(fakeData.map((h, i)=>({ ...h, image: "https://www.mspirit.co.il/wp-content/uploads/2021/02/OO_ThePalm_Pool_MainPool_Twilight_0806_MASTER_Small.jpg"})))








  const hotels = await readHotelsService()

  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {hotels.map((hotel) => (
          <Link className='flex flex-col' key={hotel._id} href={`/airbnb/${hotel._id}`} >
            <Image src={hotel.image} alt={hotel.title} width={600} height={400} />
            {hotel.title}
          </Link>
        ))}
      </section>
      <HotelForm/>

    </div>
  )
}
