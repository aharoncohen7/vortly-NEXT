
import { axiosReqToRender } from '@/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({ searchParams: { search } }) {
   console.log(search);
   const posts = await axiosReqToRender({method: 'GET',body:{}, url:`/posts` })
   let result = posts;
      result = result.filter((elm) => elm.author != null && elm.author == search)
      console.log(result);
   


      
   // const result = await readHotelsService({
   //    $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
   // })

   return (
      <div>
         <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {result.map((post) => (
               <Link className='flex flex-col' key={post.id} href={`/posts/${post.id}`} >
                  {/* <Image src={post.image} alt={post.title} width={600} height={400} /> */}
                  {post.title}
               </Link>
            ))}
         </section>
      </div>
   )
}
