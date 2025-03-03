import React from 'react'
import { assets, products1 } from '..'
import { useNavigate } from 'react-router-dom'

const Card1 = () => {
  let navigate = useNavigate()
  return (
    <>
       <div className='w-full px-60 h-[40vh] my-12 flex'>
    <div className='w-1/4 relative'>
    <img src={assets[1]} alt="" className='w-[80%] ' />
    <div className='absolute left-9 top-60'>
    <h2 className='text-[19px] font-bold text-gray-900'>SUMMER SALE</h2>
    <h1 className='text-4xl font-bold text-gray-900'>UP TO 70%</h1>
    <button className=' border-4 font-medium border-white bg-white text-black py-1 my-4  px-9 rounded-full duration-[0.9s] hover:text-white  hover:bg-black hover:border-slate-950'>Shop Now</button>
    </div>
    </div>
        <div className='w-3/4 flex gap-12'>
        {products1.slice(4,8).map((items,index)=>(
            <div     key={index} className='cursor-pointer' onClick={() => navigate(`/detail/${items.id}`) }>
             <div onClick={()=>scrollTo(0,0)}>
                <img src={items.Img} alt="" />
                <h1 className='font-medium text-gray-700 cursor-pointer hover:text-orange-200 duration-[0.9s]'>{items.title}</h1>
                <p className='text-gray-500'>{items.price}</p>
             </div>
            </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Card1
