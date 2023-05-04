import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function AboutOurCompany() {
  return (
    <div className="  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl    lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="h-[500px]">
          <img
            className="object-cover w-full max-h-full  rounded shadow-lg  "
            src="https://i.ibb.co/SKdyZH9/photo-1550355291-bbee04a92027-ixlib-rb-4-0.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center py-6">
          <div className="max-w-xl mb-6">
            <h4 className="max-w-lg mb-6   text-xl   tracking-tight  text-green-950    ">
              ABOUT OUR COMPANY
            </h4>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Your Trusted London Taxi Service Partner
            </h2>
            <p className="text-base text-gray-400 md:text-md">
              Jannah Express is a leading provider of airport taxi service,
              established with the goal of delivering highly reliable and
              convenient transportation to our customers. With years of
              experience and a commitment to quality, we have built a reputation
              for delivering exceptional service with every ride. If you’re
              looking for an airport taxi in London and surrounding areas, we’re
              your provider!
            </p>
          </div>
          <div className=" flex  justify-start   flex-col lg:flex-row lg:items-center items-start ">
            <div className="bg-white ">
              <div className="h-full    ">
                <h6 className="mb-2 font-semibold leading-5 text-green-950">
                  STARTED JOURNEY
                </h6>
                <p className="text-5xl font-sans  font-bold  text-green-950">
                  2023
                </p>
              </div>
            </div>
          <div className="flex flex-col lg:ml-4 my-2 ">
          <div className="bg-white     ">
              <p className=" font-semibold text-md text-gray-900 flex items-center">
                <span className="mr-2">
                  <FiArrowRightCircle></FiArrowRightCircle>
                </span>
                Safe and Efficient Journey Guaranteed
              </p>
            </div>
            <div className="bg-white     ">
              <p className=" font-semibold text-md text-gray-900 flex items-center">
                <span className="mr-2">
                  <FiArrowRightCircle></FiArrowRightCircle>
                </span>
                Comfortable Vehicles for a Relaxing Ride

              </p>
            </div>
            <div className="bg-white     ">
              <p className=" font-semibold text-md text-gray-900 flex items-center">
                <span className="mr-2">
                  <FiArrowRightCircle></FiArrowRightCircle>
                </span>
                
Highly Professional and Courteous Drivers
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
