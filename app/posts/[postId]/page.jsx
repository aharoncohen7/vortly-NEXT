
import React from 'react'
import { notFound } from 'next/navigation'
import MyRating from '@/components/MyRating'
import { headers } from 'next/headers'
import HTMLContent from '@/components/HTMLContent'
import { axiosReqToRender } from '@/helpers'
import TagList from '@/components/TagList'
import { Button } from '@mui/material';
import Navlink from '@/components/Navlink'
import Image from 'next/image'


// מיצר דפים סטטיים
export const generateStaticParams = async () => {
   // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
   // const posts = await res.json();

// ?
  const posts = await axiosReqToRender({method: 'GET',body:{}, url:`/posts` })
   return posts.filter((post, i) => i <= 500).map((post) => ({ postId: String(post.id) }));
}

export default async function Post({ params }) {
   // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
   // const post = await res.json()

   // קבלת פוסטים
   const item = await axiosReqToRender({method: 'GET',body:{}, url:`posts/${params.postId}` })
   console.log(item.author)
  

   return (
      <div className='p-8 flex justify-center gap-4 flex-wrap'>
            <div className="relative flex items-center justify-center px-6 py-24 overflow-hidden bg-white isolate sm:py-12 lg:overflow-visible lg:px-24">
          {item.subtopic && <div className="flex items-center flex-shrink-0">
            {/* <img
              className="w-auto h-20 hidden sm:ml-6 sm:block"
              src={`https://www.breslev.org/wp-content/uploads/2019/07/${item.subtopic.replace(" ", "-")}.jpg`}
              alt="הפרשה"
            /> */}
          </div>}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[44rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>

{/* //lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 */}
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
          <div className="grid max-w-2xl grid-cols-1 mx-auto text-right gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-38">
                <div className="lg:max-w-lg mr-6 ">
                
                <Navlink href={`/posts/parasha?search=${item.subtopic}`}>
                  <button className="ml-20   leading-7 text-indigo-800 font-bold text-xl">
                    {item.subtopic ? item.subtopic : "שם הפרשה"}
                  </button>
                  </Navlink>
                  <h2   className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.title}</h2>
                  <Navlink href={item.subtopic ?? `/posts/author?search=${item.userId}`}>
                  <button  className="mt-6 text-xl font-bold leading-8 text-indigo-800"> {item.author + " :מחבר"}  </button></Navlink>
                </div>
              </div>
             
            </div>
            <div className="z-10 -ml-8 -mt-12 p-12 lg:sticky lg:top-12 lg:col-start-2  lg:row-start-1 lg:overflow-hidden">
              {item.subtopic &&
              //  <img
              //   className=" mb-5
              //   w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[26rem]"
              //   src={`https://www.breslev.org/wp-content/uploads/2019/07/${item.subtopic.replace(" ", "-")}.jpg`}
              //   alt="תמונת הפרשה"
              // />
              <Image src={`https://www.breslev.org/wp-content/uploads/2019/07/${item.subtopic.replace(" ", "-")}.jpg`} alt={item.subtopic} width={600} height={400} />} 
              
             <span className='hidden lg:col-start-2 lg:row-start-2  lg:block mr-10  lg:sticky mb-5 
                w-[48rem] rounded-xl shadow-xl sm:w-[26rem]
                '>
                {/* <ParashaNav /> */}
                </span>
            </div>
            {/* <span className='hidden lg:col-start-2 lg:row-start-2  lg:block mr-10  lg:sticky mb-5 
                w-[48rem] rounded-xl shadow-xl sm:w-[26rem]
                '>
                <ParashaNav /></span> */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4 -mt-20">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    {/* <p className="mt-8">{item.id}</p> */}
                  </ul>
                  <div className="mt-8">
                    {/* <div style={{ wordWrap: "break-word" }} className=' whitespace-normal tracking-widest' dangerouslySetInnerHTML={{ __html: item.body }} /> */}
                   <div style={{ wordWrap: "break-word" }} className=' whitespace-normal tracking-widest'><HTMLContent  content={item.body} /></div>
                  
                  </div>
                </div>
                
                <div>
                  <MyRating item={item} />
                </div>

                <div>
                  {/* {item.tags !== null && <TagList postTags={item.tags} />} */}
                </div>

                {/* כפתורי עריכה */}
                <div className="EditButtons">
                  <label htmlFor="edit-delete">
                    {/* <Button variant="contained" onClick={() => navigate(`/`)}>חזור</Button> */}
                    {/* {message && <p style={{ color: 'red' }}>{message}</p>} */}
                    {/* {adminMode &&<> */}
                    
                    {/* <Button value="delete" onClick={deletePost} variant="contained">🗑️</Button> */}
                    {/* <Button variant="contained" onClick={() => navigate(`/edit/${item.id}`)}>ערוך מאמר</Button> */}
                    {/* </>} */}
                   
                  </label>
                </div>
                
                {/* <div className="hidden sm:ml-6 sm:block" style={{ top: '60px', right: '0px' }}><ParashaNav /></div> */}
              </div>
            </div>
          </div>
        </div>


      
      </div>
   )
}
