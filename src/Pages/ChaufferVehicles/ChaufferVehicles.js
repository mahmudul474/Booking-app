import React, { useEffect } from "react";
import AutoSlider from "../../Component/Slider/AutoSlider";
import HomePlaceinfo from "../../Component/HomePlaceInfo/HomePlaceinfo";
import { useState } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { MdPeopleOutline, MdSupportAgent } from "react-icons/md";
import { BsStopwatch, BsWifi } from "react-icons/bs";
import { GiSquareBottle } from "react-icons/gi";
import ProfationalDriver from "../Day-Tour/BookProfatinalDraiver/ProfationalDriver";
import Sponser from "../../Shared/Sponser/Sponser";
import { Link } from "react-router-dom";

export default function ChaufferVehicles() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/car`)
      .then(res => res.json())
      .then(data => {
        setCars(data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center  lg:flex-row xl:flex-row md:flex-row  flex-col items-center h-[500px] ">
        <div className="w-full hidden lg:block md:block xl:block 2xl:block border-emerald-700">
          <AutoSlider></AutoSlider>
        </div>
        <div className="w-full h-full  border border-black overflow-y-scroll">
          <HomePlaceinfo></HomePlaceinfo>
        </div>
      </div>

      <div className="bg-slate-300 my-16 py-14">
        <div className="text-center">
          <h1 className="text-center text-4xl   font-bold  mb-7       text-green-950">
            Our Vehicles
          </h1>
          <h4 className="text-lg font-bold ">
            Congestion fee: £15 is applicable for any journey through congestion
            zone and time.
          </h4>
        </div>
      </div>

      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cars?.map(car => (
          <div key={car._id}>
            <div className=" bg-white border border-gray-200 rounded-lg shadow  ">
              <div className="my-5">
                <img className="rounded-t-lg" src={car && car.carImg} alt="" />
              </div>
              <div className="p-5">
                <h5 className="text-lg font-bold tracking-tight text-gray-9">
                  {car.type}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-950">
                  {car.carName}
                </h5>

                <p className="mb-3 font-normal text-gray-700 ">
                  {car?.about?.slice(0, 160)} ....{" "}
                  <Link to={`/Chauffervehicles/${car._id}`}>
                    {" "}
                    <span className="text-green-950 font-bold  cursor-pointer">
                      Read-more
                    </span>
                  </Link>
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5">
                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <MdPeopleOutline></MdPeopleOutline>
                  </span>
                  <p className="text-center"> {car.seat} Passengers.</p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <MdPeopleOutline></MdPeopleOutline>
                  </span>
                  <p className="text-center"> {car.bag} Bags</p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <BsWifi></BsWifi>
                  </span>
                  <p className="text-center"> WiFi Available</p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <BsStopwatch></BsStopwatch>
                  </span>
                  <p className="text-center"> 60 Min Free Airport Waiting</p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <MdSupportAgent></MdSupportAgent>
                  </span>
                  <p className="text-center">
                    {" "}
                    Free Cancellation In 24 Hour Notice
                  </p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <FaRegHandshake></FaRegHandshake>
                  </span>
                  <p className="text-center"> Meet & Greet</p>
                </div>

                <div className="flex flex-col items-center text-center  ">
                  <span className="text-3xl ">
                    <GiSquareBottle></GiSquareBottle>
                  </span>
                  <p className="text-center"> Free Water</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
                <div className="flex flex-col">
                  <p>£{car.hourPrice} / Hour</p>
                  <p> £ {car.dayPrice}/ Day rate (8 hours)</p>
                </div>
                <div>
                  <Link to={`/Chauffervehicles/${car._id}`}>
                    <button className="btn bg-transparent hover:bg-green-950   hover:text-white text-black">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
                <div className="border-2 border-black  rounded-lg p-2">
                  <a href="tel:02038842869">
                    For Booking please Call 02038842869
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-950 my-10">
        <ProfationalDriver></ProfationalDriver>
        <Sponser></Sponser>
      </div>
    </>
  );
}
