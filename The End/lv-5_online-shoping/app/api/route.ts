import connectDB from "@/libs/config/db"
import ProductModel from "@/libs/config/models/productModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"




export const  POST = async (request:Request) => {
  const body = await request.json()
  console.log(body)
  try{
    await connectDB()
    await ProductModel.create({
      name: body.name,
      description: body.description,
      image: body.image,
      price: body.price
    })
    return  NextResponse.json({message: "Created"})
  }catch(err){
    console.log(err)
    return NextResponse.json({message: "Error"})
  }
}
export const  PUT = async (request:Request) => {
  const body = await request.json()
  console.log("Requesting for update")
  console.log(body._id)
  try{
    await connectDB()
    const result = await ProductModel.updateOne({
      _id: new mongoose.Types.ObjectId(body._id)
    }, {
      $set:{
        name: body.name,
        description: body.description,
        image: body.image,
        price: body.price
      }
    })
    if (result.modifiedCount > 0) {
      console.log("Updated successfully")
      return NextResponse.json({ message: "Updated successfully" });
    } else {
      console.log("No changes made or product not found")
      return NextResponse.json({ message: "No changes made or product not found" });
    }
 
  }catch(err){
    console.log(err)
    return NextResponse.json({message: "Error"})
  }
}
