"use client"
import ListCard from '@/components/admin/ListCard'
import { Products } from '@/type/product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  const [products, setProducts] = useState<Products>([])
  const [reFetch, setReFetch] = useState<boolean>(false)
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products')
      const resData = await res.json()
      console.log(resData)
      setProducts(resData)
    }
    fetchProducts()
},[reFetch])
  const handleReFetch = () =>{
    setReFetch(!reFetch)
  }
  return (
    <div className='flex flex-col p-10'>

        <Link href={'/admin'} className="text-blue-500 hover:text-blue-700 underline mb-4 self-start">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Go to admin page
          </button>
        </Link>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        
        {products&&products.map(product => (
          <ListCard key={product._id} product={product} handleReFetch={handleReFetch}/>
        ))}
        
      </div>
    </div>
  )
}

export default page
