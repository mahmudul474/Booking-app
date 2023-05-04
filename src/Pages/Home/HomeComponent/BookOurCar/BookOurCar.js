import React, { useEffect, useState } from "react";
import { BsArrowRight } from 'react-icons/bs';

export default function BookOurCar() {
  const [isloading, setIsloading] = useState(true);

  const [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    fetch("https://booking-server-devsobuj910.vercel.app/car")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setIsloading(false);
      });
  }, []);


   console.log(cars)


  if (isloading) {
    return (
      <div class="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

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
          Jannah Express provides a diverse fleet of vehicles to meet your
          transportation needs. We have you covered whether you need a compact
          car for a solo trip or a large vehicle for a group of people. Our
          extensive inventory includes a wide range of quality vehicles, so that
          you can find the perfect ride for any occasion.
        </p>
      </div>

      <div className="grid  w-full grid-cols-1 lg:grid-cols-5 gap-5">
        {cars?.map((car) => (
          <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             {
                car?.carImg ?<img
                class="rounded-t-lg"
                className="h-52 w-full object-cover rounded-md"   src={car?.carImg}
                alt=""
              />:""
             }
            <div class=" pl-2 text-left mb-6 ">
               
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {car?.carName}
                </h5>
             
              <p class="mb-3 font-normal flex  items-center text-gray-700 dark:text-gray-400">
               <span className="mr-2 text-green-950"><BsArrowRight></BsArrowRight></span> {car?.seat} Passengers
              </p>
              <p class="mb-3 font-normal flex  items-center text-gray-700 dark:text-gray-400">
               <span className="mr-2 text-green-950"><BsArrowRight></BsArrowRight></span> {car?.bag} Check-in Luggage
              </p>
              <p class="mb-3 font-normal flex  items-center text-gray-700 dark:text-gray-400">
               <span className="mr-2 text-green-950"><BsArrowRight></BsArrowRight></span>  Mobile Phone Charger
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-950 rounded-lg hover:bg-green-950 focus:ring-4 focus:outline-none   dark:bg-green-950 dark:hover:bg-green-950  "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
