import React from "react";
import "../Styles/Contact.css";
import address from "../images/addressIcon.PNG";
import phone from "../images/phoneIcon.PNG";
import email from "../images/emailIcom.PNG";


         
        
         

         import emailBlue from '../images/emailBlue.PNG'
         import linkdnBlue from '../images/linkdnBlue.PNG'
         import twitterBlue from '../images/twitterBlues.PNG'
         import facebookBlue from '../images/facebookBlue.PNG'



const Contact = () => {
  return (
    <div>
      <div className="contactWrap">
        <h1>
          Get in touch <span>with us </span>{" "}
        </h1>

        <div className="flexAddress">
          <div className="eachAddCarrier">
            <img src={email} alt="emailIcon" />
            <h3>Email</h3>
            <p>adeniranquwam001@gmail.com</p>
          </div>
          <div className="eachAddCarrier">
            <img src={phone} alt="phoneIcon" />
            <h3>Phone </h3>
            <p>adeniranquwam001@gmail.com</p>
          </div>
          <div className="eachAddCarrier">
            <img src={address} alt="addressIcon" />
            <h3>Address </h3>
            <p> 3, Alhaji Araba Street, Ikorodu-Nigeria </p>
          </div>
        </div>

        <div className="formMargin">
        <section className="form gridForm2">
          <div className="grid3">
            <div>
              <label htmlFor="name"> <p>Your Name {"(*)"}</p></label>
              <input id="name" type="text" />
            </div>
            <div>
              <label htmlFor="email"> <p>Your Email  {"(*)"}</p></label>
              <input id="email" type="email" />
            </div>
            <div>
              <label htmlFor="subject"> <p>Subject</p></label>
              <input id="subject" type="text" />
            </div>
            <div>
            <label htmlFor="department"> <p>Department </p></label>

             <select name="department" id="department">
                <option value="Business Department">Business Department</option>
                <option value="Personal Department">Personal  Department</option>
                <option value="Support Department">Support  Department</option>
                <option value="Others  ">Others</option>


             </select>
            </div>
          
      
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Ask</button>
          {/* <img src={address} alt="addressIcon" /> */}

          

        </section>
         <div className="socialFlex">
         <img src={emailBlue} alt="email-Icon" />
         <img src={facebookBlue} alt="facebookBlue-Icon" />
         <img src={linkdnBlue} alt="linkdn" />
         <img src={twitterBlue} alt="twitter" />

         </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
