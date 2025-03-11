import React, { use, useEffect, useState } from 'react'

function Notification({message,type}:{
  message:string,
  type:string
}) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
    setShow(true)
    }
    ,100)

    setTimeout(() => {
      setShow(false)
    },3000)
  },[])
  const [countWidth, setCountWidth] = useState(false)
  console.log(countWidth)
  useEffect(()=>{
   setTimeout(() => {
    setCountWidth(true)
   },3000)
  })
  return (
    <div className={`w-24 absolute bottom-2 right-2  text-white py-1 text-center ring-blue-300 ring-2 rounded ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}  transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      {message}
      <div className='w-full h-1 bg-white'>
        <div className={`h-full w-[100%] bg-blue-400 transition-all duration-75 ${countWidth?"w-[0%]":null} `}></div>
      </div>
    </div>
  )
}

export default Notification
