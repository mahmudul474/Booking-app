import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Component/Sidebar/Sidebar'
import BookingNav from './BookingNav/BookingNav'

function Bookinglayot() {


    return (
      <div className='  bg-green-950  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl "'>
        <div className="flex bg-green-950 flex-col flex-wrap xl:flex-row-reverse  md:flex-row-reverse  lg:flex-row-reverse  ">
          <div className="hidden sm:block w-1/3 bg-green-950 ">
            <Sidebar></Sidebar>
          </div>

          <div className="w-full sm:w-2/3 p-8   bg-white">
            <div>
              <BookingNav></BookingNav>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
}

export default  Bookinglayot