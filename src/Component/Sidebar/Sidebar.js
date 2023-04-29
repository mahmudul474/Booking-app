import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import DataContext from '../../Context/BookingDataContex'

function Sidebar() {
 
  const {data}=useContext(DataContext)

  return (
    <div className=''>
      
<div className="max-w-sm bg-white border  mx-auto  my-6  px-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className=' h-48 flex justify-start  items-center '>
       <Map></Map>
    </div>
    <div className="pb-8">
         <h2 className='mb-3'>From : {data && data.origin}</h2>
         <h2 className='mb-3'>To: {data && data.destination}</h2>
         <h2 className=''>DATE OF JOURNEY</h2>
    <span className='mb-3'>
  {data && (data.returnDate === "" && data.waitandReturn === "")
    ? data?.bydefoultTrip
    : (data && data.returnDate) || (data && data.waitandReturn)
  }
</span>
        
         

         <h2 className=''>CAR TYPE</h2>
         <h3 className='mb-3'>BMW</h3>
          <h2>PAYMENT METHOD</h2>
          <h4 className='mb-3'>card</h4>
          <h2>ADDITIONAL DETAILS</h2>
          <h4>- Tel: +8801906379720</h4>
          <hr/>
          <p>HAVE A PROMO? PLEASE <Link className='underline'>SIGN IN</Link> TO USE</p>
          <hr/>

    </div>
</div>

    </div>
  )
}


export default  Sidebar