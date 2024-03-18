import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa"


const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 mx px-8 h-14 items-center justify-between'>
        <Link className='' href={'/'}> <FaBug /> </Link>
        <ul className='flex space-x-6'>
            {links.map( link => <Link key={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors' href={'/'}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar