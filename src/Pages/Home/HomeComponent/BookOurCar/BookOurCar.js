import React, { useEffect, useState } from "react";

export default function BookOurCar() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("wellcomedata.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className=" text-center   px-2 lg:px-10 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px  text-lg font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
          WHAT WE OFFER
          </p>
        </div>
        <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
        Book Our Cars
        </h2>
        <p className=" text-center flex text-md justify-center items-center leading-1.5    ">
        Jannah Express provides a diverse fleet of vehicles to meet your transportation needs. We have you covered whether you need a compact car for a solo trip or a large vehicle for a group of people. Our extensive inventory includes a wide range of quality vehicles, so that you can find the perfect ride for any occasion.
        </p>
      </div>

      <div className="grid  w-full grid-cols-1 lg:grid-cols-5 gap-5">
        {services?.map((item) => (
          <div
            key={item._id}
            className=" p-5 cursor-pointer w-full rounded-xl  pb-6 bg-slate-100 text-center border border-gray-600  "
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4     sm:w-12 sm:h-12">
              <img src={item?.icon} alt="" />
            </div>
            <h6 className="mb-2   font-bold text-green-800 text-xl leading-5 tracking-wider  hover:underline uppercase">
              {item?.name}
            </h6>
            <div className="mb-2 text-gray-700">{item?.about}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
