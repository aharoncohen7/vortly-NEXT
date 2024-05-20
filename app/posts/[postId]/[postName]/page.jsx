import React from 'react'

export default function Page({ params }) {

   return (
     <div>
       <h1>Post {params.postId} { params.postName}</h1>
    </div>
  )
}
