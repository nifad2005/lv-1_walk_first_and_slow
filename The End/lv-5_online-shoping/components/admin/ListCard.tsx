import { Product } from '@/type/product'
import Link from 'next/link'
import React, { useState } from 'react'

function ListCard({product,handleReFetch}:{
  product:Product
  handleReFetch:any
}) {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async () =>{
    setIsDeleting(true)
    const res = await fetch(`/api/products/${product._id}`,{
      method:'DELETE'
    })
    const resData = await res.json()
    console.log(resData)
    handleReFetch()
    setIsDeleting(false)
  }
  return (
    <div>
      <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold">{product.price}</p>
        </div>
        <div className="flex space-x-2">
          <Link
          href={`/admin/editProduct/${product._id}`}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Edit</Link>
          <button 
            onClick={handleDelete} 
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">{isDeleting?"deleting...":"Delete"}</button>
        </div>
      </div>
    </div>
  )
}

export default ListCard
