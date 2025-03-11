"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  
  return (
    <div className='w-full h-screen flex md:w-[85%] gap-4 justify-center items-center  mx-auto'>
      <h1>No product selected</h1>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to home
        </button>
      </Link>
    </div>
  )
}

export default page
