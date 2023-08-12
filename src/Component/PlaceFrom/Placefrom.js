import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDown, AiOutlinePlusSquare } from "react-icons/ai";
import { ImCancelCircle, ImLocation2 } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import DateTime from "../DateTime/DateTime";
import ReturnDate from "../DateTime/ReturnDate";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../Context/BookingDataContex";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { API_KEY, places } from "../../config";

function Placefrom() {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  console.log(data, "this  is data");

  const startLocation = data && data.origin;
  const endLocation = data && data.destination;
  const juernyDate = data && data.date;

  //start locations

  const [startLocationValue, setStartLocationValue] = useState(
    data && data.origin
  );

  const handleStartLocationChange = event => {
    setStartLocationValue(event.target.value);
  };

  //end locations

  const [endLocationValue, setEndLocationValue] = useState(
    data && data.destination
  );
  const [showEndicon, showEndtlocationIcon] = useState(false);
  ///custom location
  const [addLocationopen, setAddLocationOpen] = useState(false);

  const [addloction, setaddLocationValue] = useState("");

  const handleEndLocationChange = event => {
    setEndLocationValue(event.target.value);
    showEndtlocationIcon(true);
  };

  //date  pick up date
  const dateObject = new Date(data && data.date);
  const dateString = dateObject.toLocaleString();
  const defaultDate = new Date(dateString && dateString);

  const [startDate, setStartDate] = useState(
    data && data.date ? defaultDate : null
  );

  ///return date

  const returndateObject = new Date(data && data.returnDate);
  const returndateString = returndateObject.toLocaleDateString("en-US");
  const returndefaultDate = new Date(returndateString && returndateString);

  const [returnDate, setReturnDate] = useState(
    data && data.returnDate ? returndefaultDate : null
  );

  const [showreturndate, setShowReturndate] = useState(
    data?.returnDate ? true : false
  );

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

  const handlesaveBookingData = e => {
    const data = {
      origin: startLocationValue ? startLocationValue : startLocation,
      destination: endLocationValue ? endLocationValue : endLocation,
      date: startDate ? startDate.toLocaleString() : juernyDate,
      returnDate: returnDate ? returnDate.toLocaleString() : singelvalue,
      waitandReturn: waitandreturnValue ? waitandreturnValue : singelvalue,
      single: singelvalue && singelvalue,
      bydefoultTrip: "single"
    };

    setData(data);
  };

  const [selectedBtn, setSelectedBtn] = useState(data?.selectedBtn);

  const handleClick = btn => {
    setSelectedBtn(btn);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={places}>
      <div className=" ">
        <div className="my-9  ">
          <div>
            <div className=" px-6 m-auto">
              {/* first location */}
              <div className="relative my-5">
                <Autocomplete>
                  <input
                    required
                    type="text"
                    defaultValue={startLocation}
                    onBlur={handleStartLocationChange}
                    className="border border-gray-400 text-black  rounded-sm  bg-white  px-16 py-5  text-md font-bold   w-full"
                    placeholder="PICKUP ADDRESS"
                  />
                </Autocomplete>

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

              {addLocationopen && (
                <div className="ml-14 mb-2">
                  <div className="relative   ">
                    <Autocomplete>
                      <input
                        required
                        type="text"
                        onBlur={e => {
                          setaddLocationValue(e.target.value);
                        }}
                        className="border text-black border-gray-400 rounded-sm text-black   px-16 py-2  text-md   bg-white w-full"
                        placeholder="Add location "
                      />
                    </Autocomplete>

                    <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                      <span className="w-10 h-10 m-auto  ">
                        <img
                          alt=""
                          src="https://i.ibb.co/FhXTXP9/location.png"
                        />
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setAddLocationOpen(false);
                        setaddLocationValue("");
                      }}
                      className="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-3"
                    >
                      <span>
                        <ImCancelCircle />
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* seconde location */}
              <div className="relative my-5">
                <Autocomplete>
                  <input
                    required
                    type="text"
                    defaultValue={endLocation}
                    onBlur={handleEndLocationChange}
                    className="border border-gray-400 text-black rounded-sm  bg-white  px-16 py-5  text-md font-bold   w-full"
                    placeholder="DESTINATION ADDRESS"
                  />
                </Autocomplete>

                <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                  <span className="w-10 h-10 m-auto  ">
                    <img src="https://i.ibb.co/pyf6D9B/pin.png" alt="" />
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
            <div className="mx-6">
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

            <div className="my-5 mx-6   flex-col lg:flex-row  flex justify-between items-center">
              {/* btn grupe */}
              <div class=" flex    rounded-md  " role="group">
                {selectedBtn === "single" ? (
                  <button className="btn mr-2  my-2 bg-green-950 hover:bg-green-700">
                    {" "}
                    SINGLE
                  </button>
                ) : (
                  <button
                    className="border-1 btn mr-2 my-2 bg-transparent  hover:bg-green-950 text-black hover:text-white border-black"
                    onClick={() => {
                      handleClick("single");
                      handlesingleTrip();
                    }}
                  >
                    SINGLE
                  </button>
                )}

                {selectedBtn === "return" ? (
                  <button className="btn  my-2 bg-green-950 hover:bg-green-700 mr-2 ">
                    {" "}
                    RETURN
                  </button>
                ) : (
                  <button
                    className=" 
                  border-1 btn bg-transparent my-2  mr-2  hover:bg-green-950 text-black hover:text-white border-black"
                    onClick={() => {
                      handleClick("return");
                      handleReturndateOpen();
                    }}
                  >
                    RETURN
                  </button>
                )}

                {selectedBtn === "wait" ? (
                  <button className="btn  my-2 bg-green-950 hover:bg-green-700 mr-2 ">
                    WAIT & RETURN
                  </button>
                ) : (
                  <button
                    className="border-1 btn my-2 bg-transparent  mr-2  hover:bg-green-950 text-black hover:text-white border-black"
                    onClick={() => {
                      handleWaitAndReturn();
                      handleClick("wait");
                    }}
                  >
                    WAIT & RETURN
                  </button>
                )}
              </div>

              <div className=" flex justify-end items-end m-6">
                <button
                  onClick={() => setAddLocationOpen(true)}
                  className="bg-green-950 flex items-center hover:bg-green-950 btn"
                >
                  <span className="mr-2">
                    <AiOutlinePlusSquare></AiOutlinePlusSquare>
                  </span>{" "}
                  Add-location
                </button>
              </div>
            </div>
            <div className="flex justify-end items-end mr-5">
              <Link to="/booking/vehicle">
                <button
                  onClick={handlesaveBookingData}
                  disabled={
                    startLocationValue === "" || endLocationValue === ""
                  }
                  className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize"
                >
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
export default Placefrom;
