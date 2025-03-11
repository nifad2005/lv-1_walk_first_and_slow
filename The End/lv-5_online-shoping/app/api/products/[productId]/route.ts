import ProductModel from "@/libs/config/models/productModel";
import { NextResponse } from "next/server";

export const GET = async (req:any) => {
  const _id = req.url.split('/')[req.url.split('/').length-1]
  const data = await ProductModel.findById(_id)
  // console.log(data)
  return NextResponse.json(data);

}
export const DELETE = async (req:any) => {
  const _id = req.url.split('/')[req.url.split('/').length-1]
  console.log(_id)
  const data = await ProductModel.findOneAndDelete(_id)
  console.log("Deleted")
  return NextResponse.json({successful:true});

}

