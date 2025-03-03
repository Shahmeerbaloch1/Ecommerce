import React from 'react'
import logo from "../IMG/logo_claue_1.png"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  let navigate = useNavigate()
  return (
    <div className='w-full h-[40vh] bg-pink-50 flex gap-28 px-60 py-16'>
      <div className=' flex flex-col justify-center  text-slate-400 gap-7'>
       <img onClick={() => navigate("/") } src={logo} alt="" className='w-[50%] cursor-pointer'/>
       <p>184 Main Rd E, St Albans <br />
       VIC 3021, Australia</p>
       <p>contact@company.com</p>
       <p>+001 2233 456</p>
      </div>
      <div className=' flex flex-col justify-center  text-slate-400 gap-3' >
        <h1 className='text-lg text-black font-semibold'>Categories</h1>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Men</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Women</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Shoes</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Accessories</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Denim</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Dress</p>
      </div>
      <div className=' flex flex-col justify-center  text-slate-400 gap-3' >
        <h1 className='text-lg text-black font-semibold'>Information</h1>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>About us</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Contact us</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Terms & Condition</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Return & Exchange</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Shipping & Dellivery</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Privacy & Policy</p>
      </div>
      <div className=' flex flex-col justify-center  text-slate-400 gap-3' >
        <h1 className='text-lg text-black font-semibold'>Quick Links</h1>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Store Location</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>My Account</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Accessories</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Order Tracking</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>Size Guide</p>
        <p className='hover:translate-x-3 duration-[0.5s] cursor-pointer'>FAQs</p>
      </div>
      <div className=' flex flex-col justify-center  text-slate-400 gap-3' >
      <h1 className='text-lg text-black font-semibold '>Newsletter</h1>
      <p className='my-4'>Subscribe to our newsletter and get <br />10% off your first purchase</p>
      <div className=' border border-black my-4 rounded-full w-[303px] py-[3px] '>
      <input type="text" placeholder='Your Email Address' className='p-3   bg-transparent outline-none' />
      <button className='bg-black p-3 rounded-full text-white font-semibold'>Subscribe</button></div>
      </div>
    </div>
  )
}

export default Footer
