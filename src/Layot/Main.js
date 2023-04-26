import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Shared/Nav/Nav'
import Footer from '../Shared/Footer/Footer'

 function Main() {
  return (
    <div>
      <div><Nav></Nav></div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}




export default Main