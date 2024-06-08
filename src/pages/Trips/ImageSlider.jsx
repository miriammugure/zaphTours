import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Trips.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const moveRight = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sliderStyles">
      <div className="leftarrow" onClick={moveLeft}>
        <FaArrowAltCircleLeft />
      </div>
      <div
        className="ImageBox"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>
      <div className="rightarrow" onClick={moveRight}>
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
}

export default ImageSlider;
