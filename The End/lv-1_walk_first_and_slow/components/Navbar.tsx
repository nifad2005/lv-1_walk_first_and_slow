"use client"
import { handleSound } from '@/utils/playsound'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [playsound,setPlaysound]= useState<boolean>(true)
  return (
    <nav className='w-full h-12 border-b px-4 flex items-center justify-between backdrop-blur-md  '>
      

      <div onClick={playsound?handleSound:undefined}>
        <Link href={'/'}>
          Home
        </Link>
      </div>
      
      <div onClick={playsound?handleSound:undefined}>
        {/* <Link href={'/about'}> */}
          About
        {/* </Link>   */}
      </div>
      <div onClick={playsound?handleSound:undefined}>
        <Link href={'/details'}>
          Details
        </Link>
      </div>
      <button type='button' onClick={()=>setPlaysound(!playsound)}>{playsound?"Mute":"Unmute"}</button>
    </nav>
  )
}

export default Navbar
