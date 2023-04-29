import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaDog, FaTimes } from "react-icons/fa";

import { BsFillPersonFill, BsHandbagFill } from "react-icons/bs";

import { BiChild } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import DataContext from "../../Context/BookingDataContex";

function Vehicle() {
  //
  const [isOpen, setIsOpen] = useState(false);


  const {data}=useContext(DataContext)

 

   const [cars,setCars]=useState([])  

   useEffect(()=>{
    fetch("http://localhost:5000/car")
    .then(res=>res.json())
    .then(data=>{
      setCars(data)
    })
   },[])
   


   console.log(cars)


  return (
    <div>
      {/*  title*/}
      <div className="my-7">
        <h1 className="text-xl capitalize font-bold ">Select Car</h1>
        <span className="bg-orange-700  mt-3 w-14 h-[2px] block"></span>
      </div>

  

     


 



      <div>
        {/*car*/}
        <div className="max-h-screen overflow-y-scroll">
          {cars?.map(car=>
          <div className="flex flex-col lg:flex-row h-48  border border-gray-500 ">
            <img
              src={car.carImg}
              alt="Image"
              className="w-full  h-48  pb-[2px] object-cover lg:w-1/4"
            />

            {/*car title */}
             
            <div className="hidden lg:block lg:w-5/6">
              <div className="flex justify-between items-center p-5">
                <h1 className="text-center font-bold text-2xl capitalize">
                  {car.carName}
                </h1>
                <div className="flex ">
                  
                  <p className=" text-xl flex justify-center items-center mr-3 ">
                    <span className=" p-1 ">
                      {" "}
                      <BiChild></BiChild>
                    </span>{" "}
                    {car.bag}
                  </p>
                  <p className=" text-xl flex justify-center items-center mr-3">
                    <span className=" p-1  ">
                      {" "}
                      <BsHandbagFill></BsHandbagFill>
                    </span>{" "}
                    {car.seat}
                  </p>
                </div>
                
                <div className="flex justify-center items-center">
                   <h2 className="text-md capitalize font-bold">Price: {car.priceperKM}Taka K.M</h2>
                </div>

                <button className="btn bg-orange-600">
                  selected
                </button>

              </div>
            </div>
       
          
         
          </div>)}
          
        </div>
      </div>

      <div className="flex justify-end items-end mt-6">
        <Link to="/booking">
          <a className="flex justify-center items-center p-3 hover:underline">
            {" "}
            <span>
              <AiOutlineLeft />
            </span>{" "}
            Previous
          </a>
        </Link>
        <Link to="/booking/passenger">
          <button className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Vehicle;





    {/*top input*/}
     {/* <div className="flex justify-center lg:flex-row flex-col my-4 items-center  ">
        
     <div className="relative  mr-2 my-4 w-full">
   
          <button
            className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4  justify-between  flex items-center"
            onClick={handleToggle}
          >
            <div className="flex justify-between w-full  ">
              <p className=" text-2xl flex justify-center items-center  ">
                <span className="mr-3 p-1 bg-slate-300 h-full">
                  <BsFillPersonFill></BsFillPersonFill>
                </span>{" "}
                1
              </p>
              <p className=" text-2xl flex justify-center items-center ">
                <span className="mr-3 p-1 bg-slate-300 ">
                  {" "}
                  <BiChild></BiChild>
                </span>{" "}
                2
              </p>
              <p className=" text-2xl flex justify-center items-center mr-5 ">
                <span className="mr-3 p-1 bg-slate-300">
                  <BiChild></BiChild>
                </span>{" "}
                1
              </p>
            </div>
            <FaChevronDown className="ml-2" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
              <div className="flex justify-end px-4">
                <span className="right-0">
                  <FaTimes className="cursor-pointer" onClick={handleClose} />
                </span>
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Item 3
              </a>
            </div>
          )}
        </div>

        {/* top seconde input */}

        // <div className="relative w-full ">
        //   <button
        //     className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 justify-between inline-flex items-center"
        //     onClick={handleToggle2}
        //   >
        //     <div className="flex justify-between w-full  ">
        //       <p className=" text-2xl flex justify-center items-center  ">
        //         <span className="mr-3 p-1 bg-slate-300 h-full">
        //           <BsFillPersonFill></BsFillPersonFill>
        //         </span>{" "}
        //         1
        //       </p>
        //       <p className=" text-2xl flex justify-center items-center ">
        //         <span className="mr-3 p-1 bg-slate-300 ">
        //           {" "}
        //           <BiChild></BiChild>
        //         </span>{" "}
        //         2
        //       </p>
        //       <p className=" text-2xl flex justify-center items-center mr-5 ">
        //         <span className="mr-3 p-1 bg-slate-300">
        //           <BiChild></BiChild>
        //         </span>{" "}
        //         1
        //       </p>
        //     </div>
        //     <FaChevronDown className="ml-2" />
        //   </button>
        //   {isOpen2 && (
        //     <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
        //       <div className="flex  justify-end px-4">
        //         <FaTimes className="cursor-pointer" onClick={handleClose2} />
        //       </div>
        //       <a
        //         href="#"
        //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        //       >
        //         Item 1
        //       </a>
        //       <a
        //         href="#"
        //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        //       >
        //         Item 2
        //       </a>
        //       <a
        //         href="#"
        //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        //       >
        //         Item 3
        //       </a>
        //     </div>
        //   )}
        // </div>
       





        
      // <div className="relative w-full my-4">
      //   <button
      //     className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 rounded justify-between  inline-flex items-center"
      //     onClick={handleToggle3}
      //   >
      //     <span>Dropdown</span>
      //     <FaChevronDown className="ml-2" />
      //   </button>
      //   {isOpen3 && (
      //     <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
      //       <div className="flex justify-end px-4">
      //         <FaTimes className="cursor-pointer" onClick={handleClose3} />
      //       </div>
      //       <a
      //         href="#"
      //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique1"
      //         onClick={handleItemClick1}
      //       >
      //         Item 1
      //       </a>
      //       <a
      //         href="#"
      //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique2"
      //         onClick={handleItemClick2}
      //       >
      //         Item 2
      //       </a>
      //       <a
      //         href="#"
      //         className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-t border-unique3 border-b"
      //         onClick={handleItemClick3}
      //       >
      //         Item 3
      //       </a>
      //     </div>
      //   )}
      // </div>