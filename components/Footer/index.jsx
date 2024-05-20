import React from 'react'
import Navlink from '../Navlink'

const linksList = [
   { href: '/', text: 'Home' },
   { href: '/about', text: 'About' },
   { href: '/admin/dashboard', text: 'Dashboard' },
   { href: '/posts', text: 'Posts' },
   { href: '/airbnb', text: 'Airbnb' },
]

export default function Footer() {

   return (
      <header className='vh-10 bg-pink-400 flex gap-4 items-center py-5'>
         {linksList.map((link) => (
            <Navlink key={link.href} href={link.href}>{link.text}</Navlink>
         ))}
      </header>
   )
}
