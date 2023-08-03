import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import DataContext from "../../Context/BookingDataContex";
import "./Sidebar.css";

function Sidebar() {
  const { data, category, userInfo } = useContext(DataContext);

  return (
    <div className="">
      <div className="max-w-sm bg-white border  mx-auto  my-6  px-8 border-gray-200 rounded-lg shadow   ">
        <div className=" flex justify-start  items-center ">
          <Map></Map>
        </div>

        <div className="flex justify-start h-72 py-4 my-5 items-center">
          <div className="rental-manager-progress-bar-container">
            <div class="active"></div>
            <div class="active mt-6"></div>
            <div class="active mt-6"></div>
            <div class="active"></div>
            <div class="active"></div>
          </div>

          <div className="h-full">
            <div className="pt-2">
              <h2 className="font-bold text-sm">JOURNEY</h2>
              <h2 className="">From : {data && data.origin}</h2>
              <h2 className="">To: {data && data.destination}</h2>
            </div>

            <div className="">
              <h2 className="font-bold text-sm">DATE OF JOURNEY</h2>
              <h2>Date: {data && data.date}</h2>
              <h2>
                {" "}
                Return:{" "}
                {data && data.returnDate === "" && data.waitandReturn === ""
                  ? data?.bydefoultTrip
                  : (data && data.returnDate) || (data && data.waitandReturn)}
              </h2>
            </div>

            <div className="">
              <h2 className="font-bold text-sm">CAR TYPE</h2>
              <h3 className=" ">car: {category && category.carName}</h3>
            </div>
            <div className="">
              <h2 className="font-bold text-sm">PAYMENT METHOD</h2>
              <h3 className="">Cash</h3>
            </div>
            <div className="">
              <h2 className="font-bold text-sm">ADDITIONAL DETAILS</h2>
              <h3 className=""> Tel: {userInfo && userInfo?.phone}</h3>
            </div>
          </div>
        </div>
        <hr />

        <div className="mb-2">Total : {category && category.price} $</div>
      </div>
    </div>
  );
}

export default Sidebar;
