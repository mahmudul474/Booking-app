import React from "react";

export default function OurBenifits() {
  return (
    <div className=" text-center   px-2 lg:px-10 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block  text-green-950  px-3 py-px  text-lg font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            MAIN FEATURES
          </p>
        </div>
        <h2 className=" mb-6 font-sans text-5xl font-bold l   md:mx-auto">
          Our Benefits
        </h2>
        <p className=" text-center flex text-md justify-center items-center leading-1.5    ">
          Jannah Express provides a diverse fleet of vehicles to meet your
          transportation needs. We have you covered whether you need a compact
          car for a solo trip or a large vehicle for a group of people. Our
          extensive inventory includes a wide range of quality vehicles, so that
          you can find the perfect ride for any occasion.
        </p>
      </div>

      <div className="grid gap-2   grid-cols-1 lg:grid-cols-3">
        <div className="">


          <div className="flex mb-8  text-white  justify-start items-center">
            <span className="rounded-full bg-green-950 text-white mr-2 w-14  ">
              <img
                className=" text-white rounded-full p-3 object-cover"
                alt=""
                src="https://i.ibb.co/0tK6H5x/clock-2.png"
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
                Time-Saving
              </h2>
              <p className="text-gray-500 text-md font-semibold">
                No more waiting in line or trying to find parking.
              </p>
            </div>
          </div>


          <div className="flex mb-8  text-white  justify-start items-center">
            <span className="rounded-full bg-green-950 text-white mr-2 w-14   ">
              <img
                className=" text-white rounded-full p-3 object-cover"
                alt=""
                src="https://i.ibb.co/VqXC29V/happiness-1.png"
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
                Stress-Free
              </h2>
              <p className="text-gray-500 text-md font-semibold">
                Leave the driving to us and sit back, relax, and enjoy the ride.{" "}
              </p>
            </div>
          </div>


          <div className="flex mb-8  text-white  justify-start items-center">
            <span className="rounded-full bg-green-950 text-white mr-2 w-14 ">
              <img
                className=" text-white rounded-full p-3 object-cover"
                alt=""
                src="https://i.ibb.co/9HNvyVq/folder-1.png"
              />
            </span>
            <div className="text-left">
              <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
                Convenient
              </h2>
              <p className="text-gray-500 text-md font-semibold">
                Book your ride in advance or on-demand, and we'll handle the
                rest.
              </p>
            </div>
          </div>
        </div>


        <div>
          <img
            className="w-full h-full"
            alt=""
            src="https://i.ibb.co/99WFDGH/Untitled-1-01-1-1536x1152.jpg"
          />
        </div>
        <div className="">



        <div className="flex mb-8  text-white  justify-start items-center">
  <span className="rounded-full bg-green-950 text-white mr-2 w-14 ">
    <img
      className=" text-white rounded-full p-3 object-cover"
      alt=""
      src="https://i.ibb.co/tMyc61Q/car.png"
    />
  </span>
  <div className="text-left">
    <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
    Affordable Luxury
    </h2>
    <p className="text-gray-500 text-md font-semibold">
    Enjoy a high-quality ride without breaking the bank.
    </p>
  </div>
</div>

<div className="flex mb-8  text-white  justify-start items-center">
  <span className="rounded-full bg-green-950 text-white mr-2 w-14  ">
    <img
      className=" text-white rounded-full p-3 object-cover"
      alt=""
      src="https://i.ibb.co/xgSQk9D/crown.png"
    />
  </span>
  <div className="text-left">
    <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
    Safe and Secure
    </h2>
    <p className="text-gray-500 text-md font-semibold">
    Our drivers undergo thorough background checks, and our vehicles are well-maintained.
    </p>
  </div>
</div>


<div className="flex mb-8  text-white  justify-start items-center">
  <span className="rounded-full bg-green-950 text-white mr-2 w-14   ">
    <img
      className=" text-white rounded-full p-3 object-cover"
      alt=""
      src="https://i.ibb.co/Cwg20hJ/save-money.png"
    />
  </span>
  <div className="text-left">
    <h2 className="text-2xl mb-2 font-sans text-green-950 font-bold">
    
Efficient
    </h2>
    <p className="text-gray-500 text-md font-semibold">
    We take the most efficient routes to get you to your destination as quickly as possible.
    </p>
  </div>
</div>



</div>

      </div>
    </div>
  );
}
