"use client"
import Notification from "@/components/Notification";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/type/product";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
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
  
  const handlePayment = async () => {
    console.log('clicked')
    const res = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount: 1000})
    })
    const data = await res.json()
    
    if(data.GatewayPageURL){
      window.location.href = data.GatewayPageURL
    }else{
      console.log('Payment failed')
    }
    console.log(data)
  }

  return (
   <div >
   
    <div className="md:mx-24 mx-4 flex flex-col gap-4 bg-slate-500 border-y-2  p-4">

      <h2 className="text-3xl ">Products list</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {
      products.filter((product) => (
        
      ))} */}
      {data.length > 0 &&(
        data.slice(0,6).map((product:Product) => (
          <ProductCard key={product?._id} product={product}/>
        ))
      )

      }
      </div>
      <Link href={'/products'} className="text-lg underline text-slate-700 hover:text-slate-900">View all products</Link>
    </div>
    <button
    onClick={handlePayment}
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Pay now
    </button>
    {/* <Notification type={"rejected"} message={"Done"}/> */}
   </div>
  );
}

