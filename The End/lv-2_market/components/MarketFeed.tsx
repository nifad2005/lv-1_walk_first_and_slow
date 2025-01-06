import React from 'react'
import ProductCard from './ProductCard'
import { PRODUCT_DATA, ProductSchema } from '@/utils/data';

function MarketFeed() {
  const products:ProductSchema = PRODUCT_DATA;
  return (
    <div className='min-h-screen w-full gap-x-8 px-2 py-10 justify-center bg-slate-400 mx-auto md:w-[70%]  flex flex-wrap'>
      {products.map((product) => (
        <ProductCard key={product.id}  product={product}/>
      ))}
    </div>
  )
}

export default MarketFeed
