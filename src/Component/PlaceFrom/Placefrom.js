import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import { ImLocation2} from 'react-icons/im';
import { MdOutlineCancel} from 'react-icons/md';
import DateTime from '../DateTime/DateTime';
 

 function Placefrom() {

  const [inputValue, setInputValue] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowIcon(true);
  };


  const handleClearClick=()=>{
    setInputValue("")
  }

  return (


<div>

<div className='my-9'>
     <form> 
        <div className=' px-6 m-auto'>  
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
    </form>
</div>



<div>
    <DateTime></DateTime>
</div>


</div>









   
  )
}
export default Placefrom