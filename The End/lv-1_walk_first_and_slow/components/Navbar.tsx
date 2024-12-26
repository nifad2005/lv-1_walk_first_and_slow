"use client"
import { handleSound } from '@/utils/playsound'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Navbar() {
  const [handleNav,setHandleNav] = useState(false)
  const pathname = usePathname()
  return (
    <nav className='w-full border-b  backdrop-blur-md px-10'>
      <ul onClick={handleSound} onChange={()=>setHandleNav(false)} className={`flex items-center gap-24 *:py-4 justify-around  className="hover:bg-orange-600 px-6 "`}>
        
        <li className='' onClick={()=>setHandleNav(false)}>
          <Link href={'/'} className={`hover:bg-orange-600 px-10 py-4 ${pathname==="/"?"bg-orange-500":null}`}>Home</Link>
        </li>
        <li className={`hidden md:block  `} onClick={()=>setHandleNav(false)}>
          <Link href={'/benefits'} className={`hover:bg-orange-600 px-10 py-4 ${pathname==="/benefits"?"bg-orange-500":null}`}>Benefits</Link>
        </li>
        <li className='hidden md:block' onClick={()=>setHandleNav(false)}>
          <Link href={'/storys'} className={`hover:bg-orange-600 px-10 py-4 ${pathname==="/storys"?"bg-orange-500":null}`}>Storys</Link>
        </li>
        <li className='hidden md:block' onClick={()=>setHandleNav(false)}>
          <Link href={'/start'} className={`hover:bg-orange-600 px-10 py-4 ${pathname==="/start"?"bg-orange-500":null}`}>How to start</Link>
        </li>
        <li onClick={()=>setHandleNav(true)}>
          <button  className= {`md:hidden visible hover:bg-orange-600 px-10 py-4 `}>Open</button>
        </li>
        
      </ul>
      {
        handleNav?(

        
      <ul className={` ${handleNav?"visible  w-full":"hidden"}  fixed flex-col md:hidden right-0 top-0 bg-slate-400 h-screen items-center  sm:w-[250px] *:py-4 *:px-4 *:cursor-pointer *:w-full `}>
        <li onClick={()=>setHandleNav(false)} className='hover:bg-slate-500'>
          <button className="w-full">Close</button>
        </li>
        <li className='hover:bg-slate-500'>
          <Link href={'/'} className="w-full">Home</Link>
        </li>
        <li className='hover:bg-slate-500 w-full'>
          <Link href={'/benefits'} className="">Benefits</Link>
        </li>
        <li className='hover:bg-slate-500'>
          <Link href={'/storys'} className="w-full">Storys</Link>
        </li>
        <li className='hover:bg-slate-500'>
          <Link href={'/start'} className="w-full">How to start</Link>
        </li>
      </ul>
      ):null}
    </nav>
  )
}

export default Navbar
