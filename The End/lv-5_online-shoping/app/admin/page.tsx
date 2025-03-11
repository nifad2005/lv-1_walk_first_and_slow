"use client";
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = async (e:any) => {
    const file = e.target.files?.[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload =()=>{
      const base64Image = reader.result as string;
      setImage(base64Image)
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
   
  }
  console.log(image)
  const handleSubmit = async () => {  
    setLoading(true)
    const data = {
      name,
      description,
      image,
      price
    }
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setName('')
    setDescription('')
    setImage('')
    setPrice('')
    setLoading(false)
  }
  
  return (
    <div className='p-10'>
      <div>
        <Link href={'/admin/allProducts'} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300'> 
            Go to All Product page
        </Link>
      </div>
      <div className='flex mx-auto flex-col space-y-4 w-1/2'>
        <input 
          type="text" 
          className='w-full h-8 p-2 border border-gray-300 rounded' 
          placeholder='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          className='w-full h-8 p-2 border border-gray-300 rounded' 
          placeholder='Description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="text" 
          className='w-full h-8 p-2 border border-gray-300 rounded' 
          placeholder='Price' 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <input 
          type="file" 
          accept="image/*"
          className='w-full h-12 p-2 border border-gray-300 rounded' 
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>
      
    </div>
  )
}

export default page
