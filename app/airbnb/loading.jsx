import React from 'react'

export default function Loading() {

   return (
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse'>
         {Array(10).fill('k').map((j, i) => <div key={i} className='h-72 rounded bg-gray-200 '></div>)}
      </section>
   )
}
