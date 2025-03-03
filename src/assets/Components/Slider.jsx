import React from 'react'
import img from '../IMG/b1.jpg'
import img2 from '../IMG/b2.jpg'

const Slider = () => {
  return (
    <div className='w-full px-60 h-[40vh]  my-5 flex gap-9 justify-center items-center'>
      <div className='w-1/2 border h-full relative'>
      <img src={img} alt=""  className='w-full h-full'/>
      <div className='absolute top-36 left-52 flex flex-col justify-center items-center '> <h1 className='text-4xl font-bold text-white'>LOOKBOOK 2023</h1>
      <p className='text-xl font-semibold text-white'>MAKE LOVE THIS LOOK</p>
      </div>
      </div>
      <div className='w-1/2 border h-full relative'>
      <img src={img2} alt="" className='w-full h-full' />
      
      <div className='absolute top-36 left-52 flex flex-col justify-center items-center '>
        <p className='text-xl font-semibold text-white'>SUMMER SALE</p>
         <h1 className='text-5xl font-bold text-white'>UP TO  70%</h1>
      
      </div>
      </div>
    </div>
  )
}

export default Slider
