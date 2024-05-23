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
   const getAllPosts = async () => {
     try {
       const urlPosts = "https://vortly-db.onrender.com/api/posts/";
       const requestOptions = {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImlzQWRtaW4iOjEsInVzZXJuYW1lIjoiYV9jb2hlbiIsInBhc3N3b3JkIjoiYWMxOTg1IiwiaWF0IjoxNzE2MzYyOTY1LCJleHAiOjE3MTYzNzQ5NjV9.pyM7woorPxi2tLqsp19i_qMR7xEzpzSZy0UNmPiPICo"
         },
       };
       const response = await fetch(urlPosts, requestOptions);
       if (!response.ok) {
         if (response.status == 401) {
           console.log("failed to fetch posts");
         }
         console.log("Network response was not ok!")
         throw new Error(`Network response was not ok! status: ${response.status}`);
       }
       const data = await response.json();
       return data
     } catch (error) {
       console.error("Error fetching posts:", error);
     }
   };
   const posts =  await getAllPosts();
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
