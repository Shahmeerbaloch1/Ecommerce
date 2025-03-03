import React from 'react'
import { assets, products1 } from '../index'
import { Link, useNavigate } from 'react-router-dom'


const Card = () => {
  let navigate = useNavigate()
  return (
    <>
    <div className='w-full px-60 h-[40vh] my-12 flex'>
    <div className='w-1/4 relative'>
    <img src={assets[0]} alt="" className='w-[80%] ' />
    <div className='absolute left-9 top-60'>
    <h2 className='text-[19px] font-bold text-gray-900'>VIEW COLLECTIONS</h2>
    <h1 className='text-4xl font-bold text-gray-900'>LOOKBOOK</h1>
    <p className='text-gray-700'>your world of fashion in numbers</p>
    </div>
    </div>
        <div className='w-3/4 flex gap-12'>
        {products1.slice(0,4).map((items,index)=>(
          <Link
          
          onClick={()=>scrollTo(0,0)}
            to={`/detail/${items.id}`}
            state={{ items }}
            key={index}
            style={{ textDecoration: 'none' }}
          >
            <div>
             <div>
                <img src={items.Img} alt="" />
                <h1 className='font-medium text-gray-700 cursor-pointer hover:text-orange-200 duration-[0.9s]'>{items.title}</h1>
                <p className='text-gray-500'>{items.price}</p>
             </div>
            </div>
            </Link>
        ))}
      </div>
      </div>
    </>
  )
}

export default Card
