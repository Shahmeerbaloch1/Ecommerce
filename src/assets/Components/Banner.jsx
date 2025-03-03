import React from 'react'
import banner from '../IMG/firstbanner.jpeg'
import banner2 from '../IMG/secondbanner.jpeg'
const Banner = () => {
  return (
    <div className='w-full h-[75vh] flex px-60 gap-9'>
      <div className='w-1/4 h-[70vh] '>
      <h1 className='bg-cyan-500 p-5 text-white font-bold text-[18px]'>DEPARTMENTS</h1>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>New Arrivals</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Value of Day</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Accessories</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Top 100 Offers</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Look Back</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Computer</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Warches & Eyewears</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>TV & Auddio</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Bags & Luggage</p>
        <p className='p-4 border text-slate-600 hover:text-orange-400 duration-[0.5s] cursor-pointer'>Jewelry</p>
      </div>
      <div className='w-[75%] h-[70vh]  flex flex-col gap-9'>
        <input type="text" placeholder='Search intire state here....' className='w-[100%] p-5  outline-none border border-slate-400 rounded-xl' />
        <div className='flex h-[100%] gap-9'>
        <div className='relative'>
            <img src={banner} alt="" className='h-full' />
            <div className='absolute left-12 top-20'>
            <h1 className='text-white font-bold text-lg '>Beautiful 2023</h1>
            <h1 className='text-white font-bold text-5xl '>New Arrivals</h1>
            <button className=' border-4 text-white font-medium border-e-white p-2 my-4  px-9 rounded-full hover:bg-black hover:border-slate-950 duration-[0.9s] ' >Discover now</button></div> </div>
            <div className='relative'>
            <img src={banner2} alt="" className='h-full' />
            <div className='absolute right-20 bottom-12 rounded-xl bg-[rgba(255,255,255,0.50)] flex justify-center items-center flex-col w-[170px] h-[130px] p-3'>
            <h1 className='text-center text-black font-bold text-lg'>Top View In This Week</h1>
            <h1 className='font-bold text-2xl'>TRENDING</h1></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
