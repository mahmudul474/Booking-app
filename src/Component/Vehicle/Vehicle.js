import React, { useEffect, useState } from "react";
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

  const handleToggle3 = () => {
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
  console.log(defaultitem, "d");

  const [currentItem, setCurrentItem] = useState(null);

  const handlePlaceSelect = (place) => {
    setCurrentItem(place);
  };

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
                  {currentItem && currentItem.priceperKM}
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
                      {defaultitem && defaultitem.priceperKM}
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
                      {item.priceperKM}
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
                      {currentItem && currentItem.priceperKM}
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
                      {defaultitem && defaultitem.priceperKM}
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
