"use client";
import React, { useState } from 'react'


function page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = ()=>{

  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col h-[400px] w-[400px] bg-slate-200 rounded-lg'>
        <h1 className='text-3xl text-center py-2'>Register</h1>
        <form className='flex flex-col gap-y-2 p-4' >
          <input type='text' placeholder='Name' className='p-2 rounded-lg'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input type='email' placeholder='Email' className='p-2 rounded-lg'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type='password' placeholder='Password' className='p-2 rounded-lg'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>Register</button>
        </form>
      </div>
      
    </div>
  )
}

export default page
