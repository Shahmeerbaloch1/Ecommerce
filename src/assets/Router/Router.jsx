import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Elements from '../pages/Elements'
import Accessories from '../pages/Accessories'
import Buynow from '../pages/Buynow'
import Pages from '../pages/Pages'
import Cart from '../pages/Cart'
import Detail from '../Components/Detail'
import Admin from '../pages/Admin'
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/elements' element={<Elements />}/>
        <Route path='/accessories' element={<Accessories />}/>
        <Route path='/buynow' element={<Buynow />}/>
        <Route path='/pages' element={<Pages />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/detail/:id' element={<Detail />}  />
        <Route path='/admin' element={<Admin  />}/>
      </Routes>
    </div>
  )
}

export default Router
