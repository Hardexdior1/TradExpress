import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Check from "./Check";
import img from '../images/man-airpods.jpg'


import '../Styles/Testimonial.css'
const Testimonial = () => { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial-slider">
          <div >
          <h4 >Testimonials </h4>
          <h1 >This Watch is amazing! affordable price </h1>


      <Slider  {...settings} className="testimonialBox">
      <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>

          <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>
      </Slider>
          </div>
          
    </div>
  );
};

export default Testimonial;
