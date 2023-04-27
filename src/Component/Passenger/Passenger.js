import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
  function Passenger() {

    ///checkbox
    const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div>
      {/*title*/}
       <div className='my-7'>
          <h1 className='text-xl capitalize font-bold '>Note</h1>
       <span className='bg-orange-700  mt-3 w-14 h-[2px] block'></span>
    </div>

    {/*note  */}
      <div>
      <textarea  placeholder='Note to Driver' class="w-full resize-none border border-gray-200 rounded-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
      </div>
      


  <div className='my-7'>
          <h1 className='text-xl capitalize font-bold '>Passenger Details</h1>
       <span className='bg-orange-700  mt-3 w-14 h-[2px] block'></span>
    </div>


{/*pasenger dettails */}
    <div className='flex justify-center flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full bg-gray-100 border  border-r-gray-600  py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="FIRST NAME"/>
        </div>
        <div className='w-full mb-5'>
            <input class="w-full bg-gray-100 border    py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" SURNAME"/>
        </div>
 

    </div>
    <div className='flex justify-center flex-col lg:flex-row '>
        <div className='mb-5  w-full'>
            <input class="w-full bg-gray-100 border  border-r-gray-600  py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="PHONE NUMBER "/>
        </div>
        <div className='w-full'>
            <input class="w-full bg-gray-100 border    py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="EMAIL"/>
        </div>
 

    </div>




{/* user*/}
<div className='my-4'>
    <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex mr-1'>
      <label  className='flex '>
        <input type="checkbox" className='rounded-full' checked={isChecked} onChange={handleCheckboxChange} />
         <p className='font-bold ml-2 text-md'>Register</p>
      </label>
       <div>
            <p> (Already registered? <Link className='text-green-950 underline'> Sign In</Link>)</p>
            
        </div>
     </div>


          <div>
      <label  className='flex'>
        <input type="checkbox" className='rounded-full' checked={isChecked} onChange={handleCheckboxChange} />
         <p className='font-bold ml-2 text-md'>Continue as Guest</p>
      </label>
     </div>

    </div>
 <div>

 </div>
{/*pasword*/}

 <div className='w-full my-4 lg:w-2/4 mb-5'>
            <input class="w-full bg-gray-100 border    py-5  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="PASSWORD"/>
            <p>You can sign-in later to view or amend the booking</p>
        </div>

</div>



  
  
  
  
  
   <div className='flex justify-end items-end mt-6'>

    
<Link to="/booking/vehicle">
    <a className='flex justify-center items-center p-3 hover:underline'> <span><AiOutlineLeft/></span> Previous</a>

</Link>
<Link to="/booking/Payment">
    <button className='btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize'>NEXT</button>

</Link>

</div>
  
  
  
  
  
  
  
    </div>
  )
}

export default Passenger