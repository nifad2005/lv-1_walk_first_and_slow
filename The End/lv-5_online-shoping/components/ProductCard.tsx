"use client"
import { CartContext } from "@/app/CartContext";
import Link from "next/link";
import React, { useContext } from "react";

type Product = {
  _id: string
  name: string;
  description: string;
  price: number;
  image: string;
}
const ProductCard = ({ product }:{product:Product}) => {
  const {cart,addToCart}:any = useContext(CartContext)
  const handleAddTocart = () => {
    cart.find((item:any)=>item === product)===undefined ? addToCart(product) : alert('Item already in cart')
  }
  console.log(product._id)
  return (
    <Link href={`/product/${product._id}`} className="bg-white w-[500px] rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600">${product.price}</span>
        <button
        onClick={handleAddTocart} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
        
        <Link href={`/product/${product._id}`} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Buy now</Link>
      </div>
    </Link>
  );
};

export default ProductCard;
