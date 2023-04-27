import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=''>
      
<div className="max-w-sm bg-white border  mx-auto  my-6  px-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className=' h-48 flex justify-start  items-center '>
        <img className=" h-36 w-full  max-w-full  " src="https://i.ibb.co/kQzNTwR/images-q-tbn-ANd9-Gc-RHErz9mec-ljx3ni-Zt7r-HO2w7z53-CMt-NKZ8-A-usqp-CAU.jpg" alt="" />
    </div>
    <div className="pb-8">
         <h2 className='mb-3'>From</h2>
         <h2 className='mb-3'>To</h2>
         <h2 className=''>DATE OF JOURNEY</h2>
         <span className='mb-3'>single</span>
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