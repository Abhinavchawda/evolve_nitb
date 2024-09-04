import React from 'react'
import Header from './Header'

const Domain = () => {
  return (
    <div id='domains'>
      <div className='domain min-h-[100vh] text-white overflow-hidden mb-16'>
        <div>
          <Header title="Our Domains"></Header>
        </div>

        <div className='mt-16 pt-10 flex justify-center items-center gap-7 flex-col sm:flex-row md:w-[90vw] lg:w-[70vw] mx-auto'>
          <div className='h-[70vh] w-4/5 md:w-1/3 flex justify-center items-center text-center relative hover:scale-105 transition-transform duration-300 ease-in-out rounded-sm'>
            <img src='/domains_photo/cycle.jpg' className='h-[500px] rounded-lg'></img>
            <div className='p-3 absolute  my-auto text-xl rounded-xl bg-black bg-opacity-60 w-3/5 sm:w-4/5'>
              ELECTRIC VEHICLE AND INTEGRATED ECOSYSTEM
            </div>
          </div>
          <div className='h-[70vh] w-4/5 md:w-1/3 flex justify-center items-center text-center relative hover:scale-105 transition-transform duration-300 ease-in-out rounded-sm'>
            <img src='/domains_photo/it.jpg' className='h-[500px] rounded-lg'></img>
            <div className='p-3 z-10 absolute my-auto text-xl rounded-xl bg-black bg-opacity-60 w-3/5 sm:w-4/5'>
              SOFTWARE DEVELOPMET, AI AND MACHINE LEARNING
            </div>
          </div>
          <div className='h-[70vh] w-4/5 md:w-1/3 flex justify-center items-center text-center relative hover:scale-105 transition-transform duration-300 ease-in-out rounded-sm'>
            <img src='/domains_photo/robotics.jpg' className='h-[500px] rounded-lg'></img>
            <div className='p-3 absolute  my-auto text-xl rounded-xl bg-black bg-opacity-60 w-3/5 sm:w-4/5'>
              ROBOTICS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domain
