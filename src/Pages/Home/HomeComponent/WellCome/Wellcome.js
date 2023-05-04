import React, { useEffect, useState } from "react";

export default function Wellcome() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("wellcomedata.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className=" text-center   px-2 lg:px-44 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px  text-lg font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            WHAT WE OFFER
          </p>
        </div>
        <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
          Welcome To Jannah Express
        </h2>
        <p className=" text-center flex justify-center items-center leading-1.5    ">
          At Jannah Express, we are highly dedicated to providing our clients
          with top-notch airport taxi service in London and the surrounding
          areas that meet their transportation needs. Our mission is to deliver
          a safe, comfortable, and hassle-free experience with every ride you
          take. By combining high-quality vehicles with knowledgeable and
          professional drivers, we aim to exceed our clients’ expectations at
          all times.
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
