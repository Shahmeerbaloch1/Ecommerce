import React from 'react'
import { icons } from '../index'

const Icon = () => {
  return (
    <div className='flex w-full h-[120px] px-60 gap-16 my-16'>
      {icons.map((items , index)=>(
        <div key={index}  className='flex gap-6'>
          
          <items.icon  className='text-5xl' />
          <div>
            
            <h1 className='my-2 text-lg font-medium'>{items.h1}</h1>
            <p className='text-gray-600'>{items.p}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Icon
