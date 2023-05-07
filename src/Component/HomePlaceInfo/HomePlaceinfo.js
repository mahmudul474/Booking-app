import React, { useContext, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import DateTime from "../DateTime/DateTime";
import ReturnDate from "../DateTime/ReturnDate";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../Context/BookingDataContex";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { API_KEY, places } from "../../config";
import "tailwindcss/tailwind.css";

function HomePlaceinfo() {
  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

  //start locations
  const [startLocationValue, setStartLocationValue] = useState("");
  const [showIcon, showStartlocationIcon] = useState(false);

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
    handlesaveBookingData();
  };

  //singeleTrip
  const [singelvalue, setSingelValue] = useState("");

  const handlesingleTrip = () => {
    setReturnDate(null);
    setShowReturndate(false);
    setSingelValue("Single");

    handlesaveBookingData();
  };

  //wait and return
  const [waitandreturnValue, setWaitandReturnValue] = useState("");

  const handleWaitAndReturn = () => {
    setReturnDate(null);
    setShowReturndate(false);
    setWaitandReturnValue("wait and return");
    handlesaveBookingData();
  };

  const [selectedBtn, setSelectedBtn] = useState("single");

  const handleClick = (btn) => {
    setSelectedBtn(btn);
  };

  //save data
  const handlesaveBookingData = (e) => {
    const data = {
      origin: startLocationValue ? startLocationValue : "",
      destination: endLocationValue ? endLocationValue : "",
      date: startDate ? startDate.toLocaleString() : "",
      returnDate: returnDate ? returnDate.toLocaleString() : singelvalue,
      waitandReturn: waitandreturnValue ? waitandreturnValue : singelvalue,
      single: singelvalue && singelvalue,
      bydefoultTrip: "single",
    };

    setData(data);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={places}>
      <div className=" ">
        <div className="my-9  ">
          <div className=" " onClick={handlesaveBookingData}>
            <div className=" px-6 m-auto">
              {/* first location */}
              <div className="relative my-5">
                <Autocomplete>
                  <input
                    required
                    type="text"
                    defaultValue={data && data.origin}
                    onBlur={(e) => {
                      setStartLocationValue(e.target.value);
                      handlesaveBookingData();
                    }}
                    className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   w-full"
                    placeholder="PICKUP ADDRESS"
                  />
                </Autocomplete>

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
                <Autocomplete>
                  <input
                    required
                    type="text"
                    onBlur={(e) => {
                      setEndLocationValue(e.target.value);
                      handlesaveBookingData();
                    }}
                    className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   w-full"
                    placeholder="DESTINATION ADDRESS"
                  />
                </Autocomplete>
                {/* {endLocationValue && (
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
                  className={`bg-${
                    selectedBtn === "single" ? "red" :"gray"
                  }-500 text-${
                    selectedBtn === "single" ? "white" : "black"
                  } px-4 py-2 rounded-md mr-4`}
                  onClick={() => {
                    handleClick("single");
                    handlesingleTrip();
                  }}
                >
                  SINGLE
                </button>
                <button
                  className={`bg-${
                    selectedBtn === "return" ? "red" : "gray"
                  }-500 text-${
                    selectedBtn === "return" ? "white" : "black"
                  } px-4 py-2 rounded-md mr-4`}
                  onClick={() => {
                    handleClick("return");
                    handleReturndateOpen();
                  }}
                >
                  RETURN
                </button>
                <button
                  className={`bg-${
                    selectedBtn === "wait" ? "red" : "gray"
                  }-500 text-${
                    selectedBtn === "wait" ? "white" : "black"
                  } px-4 py-2 rounded-md mr-4`}
                  onClick={() => {
                    handleWaitAndReturn();
                    handleClick("wait");
                  }}
                >
                  WAIT & RETURN
                </button>
              </div>
            </div>
            <div className="flex justify-end items-end mr-5">
              <Link to="/booking">
                <button className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize">
                  NEXT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
}
export default HomePlaceinfo;
