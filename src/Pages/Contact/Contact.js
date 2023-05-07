import React, { useEffect } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";
import { BsFacebook, BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import DefoultMap from "./Componenet/Map/DefoultMap";
import Sponser from "../../Shared/Sponser/Sponser";

export default function Contact() {



    useEffect(() => {
        function reloadOnce() {
          if (!reloaded) {
            reloaded = true;
            window.location.reload(false);
          }
        }
    
        let reloaded = false;
        window.addEventListener('beforeunload', reloadOnce);
    
        return () => {
          window.removeEventListener('beforeunload', reloadOnce);
        };
      }, []);

   
  return (
   <> 
   <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="flex justify-center items-center w-screen   bg-white ">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">Contact Us</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-green-950 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>

          <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-green-950 rounded-2xl">
            <div class="flex flex-col text-white">
              <h1 class="font-bold uppercase text-2xl my-4">Contact Details</h1>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <i class="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <p class="text-white flex my-3 items-center justify-start">
                    <span className="mr-3 text-xl">
                      <BiMobile></BiMobile>
                    </span>
                    07555191074
                  </p>
                  <p class="text-white flex my-3  items-center justify-start">
                    <span className="mr-3 text-xl ">
                      <BsTelephoneFill></BsTelephoneFill>
                    </span>
                    02038842869
                  </p>

                  <p class="text-white flex my-3  items-center justify-start">
                    <span className="mr-3 text-xl ">
                      <AiTwotoneMail></AiTwotoneMail>
                    </span>
                    booking@jannahexpress.co.uk
                  </p>
                  <p class="text-white flex my-3  items-center justify-start">
                    <span className="mr-3 text-xl ">
                      <GoLocation></GoLocation>
                    </span>
                    449 High Street North, London E12 6TJ
                  </p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/jannahexpress"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full   h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <span className="text-3xl"><BsFacebook></BsFacebook></span>
                </a>
                <a
                  href="https://twitter.com/jannahexpress"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full   h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                   <span className="text-3xl"><BsTwitter></BsTwitter></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="relative">
<DefoultMap></DefoultMap>



<div className="hero  absolute bottom-0" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="  text-center  text-neutral-content my-12">
    <div className=" ">
      <h1 className="mb-1 text-5xl font-bold ">Book your professional driver</h1>
      <p className="my-3 text-xl">Contact our representative by completing the form. A member of our team will get in touch with you.</p>
      <button className="btn bg-green-950 hover:bg-green-950">Book now </button>
    </div>
  </div>
</div>
</div>

<div>
    <Sponser></Sponser>
</div>
    </>
  );
}
