import { PRODUCT_DATA, SingleProductSchema } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


function ProductCard({product}: {product:SingleProductSchema}) {
  
  return (
    // Product card of the website.
    <div className='h-[300px] w-[250px] shadow-md rounded-md overflow-hidden bg-white'>
      {/* // Image of this product. */}
      <div className='w-full h-1/2 '>
        <Image src={product.image} alt='Image of product' height={10} width={10} className='w-full h-full bg-cover'/>
      </div>
      {/* // Product details */}
      <div className='p-4'>
        <h1 className='text-xl font-semibold'>{product.title}</h1>
        <p className='text-xs text-gray-500 '>{product.description}</p>
        <p className=' font-semibold text-2xl text-orange-400 float-end'>${product.price}</p>
      </div>
      <div className='flex w-full gap-1 *:rounded-md '>
        <Link className='w-1/2 bg-slate-300 hover:bg-slate-400 active:bg-blue-600 text-back p-2 grid place-items-center'
         href={`/product/${product.id}` } passHref>
          <button >View details</button>
        </Link>
        <button className='w-1/2  bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white p-2'>Add to cart</button>  
        

      </div>
      
    </div>
  )
}

export default ProductCard
