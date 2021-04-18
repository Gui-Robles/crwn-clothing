import React, { useState } from "react";

import ImgComponent from "../carousel-images/carousel-images.components";

import i1 from "../../assets/imgs/1.jpg";
import i2 from "../../assets/imgs/2.jpg";
import i3 from "../../assets/imgs/3.jpg";
import i4 from "../../assets/imgs/4.jpg";

import "./carousel.styles.scss";

const CarouselSlider = () => {
  let sliderArr = [
    <ImgComponent src={i1} />,
    <ImgComponent src={i2} />,
    <ImgComponent src={i3} />,
    <ImgComponent src={i4} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        &#10094;
      </button>
      <button id="goRight" onClick={goRight}>
        &#10095;
      </button>
    </div>
  );
};

export default CarouselSlider;
