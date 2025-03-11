import connectDB from "@/libs/config/db";
import ProductModel from "@/libs/config/models/productModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try{
    await connectDB()
    const data = await ProductModel.find()
    return NextResponse.json(data)

  }catch(err){
    console.log(err)
    return NextResponse.json({ message: "Error" });
  }
}