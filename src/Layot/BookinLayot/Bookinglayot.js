import React from 'react'
import { Outlet } from 'react-router-dom'

function Bookinglayot() {


    return (
    <div  className=' py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl "'>
    <h1>navbar</h1>
     
     <div className="flex  flex-col flex-wrap xl:flex-row-reverse  md:flex-row-reverse  lg:flex-row-reverse  ">

        <div className="hidden sm:block w-1/3 bg-green-500">
           sidenar
      </div>
     
      <div className="w-full sm:w-2/3 bg-blue-500">
      <Outlet></Outlet>
      </div>
      




    </div>

      
    </div>
  )
}

export default  Bookinglayot