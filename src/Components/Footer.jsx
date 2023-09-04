import React from "react";
import '../Styles/Footer.css'
import logo from '../images/extraWatch.PNG'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="div">
         <div>
          <img src={logo} alt="logo-img" />
         </div>

         
            <p>
              A smartwatch is a wearable computer in the form of a watch; modern
              smartwatches provide a local touchscreen interface for daily use.
            </p>
          
        </div>

        <div className="flexLink">
        <div className="div" >
          <h3>Menu</h3>

          <div className="div2">
          <Link to='/' path='/'>Home</Link>
          <Link to='/WatchPage'>Watches </Link>
          <Link to='/About'>About  </Link>


          
            <a href="">Categories</a>
          </div>
        </div>

        <div className="div">
          <h3>Support</h3>

            <div className="div2">
            <Link to='/Faq'>FAQs </Link>

          
          <a href="">Terms & Conditions </a>
          <a href="">Privacy policy </a>
            <a href="">Report </a>
          </div>
        </div>

        <div className="div">
          <h3>Stay in Touch </h3>
        
        <div className="div2">
        <button >Email address</button>
         <button>Subscribe</button>
        </div>
          
        
        </div>

        </div>

       
      </footer>
    </div>
  );
};

export default Footer;
