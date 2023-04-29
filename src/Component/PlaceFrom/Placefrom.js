import React, { useContext, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import DateTime from "../DateTime/DateTime";
import ReturnDate from "../DateTime/ReturnDate";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../Context/BookingDataContex";

function Placefrom() {

 

const navigate=useNavigate()
const {data}=useContext(DataContext)
const fromvalues=data && data.from
const toValues=data && data.to
const juernyDate=data && data.date
const backDate=data && data.returnDate
  //start locations


    
  const [startLocationValue, setStartLocationValue] = useState('');
  const [showIcon, showStartlocationIcon] = useState(false);

console.log(startLocationValue ,'start locations va')


  const handleStartLocationChange = (event) => {
    setStartLocationValue(event.target.value);
    showStartlocationIcon(true);
  };

  const handleClearStartLocation = () => {
    setStartLocationValue("");
  };

  //end locations

  const [endLocationValue, setEndLocationValue] = useState("");
  const [showEndicon, showEndtlocationIcon] = useState(false);
 

  const handleEndLocationChange = (event) => {
    setEndLocationValue(event.target.value);
    showEndtlocationIcon(true);
  };

  const handleClearEndLocation = () => {
    setEndLocationValue("");
  };

  //date  pick up date
  const [startDate, setStartDate] = useState(null);

  ///return date
  const [returnDate, setReturnDate] = useState(null);
  const [showreturndate, setShowReturndate] = useState(false);
  const handleReturndateOpen = () => {
    setShowReturndate(true);
  };

  //singeleTrip
  const [singelvalue, setSingelValue] = useState("");

  const handlesingleTrip = () => {
    setReturnDate(null);
    setShowReturndate(false);
    setSingelValue("Single");
  };

  //wait and return
  const [waitandreturnValue, setWaitandReturnValue] = useState("");

  const handleWaitAndReturn = () => {
    setReturnDate(null);
    setShowReturndate(false);
    setWaitandReturnValue("wait and return");
  };




//save data 

  const handlesaveBookingData = (e) => {
    e.preventDefault();

    const data = {
      from: startLocationValue ? startLocationValue : "",
      to: endLocationValue ? endLocationValue : "",
      date: startDate ? startDate : "",
      returnDate: returnDate ? returnDate : singelvalue,
      returnDateValue: returnDate && 2,
      waitandReturn: waitandreturnValue ? waitandreturnValue : singelvalue,
      waitandreturnValue: waitandreturnValue && 2,
      single: singelvalue && singelvalue,
      bydefoultTrip: "single",
    };
    localStorage.setItem(
      "myData",
      JSON.stringify({ data,   })
    );
    navigate('/booking')
    
  };

  return (
    <div className=" ">
      <div className="my-9  ">
        <form className=" " onSubmit={handlesaveBookingData}>
          <div className=" px-6 m-auto">
            {/* first location */}
            <div className="relative my-5">
              <input
                required
                type="text"
                defaultValue={fromvalues}
                onChange={handleStartLocationChange}
                className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   w-full"
                placeholder="PICKUP ADDRESS"
              />

              {/* {startLocationValue && (
                <button
                  className="absolute top-1/2 right-9 transform -translate-y-1/2"
                  onClick={handleClearStartLocation}
                >
                  <span className="w-10">
                    <MdOutlineCancel></MdOutlineCancel>
                  </span>
                </button>
              )} */}

              <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                <span className="w-10 h-10 m-auto  ">
                  <img src="https://i.ibb.co/FhXTXP9/location.png" />
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span>
                  <AiOutlineDown />
                </span>
              </div>
            </div>

            {/* seconde location */}
            <div className="relative my-5">
              <input
                required
                type="text"
                defaultValue={toValues}
                onChange={handleEndLocationChange}
                className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   w-full"
                placeholder="DESTINATION ADDRESS"
              />
{/*  
              {endLocationValue && (
                <button
                  className="absolute top-1/2 right-9 transform -translate-y-1/2"
                  onClick={handleClearEndLocation}
                >
                  <span className="w-10">
                    <MdOutlineCancel></MdOutlineCancel>
                  </span>
                </button>
              )} */}

              <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                <span className="w-10 h-10 m-auto  ">
                  <img src="https://i.ibb.co/pyf6D9B/pin.png" />
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span>
                  <AiOutlineDown />
                </span>
              </div>
            </div>
          </div>

          {/* start date */}
          <div>
            <DateTime
              selectedDate={startDate}
              juernyDate={juernyDate}
              setSelectedDate={setStartDate}
            ></DateTime>
          </div>

          {/* return*/}

          {showreturndate && (
            <div className="my-5">
              {" "}
              <ReturnDate
                selectedDate={returnDate}
                setSelectedDate={setReturnDate}
              ></ReturnDate>{" "}
            </div>
          )}

          <div className="my-5 mx-6">
            {/* btn grupe */}
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={handlesingleTrip}
                type="button"
                className="bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white "
              >
                SINGLE
              </button>
              <button
                onClick={handleReturndateOpen}
                type="button"
                className="bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white "
              >
                RETURN
              </button>
              <button
                onClick={handleWaitAndReturn}
                type="button"
                className="bg-transparent  border focus:border-none border-gray-400 font-bold capitalize p-3  mr-3 focus:bg-green-950 focus:text-white "
              >
                WAIT & RETURN
              </button>
            </div>
          </div>
          <div className="flex justify-end items-end mr-5">
            <button
              type="submit"
              className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Placefrom;
