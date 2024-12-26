import React from 'react'

function page() {
  return (
    <main>
      <div className="h-[450px] W-[100%] text-white bg-slate-900 flex justify-center items-center "> 
      <h1 className="text-6xl font-semibold tracking-wider text-white font-mono">Stroy of<span className="text-orange-400"> Walking</span>.</h1>
    </div>
    <div className="py-12 md:w-[80%] w-full mx-auto text-white ">
      <h2 className="text-4xl font-semibold mb-4">Inspiration from Walkers:</h2>
      <div className='px-4 py-8'>

      <p className="mb-4 text-slate-300 ">
      <strong className='text-xl text-slate-200'>John's Journey:</strong> John started walking 15 minutes daily to improve his mental health and eventually lost 20kg, transforming his lifestyle.
      </p>
      <p className="mb-4 text-slate-300">
      <strong className='text-xl text-slate-200'>Group Stories:</strong> A group of seniors in Japan walks together every morning, fostering health and community connection.
      </p>
      </div>
    </div>
      
    </main>
  )
}

export default page
