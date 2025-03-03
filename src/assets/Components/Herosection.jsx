import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import logo from "../IMG/logo_claue_1.png"
import {  useNavigate } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Notification } from './Notification';
const Herosection = () => {
   let navigate = useNavigate()
   
   
   
  return (
    <div className='flex justify-between px-60 py-5 my-7'>
      <div>
        <img onClick={() => navigate("/") } className='w-[50%] cursor-pointer' src={logo} alt="" />
      </div>
      <div className='flex'> 
        <div>
        <h1 className='text-xl font-semibold'>Call Us: +842437955813</h1>
        <p className='text-slate-400'>From 8:00 to 17:00 (Mon-Sun) Free by Viet Nam</p></div>
        <div className='flex items-center justify-center gap-6'>
            <i className='text-3xl'><CiHeart /> </i>
           <i className=' absolute bottom-[770px] right-60'><Notification/></i>
        </div>
      </div>
    </div>
  )
}

export default Herosection
