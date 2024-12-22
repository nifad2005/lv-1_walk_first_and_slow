"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const handleClick = ()=>{
    const audio = new Audio('/sounds/ting.mp3')
    audio.volume = 0.01
    audio.play()
  }
  return (
    <nav className='w-full h-12 border-b px-4 flex items-center justify-between backdrop-blur-md  '>
      
        <div onClick={handleClick}>Home</div>
      
      <div onClick={handleClick}>About</div>
      <div onClick={handleClick}>Details</div>
      
    </nav>
  )
}

export default Navbar
