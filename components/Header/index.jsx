"use server"
import React from 'react'
import Navlink from '../Navlink'
import axios from "axios"
import { getCurrentDate, getNextWeekDate, getParasha } from '@/helpers'

const linksList = [
   { href: '/', text: 'Home' },
   { href: '/about', text: 'About' },
   { href: '/admin/dashboard', text: 'Dashboard' },
   { href: '/posts', text: 'Posts' },
   { href: '/airbnb', text: 'Airbnb' },
   { href: '/new-post', text: 'New vort' },
]

export default async function Header() {
  // קבלת פרשה
       const response = await axios.get(`https://www.hebcal.com/hebcal?cfg=json&s=on&start=${getCurrentDate()}&end=${getNextWeekDate()}`)
       const parasha = getParasha(response.data)
       console.log(parasha);







   return (
      <header className='h-[80px] bg-slate-400 flex gap-4 items-center py-5'>
         {linksList.map((link) => (
            <Navlink key={link.href} href={link.href}>{link.text}</Navlink>
         ))}
         <h2>{parasha}</h2>
      </header>
   )
}
