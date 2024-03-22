'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBug } from "react-icons/fa"
import classNames from 'classnames';



const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' }
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 mx px-8 h-14 items-center justify-between'>
      <Link className='' href={'/'}> <FaBug /> </Link>
      <ul className='flex space-x-6'>
        {links.map(link => <Link
          key={link.href}
          className={classNames({
            'text-zinc-900': link.href === currentPath,
            'text-zinc-500': link.href !== currentPath,
            'hover:text-zinc-800 transition-colors' : true,
          })}
          href={link.href}>{link.label}</Link>)}
      </ul>
    </nav>
  )
}

export default NavBar