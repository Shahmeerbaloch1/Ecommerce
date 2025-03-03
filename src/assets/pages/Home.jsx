import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import Product from '../Components/Product'
import Slider from '../Components/Slider'
import Icon from '../Components/Icon'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Banner />
      <Categories />
      <Product />
      <Slider />
      <Icon />
    </div>
  )
}

export default Home
