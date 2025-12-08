import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = ({token}) => {
  return (
    <div>
      <Navbar token={token}/>
      <Outlet />
      <Footer />
    </div>
  )
} 

export default MainLayout
