import React from 'react'

function Footer() {
  return (
    <footer className='w-full flex flex-col gap-8 border-t backdrop-blur-md px-10 py-6 text-center text-3xl font-medium tracking-wide font-serif mt-12 mb-8'>
        <div>
          If you are not <span className='text-orange-500'>walking</span> you are not <span className='text-orange-500'>growing.</span>
        </div>
        <div className='text-xl tracking-widest text-slate-300/20'>
          Level-2
        </div>
    </footer>
  )
}

export default Footer
