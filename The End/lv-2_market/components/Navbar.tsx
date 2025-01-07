"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    // States for the website
  const [handleNav, setHandleNav] = useState(false);

  //Navigation links
  const navLinks =[
    {
      name:"Home",
      href:"/"
    },{
      name:"Cart",
      href:"/cart"
    }
  ]
  return (
    <nav className= 'w-full  relative bg-slate-200 '>
      <div className='px-10'>
        
        <ul className='flex justify-between items-center space-x-52'>
        <h1 className='text-3xl py-2 '> nMarket</h1>
          {navLinks.map((link)=>(
            <Link href={link.href} className='text-xl hidden md:inline-block' key={link.name}>
              <li >{link.name}</li>
            </Link>
          ))}
          <li className='md:hidden'>
            <button onClick={()=>setHandleNav(!handleNav)} className='text-2xl'>Menu</button>
          </li>
        </ul>

          
      </div>
      {handleNav&&<div className='flex bg-slate-300 flex-col h-screen w-full sm:w-[450px] absolute top-0 right-0 md:hidden'>
        <ul className='w-full flex flex-col  h-full gap-y-2 '>
          {navLinks.map((link)=>(
            <Link href={link.href} key={link.name+"2nd"} onClick={()=>setHandleNav(false)} className='w-full text-center bg-slate-200 hover:bg-slate-300 py-2 '>
              <li className='text-2xl '>{link.name}</li>
            </Link>
          ))}
        </ul>
      </div> 
      }
      
    </nav>
  )
}

export default Navbar
