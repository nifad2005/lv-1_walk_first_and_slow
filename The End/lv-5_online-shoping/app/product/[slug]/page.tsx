"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

function page(params:any) {
  
  const pathName = usePathname()
  const [product,setProduct] = useState<any>()
  const slug = pathName.split("/")[pathName.split("/").
  length-1]
  console.log("Slug :",slug)
  useEffect(() => {
    console.log("Hellow")
    const fetchProduct = async () => {
      
      const res = await fetch(`/api/products/${slug}`)
      const data = await res.json()
      console.log(data)
      setProduct(data)
    }
    fetchProduct()
  },[])
  if (!product) {
    return <div className="text-center mt-10">Loading...</div>
  }

  const handlePayment = async () => {
    const res = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount:1000
      })
    })
    const data = await res.json()
    console.log(data)
    if(data.GatewayPageURL){
      window.location.href = data.GatewayPageURL
    }else{
      console.log('Payment failed')
    }
  }
  return (
    <div className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-lg">
      <Image className="w-96 object-cover mb-4" height={100} width={100} src={product.image} alt={product.name} />
      <div className='flex justify-between'>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
        </div>
        <div className=' relative right-0 '>
          <button onClick={handlePayment} className="bg-blue-500  text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default page
