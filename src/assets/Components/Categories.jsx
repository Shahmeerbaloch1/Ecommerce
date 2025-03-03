import React from 'react'
import { catagories } from '../index'
const Categories = () => {
  return (
    <div className='flex items-center gap-6 justify-between px-60'>
      {catagories.map((item,index)=>(
         <div key={index}  >
         <div className='relative  '>
          <img  src = {item.Img} alt="" />
         <h1 className='absolute left-20 top-9 text-white text-xl font-bold'>{item.title}</h1>
         </div> 
      </div>
      ))}
     </div>
  )
}

export default Categories
