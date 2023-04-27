import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { ImLocation2} from 'react-icons/im';
import { MdOutlineCancel} from 'react-icons/md';
import DateTime from '../DateTime/DateTime';
import ReturnDate from '../DateTime/ReturnDate';
import { Link } from 'react-router-dom';
  

 function HomePlaceinfo() {

  const [inputValue, setInputValue] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowIcon(true);
  };


  const handleClearClick=()=>{
    setInputValue("")
  }


///return date
const [showreturndate,setShowReturndate]=useState(false)

const handleReturndateOpen=()=>{
    setShowReturndate(true)
}




  return (


<div className=' '>

<div className='my-9  '>
     <form className=' '> 
        <div className=' px-6 m-auto'>


            {/* first location */}  
         <div className="relative my-5">
  <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    className="border border-gray-400 rounded-sm   px-16 py-5 capitalize text-lg font-bold   w-full"
    placeholder="PICKUP ADDRESS"
  />

 {inputValue && (
        <button
          className="absolute top-1/2 right-9 transform -translate-y-1/2"
          onClick={handleClearClick}
        >
           <span className='w-10'><MdOutlineCancel></MdOutlineCancel></span>
        </button>
      ) }


  <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
    <span className='w-10 h-10 m-auto  '><img src='https://i.ibb.co/FhXTXP9/location.png'/></span>
  </div>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    <span><AiOutlineDown/></span>
    </div>
      </div>

      {/* seconde location */}
         <div className="relative my-5">
  <input
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    className="border border-gray-400 rounded-sm   px-16 py-5 capitalize text-lg font-bold   w-full"
    placeholder="DESTINATION ADDRESS"
  />

 {inputValue && (
        <button
          className="absolute top-1/2 right-9 transform -translate-y-1/2"
          onClick={handleClearClick}
        >
           <span className='w-10'><MdOutlineCancel></MdOutlineCancel></span>
        </button>
      ) }


  <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
    <span className='w-10 h-10 m-auto  '><img src='https://i.ibb.co/FhXTXP9/location.png'/></span>
  </div>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    <span><AiOutlineDown/></span>
    </div>
      </div>
      </div> 

{/* start date */}
      <div>
    <DateTime></DateTime>
</div>


{/* return*/}

{
   showreturndate &&   <div className='my-5'> <ReturnDate></ReturnDate> </div>
}

<div className='my-5 mx-6'>

    {/* btn grupe */}
<div class="inline-flex rounded-md shadow-sm" role="group">
      <button type='button' className='bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white '>SINGLE</button>
      <button onClick={handleReturndateOpen} type='button' className='bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white ' >RETURN</button>
      <button type='button' className='bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white '>WAIT & RETURN</button>
</div>

</div>
<div className='flex justify-end items-end mr-5'>
<Link to="/booking">
    <button className='btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize'>NEXT</button>

</Link>

</div>

    </form>





 





</div>












</div>









   
  )
}
export default HomePlaceinfo