"use client"
import ProductCard from '@/components/ProductCard';
import React, { useEffect, useState } from 'react'


interface Product {
  name: string
  description: string
  image: string
  price: number
}

function page() {
  const [data, setData] =useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products')
      const resData = await res.json()
      
      setData(resData)
      setLoading(false)
    }
    fetchProducts()
  },[])
  return (
    <div className='w-full h-full md:w-[85%]  mx-auto'>
       <div className="flex flex-wrap  gap-4 p-4">
        {loading &&(
        <div className='w-full h-full flex  items-center'>
          <h1 className='text-5xl  text-green-500'>Loading products..</h1>
        </div>)}
      {
        data.map((product:Product) => (
          <ProductCard key={product.image} product={product}/>
        ))
      }
    </div>
    </div>
  )
}

export default page
