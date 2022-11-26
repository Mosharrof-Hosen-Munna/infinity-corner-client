import React, { useEffect } from 'react'
import Banner from './Banner/Banner'
import Benefit from './Benifit/Benefit'
import Categories from './Categories/Categories'
import FeaturedProduct from './FeaturedProduct/FeaturedProduct'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title= 'InfinityCorner | A resale listing platform'
  }, [])
  return (
    <>
    <Banner/>
    <Categories/>
    <FeaturedProduct/>
    <Benefit/>
    </>
  )
}

export default Home