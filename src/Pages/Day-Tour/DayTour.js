import React, { useEffect, useState } from "react";
import bg from "./assats/bg.jpg";
import { AiFillRightCircle } from "react-icons/ai";
import ProfationalDriver from "./BookProfatinalDraiver/ProfationalDriver";
import Sponser from "../../Shared/Sponser/Sponser";

export default function DayTour() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("daytour.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="bg-slate-200 py-5">
        <div className="  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="bg-green-950  my-9 text-center text-white">
            <h1 className="text-5xl font-sans py-3 ">
              Chauffeur Driven Sightseeing Tour
            </h1>
          </div>

          <div className="border order-3 rounded-lg border-black p-3">
            <h4 className="text-xl  text-center px-16">
              We are specialised in private full day tour service in london. We
              also focus on city tours, sightseeing tours, visiting historical
              places, theme park tours and shopping outlet journeys. Our motto
              is to provide our passengers with a comfortable and satisfactory
              tour experience. Our private chauffeur vehicle and driver at
              passengers’ disposal make their journey safe and sound throughout
              the day. We don’t include tickets to the attractions and tour
              guides in this service. We serve both layover (less than 24 hours)
              and stopover (24 hours or more) services while transferring to any
              destination and return the passengers to the cruise port, airport
              or any specific address in time. We earnestly request to book in
              advance, so that there is no saddening or let-down situation at
              the last moment just because of our unavailability during the busy
              time of summer holidays and others.
            </h4>

            <div className="flex flex-col my-10   justify-center lg:justify-between items-center ">
              <div className="flex  text-left flex-col lg:flex-row">
                <p className="flex mr-5 text-xl  items-center ">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Bath (Roman Bath)
                </p>
                <p className="flex   mr-5 text-xl  items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Cambridge Town
                </p>
                <p className="flex mr-5 text-xl   items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Hampton Court Palace
                </p>
                <p className="flex mr-5 text-xl   items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Cambridge Town
                </p>
              </div>
              <div className="flex  text-left flex-col lg:flex-row">
                <p className="flex mr-5 text-xl  items-center ">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Bath (Roman Bath)
                </p>
                <p className="flex   mr-5 text-xl  items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Cambridge Town
                </p>
                <p className="flex mr-5 text-xl   items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Hampton Court Palace
                </p>
                <p className="flex mr-5 text-xl   items-center">
                  <span className="text-2xl mr-2">
                    <AiFillRightCircle></AiFillRightCircle>
                  </span>
                  Cambridge Town
                </p>
              </div>
            </div>

            <h4 className="text-xl text-center  my-5">
              Our prices are very competitive and you are guaranteed to have
              cheapest and most comfortable trip.
            </h4>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center  text-5xl  font-bold my-5">
          Day Tour Service In London
        </h1>
      </div>

      <div className="bg-slate-200">
        {products?.map((product) => (
          <div
            key={product._id}
            className="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
          >
            <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden">
              <div className="sm:w-1/4 px-3 my-auto">
                <img
                  src={product.img && product.img}
                  alt="Placeholder"
                  className="w-100"
                />
              </div>
              <div className="sm:w-1/2 p-4">
                <h2 className="text-md font-bold mb-2 text-center">
                  {product.title}
                </h2>
                <hr />
                <p className="text-gray-700">{product.about}</p>
                <h2 className="text-md font-bold my-4 text-red-700 text-center">
                  {product.distraction}
                </h2>
              
              </div>
              <div className="sm:w-1/4  bg-green-950 text-center p-4">
                <h2 className="text-2xl mb-2 text-white font-bold">
                  Price Starts from
                </h2>
                <p className="font-bold text-5xl text-green-500 mb-2">
                  {" "}
                  £{product.price}
                </p>
                <h2 className="text-2xl mb-2 text-white font-bold">
                  For Booking please Call
                </h2>
                <h2 className="text-2xl mb-2 text-white font-bold">
                  {product.phone}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>


 
 <div className=" relative bg-green-950 mb-10">

<ProfationalDriver></ProfationalDriver>

<div className="">
  <Sponser></Sponser>
</div>

 </div>


    </>
  );
}
