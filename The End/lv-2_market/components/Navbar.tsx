"use client"
import { useSession } from 'next-auth/react';
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
  const {data:session} = useSession()
  console.log(session)
  return (
    <nav className= 'w-full  relative bg-slate-200 '>
      <div className='px-10'>
        
        <ul className='flex justify-between items-center space-x-52'>
        <Link href={'/'}><h1 className='text-3xl py-2 '> nMarket</h1></Link>
        {

        }

        <Link href={'/'} className='text-xl hidden md:inline-block'>Home</Link>
        {session?
          <div className='flex gap-x-2'>
            <Link href={'/cart'} className='text-xl hidden md:inline-block'>Cart</Link>
            <Link href={'/cart'} className='text-xl hidden md:inline-block'>Profie</Link>
          </div>:
          <div className='flex gap-x-2'>
            <Link href={'/register'} className='text-xl hidden md:inline-block'>Register</Link>
            <Link href={'/login'} className='text-xl hidden md:inline-block'>Login</Link>
          </div>


        }

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
