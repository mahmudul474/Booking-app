import React from "react";
import airplane from "./asseats/airplane-1.png";
import lock from "./asseats/padlock.png"
import compofort from "./asseats/comfort.png"
import affordable  from "./asseats/affordable.png"
import doctor from './asseats/home.png'
import driver from './asseats/driver.png'
import car from './asseats/used.png'
import calender from './asseats/calendar.png'
import customar from './asseats/customer-service.png'


export default function WhyChooseUs() {
  return (
    <div className=" text-center   px-2 lg:px-10 ">
      <div className="mb-10 ">
        <div>
          <p className="inline-block  text-green-950  px-3 py-px  text-lg font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            MAIN FEATURES
          </p>
        </div>
        <h2 className=" mb-6 font-sans text-5xl font-bold l   md:mx-auto">
          Why Choose Us?
        </h2>
        <p className=" text-center flex text-md justify-center items-center     ">
          With a focus on quality, reliability, and affordability, we’re
          confident that choosing Jannah Express will be the best decision you
          make for your transportation needs. From our well-maintained vehicles
          and professional drivers to our convenient booking options and
          commitment to customer satisfaction, we have everything you need for a
          smooth and stress-free ride.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={airplane}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
                Reliable Transportation
              </h2>
              <p className="text-gray-500 text-md font-semibold">
                Trust us to get you to your destination on time, every time.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={lock}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Safe And Secure


              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Our licensed drivers and well-maintained vehicles ensure a safe ride.              </p>
            </div>
          </div>
        </div>


        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={compofort }
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Comfortable Journey
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Enjoy a relaxing and stress-free journey.              </p>
            </div>
          </div>
        </div>


        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={affordable}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Affordable Prices
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Our competitive pricing makes us an affordable transportation option.


              </p>
            </div>
          </div>
        </div>


        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={doctor}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Door-To-Door Service
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              We'll pick you up from anywhere with our Gatwick airport taxi and drop you off at your doorstep.              </p>
            </div>
          </div>
        </div>



        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={driver}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Professional Drivers
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Our drivers are knowledgeable and dedicated to providing the best possible experience.

</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={car}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Wide Range Of Vehicles
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Choose the perfect ride for your needs
</p>
            </div>
          </div>
        </div>


        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={calender}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Easy Booking
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Book your ride in just a few clicks.
</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex mb-8   flex-col lg:flex-row text-center text-white  justify-start items-center">
            <span className="text-white mr-2 w-14  ">
              <img
                className=" text-white   object-cover"
                alt=""
                src={customar}
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
              Exceptional Customer Service
              </h2>
              <p className="text-gray-500 text-md font-semibold">
              Our team is always here to assist you.

</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
