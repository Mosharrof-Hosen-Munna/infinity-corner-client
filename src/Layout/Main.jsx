import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Navigation from '../Pages/Shared/Navigation/Navigation'

const Main = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Main