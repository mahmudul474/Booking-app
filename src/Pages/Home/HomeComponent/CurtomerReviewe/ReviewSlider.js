import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrows, { PrevArrow, NextArrow } from "./SliderArrows";
import { FcNext, FcPrevious } from "react-icons/fc";



const ReviewSlider = () => {
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
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is a card component for the slider",
      img:'https://i.ibb.co/rMSBX1q/6769264-60111-1536x1536.jpg'
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
    prevArrow: <SliderArrows arrowType="prev" />,
    nextArrow: <SliderArrows arrowType="next" />,
    responsive: responsiveSettings,
  };
  return (
    <div className="px-10 ">
      <Slider {...settings} ref={sliderRef}>
        {cardData.map((card) => (
          
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
       
        <span className="w-14 ">
            <img alt="" src="https://i.ibb.co/vsnSz1b/quote.png"/>
        </span>
       
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={card?.img}/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>


        <div class="flex space-x-3 my-3">
          
          <div class="flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          
                  </div>

        <span class="text-sm text-center text-gray-500 dark:text-gray-400">"We have used this taxi service before and have had the same great service"</span>
       
    </div>
</div>

        ))}
      </Slider>
      <div className="button-container mt-10 px-5 flex justify-between items-center">
        <button className="btn bg-green-900 hover:bg-green-900" disabled={currentSlide === 0} onClick={prevSlide}>
       <FcPrevious></FcPrevious>
        </button>
        <button className="btn bg-green-900 hover:bg-green-900"
          disabled={currentSlide === cardData.length - settings.slidesToShow}
          onClick={nextSlide}
        >
          <FcNext></FcNext>
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
