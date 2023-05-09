import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown, FaDog, FaTimes } from "react-icons/fa";

import {
  BsCurrencyDollar,
  BsFillBagFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

import { BiChild } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import DataContext from "../../Context/BookingDataContex";

function Vehicle() {
   
  
const {setCategory}=useContext(DataContext)
   

  //bottom input
  const [isOpen3, setIsOpen3] = useState(false);

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClose3 = () => {
    setIsOpen3(false);
  };

 

  const [isloading, setIsloading] = useState(true);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://booking-server-devsobuj910.vercel.app/car")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setIsloading(false);
      });
  }, []);

  const defaultitem = places[0];
   ;

  const [currentItem, setCurrentItem] = useState(null);

  const handlePlaceSelect = (place) => {
    setCurrentItem(place);
    

  };



  useEffect(()=>{
    setCategory(currentItem ?currentItem :defaultitem)
  },[currentItem,defaultitem])


  if(isloading){
    return <div className="flex justify-center items-center" role="status">
    <svg aria-hidden="true" class="inline text-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
   
</div>
  }


  return (
    <div>
      {/*  title*/}
      <div className="my-7">
        <h1 className="text-xl capitalize font-bold ">Select Car</h1>
        <span className="bg-orange-700  mt-3 w-14 h-[2px] block"></span>
      </div>

      {/*top input
      <div className="flex justify-center lg:flex-row flex-col my-4 items-center  ">
        {/*  top input one  */}
      {/* <div className="relative  mr-2 my-4 w-full">
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
        </div> */}

      {/* top seconde input */}

      {/* <div className="relative w-full ">
          <button
            className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 justify-between inline-flex items-center"
            onClick={handleToggle2}
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
          {isOpen2 && (
            <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
              <div className="flex  justify-end px-4">
                <FaTimes className="cursor-pointer" onClick={handleClose2} />
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
        </div> */}
      {/*</div>*/}

      {/*  bootom  input  */}
      <div className="relative w-full my-4">
        <button
          className="bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 rounded justify-between  inline-flex items-center"
          onClick={handleToggle3}
        >
           {
            currentItem ? <div className="">
            <div className="flex justify-between items-center ">
              <h1 className="text-center font-bold text-lg capitalize">
                {currentItem && currentItem.carName}
              </h1>
              <div className="flex  justify-center items-center px-7">
                <p className="mr-10 flex items-center">
                  {" "}
                  <span>
                    <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                  </span>
                  {currentItem && currentItem.seat}
                </p>
                <p className="mr-10 flex items-center  ">
                  <span className="mr-2">
                    <BsFillBagFill></BsFillBagFill>{" "}
                  </span>{" "}
                  {currentItem && currentItem.bag}
                </p>
                <p className="mr-10 flex items-center ">
                  {" "}
                  <span>
                    <BsCurrencyDollar></BsCurrencyDollar>
                  </span>{" "}
                  {currentItem && currentItem.price}
                </p>
              </div>
            </div>
          </div>:<div className="">
                <div className="flex justify-between items-center ">
                  <h1 className="text-center font-bold text-lg capitalize">
                    {defaultitem && defaultitem.carName}
                  </h1>
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10 flex items-center">
                      {" "}
                      <span>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {defaultitem && defaultitem.seat}
                    </p>
                    <p className="mr-10 flex items-center  ">
                      <span className="mr-2">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {defaultitem && defaultitem.bag}
                    </p>
                    <p className="mr-10 flex items-center ">
                      {" "}
                      <span>
                        <BsCurrencyDollar></BsCurrencyDollar>
                      </span>{" "}
                      {defaultitem && defaultitem.price}
                    </p>
                  </div>
                </div>
              </div>
           }
          <FaChevronDown className="ml-2" />
        </button>
        {isOpen3 && (
          <div className="absolute right-0 mt-2 py-2 w-full bg-white rounded-md shadow-xl z-10">
            <div className="flex justify-end px-4">
              <FaTimes className="cursor-pointer" onClick={handleClose3} />
            </div>

            <div className="h-56 overflow-y-scroll">
              {places?.map((item) => (
                <div
                  onClick={() => handlePlaceSelect(item)}
                  className="flex justify-between items-center my-5 bg-slate-100 p-2  text-lg  font-bold  px-5"
                  key={item._id}
                >
                  <img
                    className="w-14  rounded-lg h-14 object-cover"
                    src={item.carImg && item.carImg}
                    alt=""
                  />
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10  "> {item.carName}</p>
                    <p className="mr-10 flex items-center">
                      {" "}
                      <span>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {item.seat}
                    </p>
                    <p className="mr-10 flex items-center  ">
                      <span className="mr-2">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {item.bag}
                    </p>
                    <p className="mr-10 flex items-center ">
                      {" "}
                      <span>
                        <BsCurrencyDollar></BsCurrencyDollar>
                      </span>{" "}
                      {item.price}
                    </p>
                  </div>
                  <button onClick={handleClose3} className=" text-white w-28 p-2 rounded-lg bg-green-950 hover:bg-green-950">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {/*car*/}

        {currentItem ? (
          <div>
            <div className="flex flex-col lg:flex-row h-48  border border-gray-500 ">
              <img
                src={currentItem && currentItem.carImg}
                alt="Img"
                className="w-full  h-48  pb-[2px] object-cover lg:w-1/4"
              />

              {/*car title */}
              <div className="hidden lg:block lg:w-5/6">
                <div className="flex justify-between items-center p-5">
                  <h1 className="text-center font-bold text-2xl capitalize">
                    {currentItem && currentItem.carName}
                  </h1>
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10 flex items-center">
                      {" "}
                      <span>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {currentItem && currentItem.seat}
                    </p>
                    <p className="mr-10 flex items-center  ">
                      <span className="mr-2">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {currentItem && currentItem.bag}
                    </p>
                    <p className="mr-10 flex items-center ">
                      {" "}
                      <span>
                        <BsCurrencyDollar></BsCurrencyDollar>
                      </span>{" "}
                      {currentItem && currentItem.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col lg:flex-row h-48  border border-gray-500 ">
              <img
                src={defaultitem && defaultitem.carImg}
                alt="Img"
                className="w-full  h-48  pb-[2px] object-cover lg:w-1/4"
              />

              {/*car title */}
              <div className="hidden lg:block lg:w-5/6">
                <div className="flex justify-between items-center p-5">
                  <h1 className="text-center font-bold text-2xl capitalize">
                    {defaultitem && defaultitem.carName}
                  </h1>
                  <div className="flex  justify-center items-center px-7">
                    <p className="mr-10 flex items-center">
                      {" "}
                      <span>
                        <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>
                      </span>
                      {defaultitem && defaultitem.seat}
                    </p>
                    <p className="mr-10 flex items-center  ">
                      <span className="mr-2">
                        <BsFillBagFill></BsFillBagFill>{" "}
                      </span>{" "}
                      {defaultitem && defaultitem.bag}
                    </p>
                    <p className="mr-10 flex items-center ">
                      {" "}
                      <span>
                        <BsCurrencyDollar></BsCurrencyDollar>
                      </span>{" "}
                      {defaultitem && defaultitem.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
