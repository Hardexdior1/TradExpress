import React from "react";
import "../Styles/Section4.css";
import Watches from "./WatchData";
import testimonial1 from "../images/testimonial-3.jpg";
import manAirPod from "../images/man-airpods.jpg";
import watchFront from "../images/watch-front-home.png";
import Slider from "react-slick";
import rating from '../images/yellow star.jfif'
import testimonial2 from '../images/testimonial-4.jpg'

import '../Styles/Testimonial.css'

import quote from "../images/double-quote (1).jpg";

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



const Section4 = ({ change,change2}) => {
  return (  
    <div>
        
      <section className="section4">
        <div>
          <h1>
            <span>Pear-Watch</span> Products
          </h1>

          <p className="para">
            A smartwatch is a wearable computer in the form of a watch; modern
            smartwatches provide a local touchscreen interface for daily use.
          </p>
        </div>

        <div className="watchFlex watchFlex1">
          {Watches.map((eachItem) => {
            const { name, price, normalPrice, img, sale } = eachItem;

            return (
              <div className="watchSub" key={eachItem.id}>
                <div className="watchCarrier">
                  <img src={img} alt={name} />
                </div>
                <div>
                  <p className="name">{name}</p>

                  <div className="ratingWrap">
                  <img src={rating} alt="" />
                  <img src={rating} alt="" />
    <img src={rating} alt="" />
    <img src={rating} alt="" />
    <img src={rating} alt="" />

                  </div>

                  <p>
                    {" "}
                    <del>{normalPrice}</del>
                    <strong className="price">${price}</strong>
                  </p>

                  <button>Add to cart </button>
                  {sale ? <b className="sale">Sale</b> : ""}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="testimonials">
        <div className="check">
          <h4 >Testimonials </h4>
          <h1  className="change" ref={ change} >This Watch is amazing! affordable price </h1>
          <div className="quoteCarrier">
            <img src={quote} alt="quoteIcon" className="quote" />
          </div>
          <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>

          <div className="imgAndText">
            <div>
              <img src={testimonial1} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2" ref={change2} >John Carter</h5>
              <p>UX Designer </p>
            </div>
          </div>
        </div>

        <div className="satisfiedCarrier">
          <div className="subSatisfied">
            <img className="satisfied" src={manAirPod} alt="testimonial-img" />

            <img className="watchFront" src={watchFront} alt="watch-img" />
          </div>
        </div>
      </section> */}


      <section className="testimonials">
        <div className="">
         
          <div className="testimonial-slider">
          <h4 >Testimonials </h4>
          <h2 >This Watch is amazing! affordable price </h2>


      <Slider  {...settings} className="testimonialBox">
      
      <div>
         <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>
          <div className="imgAndText">
            <div>
              <img src={testimonial1} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2" ref={change2} >John Carter</h5>
              <p>UX Designer </p>
            </div>
          </div>
         </div>

         <div>
         <p>
            I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}
          </p>
          <div className="imgAndText">
            <div>
              <img src={testimonial2} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2" ref={change2} >Angela kidjo </h5>
              <p>Programmer  </p>
            </div>
          </div>
         </div>
          
      </Slider>
    </div>

          
        </div>

        <div className="satisfiedCarrier fullWidth">
          <div className="subSatisfied">
            <img className="satisfied" src={manAirPod} alt="testimonial-img" />

            <img className="watchFront" src={watchFront} alt="watch-img" />
          </div>
        </div>
      </section>
     <section className="nearByFlex">
      <section className="nearByWrap">
       
        <h1>Nearby Pear-Watch Stores</h1>
        <p>
          A smartwatch is a wearable computer in the form of a watch; modern
          smartwatches provide a local touchscreen interface for daily use.
        </p>

        <div className="btn">
        <button className="purchase2">Purchase Now</button>
        <button className="find">Find Nearby Stores </button>
        
        </div>
     
      </section>
      </section>
      
    </div>
  );
};

export default Section4;
