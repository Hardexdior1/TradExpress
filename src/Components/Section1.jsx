import React, { useEffect, useState } from 'react'
import '../Styles/Hero.css'
import slide2 from '../images/slide-2.png'
import slide1 from '../images/section01-img02.png'
const Section1 = () => {
    const[showSlide,setShowSlide]=useState(true)

    useEffect(()=>{
      const interval= setInterval(()=>{
            setShowSlide(!showSlide)

        },3000)
        return()=>{
            clearInterval(interval)
        }
    })
  return (
    <div className="section1Carrier">
        {showSlide?<section className="section">
            <div className="first ">

                <h3>Be online always and everywhere </h3>
                    <h2 className='white'  >For all Seasons </h2>
                    <h1>Any Circumstances </h1>

                    <div className='btnCarrier'>
                        <button className="purchase">
                            Purchase Now 
                        </button>

                        <button className="watch">
                            Watch Video 
                        </button>

                    </div>
            
            </div>

            <div className="section1ImgCarrier">
                <img src={slide2} alt="slide-img" />
                
            </div>

        </section>: <section className="section">
            <div className="first" >

                <h3>Skip the impossible  </h3>
                    <h2  >Extraordinery</h2>
                    <h1>Performance </h1>

                    <div className='btnCarrier'>
                        <button className="purchase">
                            Purchase Now 
                        </button>

                        <button className="watch">
                            Watch Video 
                        </button>

                    </div>
            
            </div>

            <div className="section1ImgCarrier">
                <img src={slide1} alt="slide-img" />
                
            </div>

        </section>}
        

       
    </div>
  )
}

export default Section1