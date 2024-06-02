"use client"

import { useRouter } from "next/navigation"

export default function SearchPosts() {
   const router = useRouter()
   
   const handleSearch = e => {
      if (e.target.value) {
         
         router.push(`/posts/result?search=${e.target.value}`)
      } else {
         router.push('/posts')
      }
   }

   return (
      <div className="p-4 flex justify-center">
         <input type="text" onChange={handleSearch} placeholder="search" className="rounded-md p-2" />
      </div>
   )
}
