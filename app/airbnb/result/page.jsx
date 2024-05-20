import { readHotelsService } from '@/server/BL/services/hotel.service'
import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({ searchParams: { search } }) {
   await connectToMongo()
   const result = await readHotelsService({
      $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
   })

   return (
      <div>
         <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {result.map((hotel) => (
               <Link className='flex flex-col' key={hotel._id} href={`/airbnb/${hotel._id}`} >
                  <Image src={hotel.image} alt={hotel.title} width={600} height={400} />
                  {hotel.title}
               </Link>
            ))}
         </section>
      </div>
   )
}
