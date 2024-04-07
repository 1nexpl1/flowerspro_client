import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import "slick-carousel/slick/slick.css";
import CustomSlide from './CustomSlide';
import CustomArrNext from './CustomArrNext';
import s from './Slick.module.css'
import CustomArrBefore from './CustomArrBefore';
import CustomDots from './CustomDots';

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrNext />,
        prevArrow: <CustomArrBefore />,
        appendDots: dots => (
            <div>
              <ul style={{ width: '98%', margin: "auto", top: '-45px', display: 'flex',justifyContent: 'space-around', left: '20px'  }}> {dots} </ul>
            </div>
          )
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <CustomSlide/>
            <CustomSlide/>
            <CustomSlide/>
            <CustomSlide/>
            <CustomSlide/>
          </Slider>
        </div>
      );
}

export default Slick