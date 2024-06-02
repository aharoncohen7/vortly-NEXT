
import { axiosReqToRender } from '@/helpers'
import { unstable_noStore } from 'next/cache'
import { cookies, headers } from 'next/headers'
// import { UserContext } from '@/app/UserContext'
import Link from 'next/link'
import React from 'react'


// export const dynamic = 'force-dynamic'
// export const revalidate = 3600 // revalidate at most every hour

export default async function Posts() {
  //  const { mood } = React.useContext(UserContext);
  //  console.log(mood);
  
   // unstable_noStore()
   // const h = headers()
   // const c = cookies()

   // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 30 } })
   // const res = await fetch("https://vortly-db.onrender.com/api/posts/", {  cache: 'force-cache'})
     // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {  cache: 'no-store'})
   //   const posts = await res.json()
     // const date = new Date().toISOString().slice(0, 19)

  // קבלת פוסטים
  const posts = await axiosReqToRender({method: 'GET',body:{}, url:`/posts` })
  console.log(posts);
 






 

   return (
      <div className='p-8 flex justify-center gap-4 flex-wrap'>
         {/* {date} */}
         {posts && posts.map((post) => (
            <Link href={`/posts/${post.id}`} className='border-2 p-4 border-gray-400' key={post.id}>
               <h1 >{post.title}</h1>
               {/* <p>{post.body}</p> */}
            </Link>
         ))}



         
      </div>
   )
}
