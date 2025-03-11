import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import NavLink from './NavLink';
function Navbar() {
  const navLinks = [
    {
     link: '/',
     title: 'Home',
     icon: <IoHomeOutline />
    },
    {
      link: '/products',
      title: 'Products',
      icon: <AiOutlineProduct />
    },
    {
      link:'/cart',
      title: 'Cart',
      icon: <FaShoppingCart/>
    }
  ]
  return (
    <nav className='w-full min-h-14 bg-slate-500 flex  justify-between items-center md:px-12'>
      <Link href={'/'}>
        <h1 className='text-4xl'>Nifad's shop</h1>
      </Link>
      <div>
        <ul className='flex space-x-12 '>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink data={link} />
            </li>
          ))}

        </ul>
      </div>
      <div>
       
      </div>
    </nav>
  )
}

export default Navbar
