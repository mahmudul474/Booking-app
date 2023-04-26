import React, { useState } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa';

 function Vehicle() {
//
const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };



///seconde  top input 

  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClose2 = () => {
  
      setIsOpen2(false);

    // do something else for the top bar close button if needed
  };



//bottom input 
 const [isOpen3, setIsOpen3] = useState(false);

  const handleToggle3= () => {
    setIsOpen3(!isOpen3);
  };

  const handleClose3 = () => {
    setIsOpen3(false);
  };

  const handleItemClick1 = () => {
    console.log("Item 1 clicked");
  };

  const handleItemClick2 = () => {
    console.log("Item 2 clicked");
  };

  const handleItemClick3 = () => {
    console.log("Item 3 clicked");
  };

  return (
    <div>
        {/*  title*/}
    <div className='my-7'>
          <h1>Select Car</h1>
       <span className='bg-orange-700  mt-3 w-10 h-1 block'></span>
    </div>



{/*top input*/}
    <div className='flex justify-center items-center  '>
{/*  top input one  */}
    <div className="relative  mr-2 w-full">
      <button
        className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4  justify-between  inline-flex items-center"
        onClick={handleToggle}
      >
        <span>Dropdown</span>
        <FaChevronDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
          <div className="flex justify-end px-4">
         
            <span className='right-0'><FaTimes className="cursor-pointer" onClick={handleClose} /></span>
          </div>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 3
          </a>
        </div>
      )}
    </div>

{/* top seconde input */}

  <div className="relative w-full ml-2">
      <button
        className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 justify-between inline-flex items-center"
        onClick={handleToggle2}
      >
        <span>Dropdown</span>
        <FaChevronDown className="ml-2" />
      </button>
      {isOpen2 && (
        <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
          <div className="flex  justify-end px-4">
         
            <FaTimes className="cursor-pointer" onClick={handleClose2} />
          </div>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Item 3
          </a>
        </div>
      )}
    </div>
 </div>
  


{ /*  bootom  input  */}
<div className="relative w-full my-4">
      <button
        className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 rounded justify-between  inline-flex items-center"
        onClick={handleToggle3}
      >
        <span>Dropdown</span>
        <FaChevronDown className="ml-2" />
      </button>
      {isOpen3 && (
        <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
          <div className="flex justify-between px-4">
            <span className="font-semibold">Dropdown</span>
            <FaTimes className="cursor-pointer" onClick={handleClose3} />
          </div>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique1" onClick={handleItemClick1}>
            Item 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique2" onClick={handleItemClick2}>
            Item 2
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique3 border-b" onClick={handleItemClick3}>
            Item 3
          </a>
        </div>
      )}
    </div>




    </div>
  )
}


export default Vehicle