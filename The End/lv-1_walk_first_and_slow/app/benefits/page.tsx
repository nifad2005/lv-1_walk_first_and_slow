/**
 * BenefitsPage component
 *
 * This is a functional React component that renders the Benefits page.
 *
 * @returns {JSX.Element} The rendered Benefits page component.
 */
import React from 'react';

const BenefitsPage: React.FC = () => {
  return (
    <>
    <head>
      <title>Benefits of Walking.</title>
    </head>
    <main>
       <div className="h-[450px] W-[100%] text-white bg-slate-900 flex justify-center items-center "> 
      <h1 className="text-6xl font-semibold tracking-wider text-white font-mono">Benefits of<span className="text-orange-400"> Walking</span>.</h1>
    </div>
    <div className='py-12 md:w-[80%] w-full  mx-auto'>
      <div className=' flex-col '>
        <h2 className='text-3xl font-semibold'>Physical Health Benefits:</h2>
        <div className='px-4 flex-col py-4'>

        <p><span className='font-semibold'>Heart Health:</span> <span className='text-gray-400'>Reduces the risk of heart disease and stroke.</span></p>
        <p><span className='font-semibold'>Weight Management:</span> <span className='text-gray-400'>Helps burn calories and maintain a healthy weight.</span></p>
        <p><span className='font-semibold'>Improved Mobility:</span> <span className='text-gray-400'>Strengthens muscles and joints, reducing the risk of arthritis.</span></p>
        </div>
      </div>
      <div className='flex-col py-4'>
        <h2 className='text-3xl font-semibold'>Mental Health Benefits:</h2>
        <div className='px-4 flex-col py-4'>
          <p><span className='font-semibold'>Stress Reduction:</span> <span className='text-gray-400'>Walking releases endorphins, improving mood and reducing anxiety.</span></p>
          <p><span className='font-semibold'>Enhanced Creativity:</span> <span className='text-gray-400'>Boosts problem-solving skills and creativity.</span></p>
          <p><span className='font-semibold'>Better Sleep:</span> <span className='text-gray-400'>Promotes restful sleep through physical exertion.</span></p>
        </div>
      </div>
      <div className='flex-col py-4'>
        <h2 className='text-3xl font-semibold'>Social and Environmental Benefits:</h2>
        <div className='px-4 flex-col py-4'>
          <p><span className='font-semibold'>Community Bonding:</span> <span className='text-gray-400'>Walking groups create stronger community ties.</span></p>
          <p><span className='font-semibold'>Eco-friendly:</span> <span className='text-gray-400'>Reduces reliance on vehicles, decreasing pollution.</span></p>
        </div>
      </div>
    </div>
    </main>
    </>
  );
};


export default BenefitsPage;