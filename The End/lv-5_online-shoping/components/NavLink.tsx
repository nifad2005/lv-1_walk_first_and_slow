"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({data}:any) {
  const pathName = usePathname()
  return (
      <Link href={data.link} className={`flex text-2xl items-center space-x-2 hover:text-green-500 font-bold ${pathName === data.link ? 'text-green-500' : 'text-white'}`}>
        {data.icon}
      </Link>
  )
}

export default NavLink
