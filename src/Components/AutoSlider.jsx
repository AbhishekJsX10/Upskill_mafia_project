import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AutoSlider = () => {
    const settings = {
        dots: false, // Disable pagination
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

      };
    
    
  return (
    <div className="slides">
        <h1>Top Companies Hiring <span>Data Scientist</span></h1>
    <div className="slider-container">
      <Slider {...settings} className='slider'>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
        <div className="sliderCards"><p>LOGO</p></div>
      </Slider>
    </div>
    </div>
  )
}

export default AutoSlider