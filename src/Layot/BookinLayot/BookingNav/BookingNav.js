import React, { useContext } from "react";
import "./BookingNav.css";
import DataContext from "../../../Context/BookingDataContex";
import creditImg from "./Icons/credit-card.png";
import personImg from "./Icons/user.png";
import locationImg from "./Icons/location.png";
import roadImg from "./Icons/road.png";

import { Link } from "react-router-dom";

export default function BookingNav() {
  const { data, category, userInfo } = useContext(DataContext);
  return (
    <div className="mb-16">
      <div className="lines">
        <div className="relative ">
          <Link disabled={true} to="">
            <p className="item flex items-center">
              <img
                className="w-1/2  h-1/2 m-auto  object-cover"
                src={locationImg}
              />
            </p>
          </Link>
          <div className="absolute top-[3px]  ">Journey</div>
        </div>
        <div className="relative ">
          <Link disabled={true} to="">
            <p className="item flex items-center">
              <img
                className="w-1/2  h-1/2 m-auto  object-cover"
                src={roadImg}
              />
            </p>
          </Link>
          <div className="absolute top-[3px]  ">Vehicle</div>
        </div>
        <div className="relative ">
          <Link disabled={true} to="">
            <p className="item flex items-center">
              <img
                className="w-1/2  h-1/2 m-auto  object-cover"
                src={personImg}
              />
            </p>
          </Link>
          <div className="absolute top-[3px]  ">Passenger</div>
        </div>
        <div className="relative ">
          <Link disabled={true} to="">
            <p className="item flex items-center">
              <img
                className="w-1/2  h-1/2 m-auto  object-cover"
                src={creditImg}
              />
            </p>
          </Link>
          <div className="absolute top-[3px]  ">Payment</div>
        </div>
      </div>
    </div>
  );
}
