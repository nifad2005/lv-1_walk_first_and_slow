import { NextResponse } from "next/server";


export const POST = async (req: any, res: any) => {
  const storeId = process.env.STORE_ID 
  const storePass = process.env.STORE_PASS
  const isLive = false
  const body = await req.json()
  const {amount} = body   

  const url = isLive ? `https://securepay.sslcommerz.com/gwprocess/v4/api.php` : `https://sandbox.sslcommerz.com/gwprocess/v4/api.php`;

  const paymentData = {
    store_id: storeId,
    store_passwd: storePass,
    total_amount: amount, 
    currency: 'BDT',
    tran_id: `TRANS_${Date.now()}`,
    success_url: 'http://localhost:3000/payment/success',
    fail_url: 'http://localhost:3000/payment/fail',
    cancel_url: 'http://localhost:3000/',
    cus_name: 'Nifad Uzzaman',
    cus_email: 'nifad@example.com',
    cus_phone: '01700000000',
    cus_add1: 'Dhaka, Bangladesh',
    cus_city: 'Dhaka',
    cus_country: 'Bangladesh',
    shipping_method: 'NO',
    product_name: 'Test Product',
    product_category: 'General',
    product_profile: 'general',
  };

  const formData = new URLSearchParams(paymentData  as any);
  console.log(paymentData)
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
    })
    const data = await response.json()
    return NextResponse.json(data)

  } catch (error) {
    console.log(error)
    return NextResponse.json(error)
  }
}