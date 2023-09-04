import React from "react";
import "../Styles/ABout.css";
import watch from '../images/watch-about.jpg'
import watch2 from '../images/about-watch-3.jpg'
import testimonial1 from "../images/testimonial-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial2 from '../images/testimonial-4.jpg'

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="aboutWrap">
       <div className="aboutWrapSub">
       <h1>
          Get to Know us <span>better</span>
        </h1>

        <p>
          With over 27 years of experience, we have been providing exceptional
          watches services for commercial and residential properties throughout
          Bellingham. If you're looking for any type of plumbing repairs,
          installations or replacements, About watches is the company to call.
          We provide FREE estimates if you live in the local area. Call us today
          to learn more about our senior citizen and military personnel
          discounts.

        </p>

        <div className="inputFlex">
          <div className="inputFlexSub">
            
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Best Watch Quality </h1>
            </div>
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Watches Service </h1>
            </div>
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Free internet Service  </h1>
            </div>

          </div>

          <div className="inputFlexSub">
            
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Modern Accessories </h1>
            </div>
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Watches in Colors </h1>
            </div>
            <div className="textAndInputFlex">
            <div className="eachInput">
              <input className='input' type="checkbox" checked />
            </div>
            <h1>Free app installation </h1>
            </div>

          </div>

        </div>
       </div>

       <div className="bestWatchCarrier">

  <img className="best-Watch" src={watch} alt="best-watch" />

<div className="seeAll">
<h3>See all the New Watches </h3>

<p>professional affordable and we always leave the seat down </p>
</div>
    

       </div>
      </section>



      <section className="aboutWrap reverse">
       

       <div className="bestWatchCarrier">

  <img className="best-Watch" src={watch2} alt="best-watch" />


    

       </div>
       <div className="aboutWrapSub">
       <h1>
          We are expert in <span>Watches</span> 
        </h1>

        <p>
          With over 27 years of experience, we have been providing exceptional
          watches services for commercial and residential properties throughout
          Bellingham. If you're looking for any type of plumbing repairs,
          installations or replacements, About watches is the company to call.
       
        </p>
        <div className="ratingWrap2">

         <div>
         <div className="flexRate">
            <h3>Watches Quality </h3>
            <div >
              <button>99%</button>
            </div>
          </div>
          <div className="lineCarrier">
            <div className="width1 width"></div>
          </div>
         </div>

         <div>
         <div className="flexRate">
            <h3>Guarantee and Support  </h3>
            <div >
              <button>98%</button>
            </div>
          </div>
          <div className="lineCarrier">
            <div className="width2 width"></div>
          </div>
         </div>
         <div>
         <div className="flexRate">
            <h3>Other watches services  </h3>
            <div >
              <button>65%</button>
            </div>
          </div>
          <div className="lineCarrier">
            <div className="width3 width"></div>
          </div>
         </div>
        </div>

   
       </div>
      </section>
  
  <section className="factWrap">

  <div className="fact">
    
    <div className="line">
    <h2>our facts and figures </h2>
    </div>

  </div>
  <div className="figureBg">
    <p>You can trust our watches and quality and professionalism of our products  </p>

    <div className="numbersFlex">
    <div>
      <h1>27</h1>

      <button>Years of experience </button>
    </div>

    <div>
      <h1>34</h1>

      <button>Expert Supports  </button>
    </div>
    <div>
      <h1>16</h1>

      <button>Awards Winners  </button>
    </div>
    <div>
      <h1>800</h1>

      <button>Happy Clients </button>
    </div>

    </div>

  </div>

  </section>

  <section className="joinWrap">
    
<div>
  <h1>Join our <span>happy customers</span> </h1>
  <p>You can trust our watches and the quality and professionalism of our products.</p>

</div>

<Slider {...settings} className="slider-carrier">


<div className="slider">
  <h1>This Watch is amazing affordable price </h1>

  <p> I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}</p>
            <div className="imgAndText2">
            <div>
              <img src={testimonial1} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2"  >John Carter</h5>
              <p>UX Designer </p>
            </div>
          </div>
</div>
<div className="slider">
  <h1>This Watch is amazing affordable price </h1>

  <p> I don't always clop, but when i do, it's because of pear watch. pear
            watch has really helped me. i STRONGLY recommend pear watch to
            EVERYONE interested in fashion&tech This is simply unbelievable{" "}</p>

            <div className="imgAndText2">
            <div>
              <img src={testimonial2} alt="testimonial-img" />
            </div>

            <div>
              <h5 className="change2"  >Angela kidjo</h5>
              <p>UX Designer </p>
            </div>
          </div>
</div>

</Slider>


  </section >
    </div>
  );
};

export default About;
