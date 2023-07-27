import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assates/admin-ajax-copy-1-1.jpg"
import img2 from "./assates/admin-ajax-copy2-1-1.jpg"
import img3  from "./assates/ap_southend.jpg"
import img4 from "./assates/client_01.jpg"
import img5 from "./assates/client_02-1.jpg"
import img6 from "./assates/client_03-1.jpg"
import img7 from "./assates/client_05-1-1.jpg"

 
import { FcNext, FcPrevious } from "react-icons/fc";



const Sponser= () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const cardData = [
    {
      id: 1,
      title: "Card 1",
       
      img:img1
    },
    {
      id: 2,
      title: "Card 2",
       
      img:img2
    },
    {
      id: 3,
      title: "Card 3",
       
      img:img3
    },
    {
      id: 4,
      title: "Card 4",
       
      img:img4
    },
    {
      id: 5,
      title: "Card 5",
       
      img:img5
    },
    {
      id: 6,
      title: "Card 6",
       
      img:img6
    },
    {
      id: 7,
      title: "Card 7",
       
      img:img7
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: "1023px", // screen size for small devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: "1024px", // screen size for larger devices
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
    responsive: responsiveSettings,
  };
  return (
    <div className="px-10 ">
      <Slider {...settings} ref={sliderRef}>
        {cardData.map((card) => (
          
<div class="w-full max-w-sm bg-white py-4 my-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="mr-4">
        <img src={card.img} alt="company"/>
    </div>
</div>

        ))}
      </Slider>
       
    </div>
  );
};

export default Sponser
