import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDown, AiOutlinePlusSquare } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import DateTime from "../DateTime/DateTime";
import ReturnDate from "../DateTime/ReturnDate";
import {  useNavigate } from "react-router-dom";
import DataContext from "../../Context/BookingDataContex";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { API_KEY, places } from "../../config";
import "tailwindcss/tailwind.css";


function HomePlaceinfo() {
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();
  //start locations
  const [startLocationValue, setStartLocationValue] = useState("");
  const [startLocationError, setStartLocationError] = useState("");
  //custom location
  const [addloction,setaddLocationValue]=useState("")
  const [addLocationopen,setAddLocationOpen]=useState(false)
  //end locations
  const [endLocationValue, setEndLocationValue] = useState("");
  const [endLocationError, setEndLocationError] = useState("");
  //date  pick up date
  const [startDate, setStartDate] = useState(null);
  const [startDateErro,setDateError]=useState("")
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

  const [selectedBtn, setSelectedBtn] = useState("single");
  const handleClick = (btn) => {
    setSelectedBtn(btn);
  };






 const[ defoultCar,setDefoultcar]=useState(null)


  //save data
  const handlesaveBookingData = () => {
    const data = {
      selectedBtn:selectedBtn&&selectedBtn,
      origin: startLocationValue ? startLocationValue : "",
      destination: endLocationValue ? endLocationValue : "",
      customLocation:addloction && addloction,
      defaultCar:defoultCar&& defoultCar,
      date: startDate && startDate.toLocaleString(),
      returnDate: returnDate && returnDate.toLocaleString(), 
      waitandReturn: waitandreturnValue ? waitandreturnValue : singelvalue,
      single: singelvalue && singelvalue,
      bydefoultTrip: "single",
    };
    setData(data);

    if (startLocationValue === '') {
      setStartLocationError("please  give PickUp address ")
    } else if (endLocationValue === '') {
     setEndLocationError("please    give Drop Address")
    }else if(startDate===""){

      setDateError(" please    give journey date")
    }else if(returnDate&& returnDate<startDate){

      alert("your are not return this date")
    } else {
      setStartLocationError("")
      setEndLocationError("")
      navigate('/booking');
    }
  };

  //bydefaultCar

  useEffect(() => {
    fetch("https://booking-server-devsobuj910.vercel.app/car")
      .then((res) => res.json())
      .then((data) => {
        if(startLocationValue && endLocationValue){
        setDefoultcar(data[0])
        }
    
      });
  }, [startLocationValue , endLocationValue]);






  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={places}>
      <div className=" ">
        <div className="my-9  ">
          <div className=" "  >
            <div className=" px-6 m-auto">
              {/* first location */}
              <div className="relative  ">
                <Autocomplete>
                  <input
                    required
                    type="text"
                    onBlur={(e) => {
                      setStartLocationValue(e.target.value);
                    }}
                    className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   bg-white w-full"
                    placeholder="PICKUP ADDRESS"
                  />
                </Autocomplete>
               

                <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                  <span className="w-10 h-10 m-auto  ">
                    <img alt=""  src="https://i.ibb.co/FhXTXP9/location.png" />
                  </span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
              </div>
              <p className="text-red-600 text-left mb-2">{startLocationError}</p>


{
  addLocationopen &&<div className="ml-14 mb-2">
      
  <div className="relative   ">
             <Autocomplete>
               <input
                 required
                 type="text"
                 onBlur={(e) => {
                   setaddLocationValue(e.target.value);
                 }}
                 className="border border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   bg-white w-full"
                 placeholder="Add location "
               />
             </Autocomplete>
            

             <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
               <span className="w-10 h-10 m-auto  ">
                 <img alt=""  src="https://i.ibb.co/FhXTXP9/location.png" />
               </span>
             </div>
             <div  onClick={()=>{
              setAddLocationOpen(false)
              setaddLocationValue("")
              }}  className="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-3">
               <span>
                 <ImCancelCircle/>
               </span>
             </div>
           </div>
  </div>

}


              {/* seconde location */}
              <div className="relative  ">
                <Autocomplete>
                  <input
                    required
                    type="text"
                    onBlur={(e) => {
                      setEndLocationValue(e.target.value);
                    }}
                    className="border bg-white border-gray-400 rounded-sm   px-16 py-5  text-md font-bold   w-full"
                    placeholder="DESTINATION ADDRESS"
                  />
                </Autocomplete>
               
                <div className="absolute inset-y-0 border border-gray-600  left-0 flex items-center px-2">
                  <span className="w-10 h-10 m-auto  ">
                    <img alt="" src="https://i.ibb.co/pyf6D9B/pin.png" />
                  </span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span>
                    <AiOutlineDown />
                  </span>
                </div>
              </div>
              <p className="text-red-600 mb-2 text-left">{endLocationError}</p>

            </div>

            {/* start date */}
            <div>
              <DateTime
                selectedDate={startDate}
                setSelectedDate={setStartDate}
              ></DateTime>
            </div>
            <p className="text-left  text-red-700">{startDateErro}</p>

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
 


  


<div className=" flex justify-end items-center m-6">
<button onClick={()=>setAddLocationOpen(true)} className="bg-green-950 flex items-center hover:bg-green-950 btn"><span className="mr-2"><AiOutlinePlusSquare></AiOutlinePlusSquare></span> Add-location</button>
</div>

 <div className="my-5 mx-6">
              {/* btn grupe */}
              <div class=" flex flex-wrap  rounded-md  " role="group">
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
            </div>

           
 


            


            <div className="flex justify-end items-end mr-5">
  {defoultCar && <p className="text-xl font-bold capitalize mr-4"> Price: { + defoultCar.price} $ </p>}
              
                <button onClick={handlesaveBookingData} className="btn bg-green-950 w-36 hover:bg-green-950  text-white font-bold capitalize">
                  NEXT
                </button>
          
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
}
export default HomePlaceinfo;
