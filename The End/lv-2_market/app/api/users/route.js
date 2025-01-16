
import { NextResponse } from "next/server"
import ConnectDb from "../../../libs/db.ts"

export const GET = async () => {
  console.log("ooo")
  await ConnectDb()
  console.log("GET method")
  return NextResponse.json({message:"GET method"}, {status:200})
}

