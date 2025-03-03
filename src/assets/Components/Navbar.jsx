import React from 'react'
import {Title} from '../index';
import  { Link, Links, useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { CgProfile } from 'react-icons/cg';
import ButtonDefault from './Botton';




const Navbar = () => {
  let {openSignIn} = useClerk()
   let {user} = useUser()
   let navigate = useNavigate()  
  return (
    <div className='sticky top-0 left-0 z-10  bg-[#F6F6F8] flex justify-between h-20 px-20 items-center'>
      
      <ul className='flex gap-6'>
            {Title.map((item,index)=>(
                <Link key={index} to={item.path} className='font-semibold text-gray-800'>
                    {item.title} 
                </Link>
            ))}
      </ul>
      {
        user ? (
<div className='flex text-sm text-gray-600 gap-4 items-center'>
  <UserButton/>
  <p className='text-lg font-medium'>{user.firstName}</p>
</div>
        ):
        (    <div className='flex gap-4 text-xl justify-center items-center cursor-pointer font-semibold'>
      <CgProfile className='text-2xl cursor-pointer' onClick={openSignIn} />
      <span>Login</span> 
       <ButtonDefault />
      </div>
    )
      }
    
  </div>

  )
}

export default Navbar
