import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Styles/SliderSection.css';

import Building1 from '/Images/Buildingds/01 Logo Mockup - by PuneDesign.png'
import Building2 from '/Images/Buildingds/3d glass window logo mockup.png'
import Building3 from '/Images/Buildingds/REPLACE THIS SCREEN1111112.png'
import Building4 from '/Images/Buildingds/REPLACE THIS.png'


const SliderSection = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="background-slide">
        <div>
            <Slider ref={sliderRef} {...settings}>
                <div className="slide">
                  <img src={Building1} alt="Slide 1" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                  <img src={Building2} alt="Slide 2" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                  <img src={Building3} alt="Slide 3" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                  <img src={Building4} alt="Slide 4" className="slide-image" loading="lazy" />
                </div>
                
            </Slider>
        </div>

        <div className="navigation-buttons">
            <button onClick={goToPrevSlide}>&lt;</button>
            
            <button onClick={goToNextSlide}>&gt;</button>
        </div>
    </div>
  );
}

export default SliderSection;