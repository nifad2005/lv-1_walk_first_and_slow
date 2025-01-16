import React from 'react'

function page({params}:any) {
  const {productId} = params;
  return (
    <div>
      <p>Product ID: {productId}</p> 
    </div>
  )
}

export default page
