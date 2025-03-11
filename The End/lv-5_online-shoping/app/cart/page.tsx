"use client"
import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

function page() {
  const {cart}:any = useContext(CartContext)
  console.log(cart)
  return (
    <div className='flex flex-col items-center space-y-4 h-screen justify-center' >
      {cart.length !==0 ?cart.map((item:any, index:number) => (
        <div  key={index}>
          <h1>{item.name}</h1>
          
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      )):<h1 className='text-4xl'>Cart is empty</h1>}
    </div>
  )
}

export default page
