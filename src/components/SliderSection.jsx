import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Styles/SliderSection.css';

import Building1 from '/Images/Buildingds/1.png'
import Building2 from '/Images/Buildingds/2.png'
import Building3 from '/Images/Buildingds/3.png'
import Building4 from '/Images/Buildingds/4.png'
import Building5 from '/Images/Buildingds/5.png'
import Building6 from '/Images/Buildingds/6.png'


const SliderSection = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

                <div className="slide">
                    <img src={Building5} alt="Slide 5" className="slide-image" loading="lazy" />
                </div>

                <div className="slide">
                    <img src={Building6} alt="Slide 6" className="slide-image" loading="lazy" />
                </div>
                
            </Slider>
        </div>

        <div className="navigation-buttons">
            <button onClick={goToPrevSlide}> &lt; السابق</button>
            
            <button onClick={goToNextSlide}>التالي &gt;</button>
        </div>
    </div>
  );
}

export default SliderSection;