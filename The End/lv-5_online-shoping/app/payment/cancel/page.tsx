import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">You canceled payment</h1>
        <Link href={`/`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}

export default page
