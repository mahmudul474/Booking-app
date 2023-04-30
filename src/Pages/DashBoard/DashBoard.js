import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DashBoard() {
  
    
  const dashborditem=<>
  <Link to="/dashboard">
     <button className='btn mr-3 my-3 bg-green-950 hover:bg-green-950'>users</button></Link>
     <Link to="/dashboard/orders">
     <button className='btn mr-3 my-3 bg-green-950 hover:bg-green-950'>orders</button>
     </Link>
     <Link to="/dashboard/allcars">
     <button className='btn mr-3 my-3 bg-green-950 hover:bg-green-950'>cars</button>
     </Link>
     <Link to="/dashboard/addCar ">
     <button className='btn mr-3 my-3 bg-green-950 hover:bg-green-950'>Add car</button></Link>
      
    
  </>
  
    return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='flex flex-col lg:flex-row text-center m-auto justify-center items-center my-5'>
            {dashborditem}
        </div>
      
      <Outlet></Outlet>
    </div>
  )
}
