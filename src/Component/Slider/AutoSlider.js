import React, { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/xYz05rL/WRRPslidewqr12.jpg",
  "https://i.ibb.co/sb4rvj5/image-1.jpg",
  "https://i.ibb.co/yphG398/maxresdefault-1.jpg",
];

const AutoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  h-full">
      <img className="max-w-full h-[590px] " src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
    </div>
  );
};

export default AutoSlider;
