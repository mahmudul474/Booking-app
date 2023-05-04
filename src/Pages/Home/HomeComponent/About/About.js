import React from "react";
import AboutOurCompany from "./About-ourCompany/AboutOurCompany";

export default function About() {
  return (
    <div className="px-5">
      <div className="  border-gray-400 p-7 rounded-2xl border-2 text-center w-full">
        <a
          href="tel:02038842869"
          className="text-xl hover:underline text-green-950 font-bold "
        >
          For booking please call : 02038842869
        </a>
      </div>

      <div className="grid grid-cols-3 gap-5 my-2">
        <div className=" py-5 rounded-2xl text-center flex-col flex justify-center items-center border-2 border-gray-400">
          <span className="mb-3">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/618nzH4/firefighter.png"
              alt=""
            />
          </span>
          <h4
            className="text-md font-bold text-green-950
        "
          >
            Cash booking is £5 less than card booking.
          </h4>
        </div>
        <div className=" py-5 rounded-2xl  text-center flex-col flex justify-center items-center border-2 border-gray-400">
          <span className="mb-3">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/BZSWgKV/sedan.png"
              alt=""
            />
          </span>
          <h4
            className="text-md font-bold text-green-950
        "
          >
            Silver, Golden, Diamond and Platinum categories with special
            discount.
          </h4>
        </div>
        <div className=" py-5 rounded-2xl text-center flex-col flex justify-center items-center border-2 border-gray-400">
          <span className="mb-3">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/T0rJdzJ/networking.png"
              alt=""
            />
          </span>
          <h4
            className="text-md font-bold text-green-950
        "
          >
            Special discount on referrals.
          </h4>
        </div>
      </div>

      <div className="  border-gray-400 p-7 rounded-2xl border-2 text-center w-full">
        <a
          href="tel:02038842869"
          className="text-xl   text-green-950 font-bold "
        >
        Congestion fee: £15 is applicable for any journey through congestion zone and time.
        </a>
      </div>




    <div>

        <AboutOurCompany></AboutOurCompany>
    </div>

    </div>
  );
}
