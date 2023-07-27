import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ProfationalDriver() {
  return (
    <div
      className="relative bg-fixed text-center  flex justify-center items-center bg-cover bg-center h-96"
      style={{
        backgroundImage: `url("https://i.ibb.co/jRbqX43/photo-1619330193424-e6a670798b9e-ixlib-rb-4-0.jpg")`,
      }}
    >
      <div className="absolute bg-gradient-to-r from-indigo-500 bg-green-950 bg-opacity-60"></div>
      <div className="text-white bg-opacity-95">
        <h1 className="text-5xl font-sans font-bold my-2">
          Book your professional driver
        </h1>
        <h4 className="text-md text-center text-lg mb-2">
        Contact our representative by completing the form. A member of our team will get in touch with you.
        </h4>
        <button className="bg-opacity-95 bg-green-950  btn text-white hover:bg-green-600 ">
          Book Now{" "}
          <span className="text-xl ml-2">
            <BsArrowRight></BsArrowRight>
          </span>
        </button>
      </div>
    </div>
  );
}
