import React from "react";

export default function DettailsVihicles() {
  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url("https://jannahexpress.co.uk/wp-content/uploads/2022/04/2021-mercedes-benz-e-class-e-450_100768065_h-scopy-1536x598.jpg")`,
        }}
      >
        <div className="absolute -bottom-10 py-10  shadow-2xl bg-base-100 rounded-sm">
          <h2 className="text-4xl text-green-950 font-bold text-center px-10">
            For Booking Call Now :- 02038842869
          </h2>
        </div>
      </div>

      <div className="px-4 mt-24 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" text-cente">
          <img src="https://jannahexpress.co.uk/wp-content/uploads/2022/04/PikPng.com_carro-png_2728602.png" />

          <div className="grid grid-cols-1 my-6  lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-lg  text-gray-400 font-bold ">
                Business Premium
              </h4>
              <h2 className="text-green-950 text-xl font-semibold mb-3">
                MERCEDES-BENZ E-CLASS
              </h2>
              <span className="w-16   rounded-lg h-1 bg-green-600 block"></span>
              <p>
                Executive level chauffeur car for all types of business trips
                and airport transfers.
              </p>
            </div>
            <div>
              <p className="flex justify-between items-center text-gray-500 font-semibold mb-3">
                {" "}
                Hourly rate (Minimum 3 hours) <span>£ 50</span>
              </p>
              <p className="flex justify-between items-center text-gray-500 font-semibold mb-3">
                {" "}
                Daily rate (Minimum 8 hours) <span>£ 50</span>
              </p>
              <p className="flex justify-between items-center text-gray-500 font-semibold mb-3">
                Heathrow to Central London<span>£ 50</span>
              </p>
            </div>
          </div>
          <h3 className="text-xl my-16 text-center">SCROLL TO FIND OUT MORE</h3>
        </div>

        <div>
          <h2 className="text-green-950 text-xl font-semibold mb-3">
            MERCEDES-BENZ E-CLASS
          </h2>
          <span className="w-16   rounded-lg h-1 bg-green-600 block"></span>

          <h2 className="text-xl font-semibold text-gray-400">DESCRIPTION</h2>
          <p className="text-gray-400 text-xs mb-5">
            The luxurious but company Mercedes E-class which we offer as our
            business premier is the vehicle most used for our executive car
            service. All of our Mercedes E-class come in discreet colours
            offering the same customer service as our Mercedes S-class. All of
            chauffeurs are trained, vetted and have taken a knowledge test to
            allow us to provide you with the best possible service.
          </p>

          <h2 className="text-green-950 text-xl font-semibold mb-3">
            FEATURES OF OUR MERCEDES-BENZ E-CLASS VEHICLES
          </h2>
        </div>
      </div>

      <div
        className=" h-20"
        style={{
          backgroundImage: `url("https://jannahexpress.co.uk/wp-content/uploads/2022/04/444-1536x598.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
      </div>


   <div className="px-4 mt-24 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"> 
      <h2  className="text-xl font-semibold text-gray-400">SERVICES AVAILABLE</h2>
      <p className="text-sm my-3">Jannah Express chauffeurs are proud to provide our services such as our chauffeur-driven service across London and then throughout the whole UK. We can even travel to Europe if required by the client.</p>
      <h2 className="text-xl font-semibold text-gray-400">OUR SERVICES WITH MERCEDES-BENZ E-CLASS INCLUDE BUT ARE NOT LIMITED TO:</h2>
      
      
      
       <div  className=" grid grid-cols-1 my-10 lg:grid-cols-2 gap-10">

        <div className="bg-base-100 shadow-lg  p-16  "> 
          <h2 className="text-xl font-semibold mb-2">AS DIRECTED CHAUFFEUR SERVICE</h2> 
          <p className="text-xs">Jannah Express Chauffeur can provide you with a MERCEDES-BENZ E-CLASS chauffeur service on the chauffeur-driven as directed service allowing you to explore multiple destinations without the chauffeur leaving your site.</p>
        </div>
        <div className="bg-base-100 shadow-lg  p-16  "> 
          <h2 className="text-xl font-semibold mb-2">AIRPORT TRANSFERS</h2> 
          <p className="text-xs">Allows us to transport to the airport in a stylish MERCEDES-BENZ E-CLASS with your favourite Newspaper, Magazine and even your favourite Alcohol ensuring a full luxurious experience.</p>
        </div>
        <div className="bg-base-100 shadow-lg  p-16  "> 
          <h2 className="text-xl font-semibold mb-2">
CORPORATE SERVICE</h2> 
          <p className="text-xs">Require a discreet, professional and smart car service or chauffeur service for your company, let Jannah Express chauffeur take care of your clients and your staff ensuring they travel in luxury, comfort and discretion.</p>
        </div>
        <div className="bg-base-100 shadow-lg  p-16  "> 
          <h2 className="text-xl font-semibold mb-2">AS DIRECTED CHAUFFEUR SERVICE</h2> 
          <p className="text-xs">Jannah Express Chauffeur can provide you with a MERCEDES-BENZ E-CLASS chauffeur service on the chauffeur-driven as directed service allowing you to explore multiple destinations without the chauffeur leaving your site.</p>
        </div>

       </div>
      
      
      
      
         </div>

    </>
  );
}
