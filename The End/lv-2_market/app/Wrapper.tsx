"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

function Wrapper({children}:{children:React.ReactNode}) {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}

export default Wrapper
