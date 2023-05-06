import React from "react";

import Placefrom from "../../Component/PlaceFrom/Placefrom";
import AutoSlider from "../../Component/Slider/AutoSlider";
import HomePlaceinfo from "../../Component/HomePlaceInfo/HomePlaceinfo";
import Wellcome from "./HomeComponent/WellCome/Wellcome";
import About from "./HomeComponent/About/About";
import BookOurCar from "./HomeComponent/BookOurCar/BookOurCar";
import OurBenifits from "./HomeComponent/OurBenifits/OurBenifits";
import WhyChooseUs from "./HomeComponent/WhyChoosUS/WhyChooseUs";
import BookyoureCar from "./HomeComponent/BookYoureCar/BookyoureCar";
import ReviewSlider from "./HomeComponent/CurtomerReviewe/ReviewSlider";

function Home() {
  return (
    <>
      <div className="flex justify-center  lg:flex-row xl:flex-row md:flex-row  flex-col items-center h-[500px] ">
        <div className="w-full hidden lg:block md:block xl:block 2xl:block border-emerald-700">
          <AutoSlider></AutoSlider>
        </div>
        <div className="w-full h-full  border border-black overflow-y-scroll">
          <HomePlaceinfo></HomePlaceinfo>
        </div>
      </div>

      <div className="bg-green-950 text-white my-16 py-16">
        <Wellcome></Wellcome>
      </div>
      <div className="   px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <About></About>
      </div>
      <div className="  text-white  bg-green-950 py-16">
        <BookOurCar></BookOurCar>
      </div>
      <div className="   my-16 py-16  ">
        <OurBenifits></OurBenifits>
      </div>

       <div>
        <WhyChooseUs></WhyChooseUs>
       </div>

     <div className="   my-16 py-16  ">
      <BookyoureCar></BookyoureCar>
     </div>
     <div className="">
  <ReviewSlider></ReviewSlider>
     </div>


    </>
  );
}

export default Home;
