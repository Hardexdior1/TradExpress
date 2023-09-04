import React from "react";
import testimonial2 from "../images/testimonial-4.jpg";
import "../Styles/Faq.css";
import questions from "./Question";
import QandA from "./QandA";
import SecondQuestion from "./SecondQuestion";
import questions2 from "./Question2";

import ask1 from '../images/ask1.PNG'
import ask2 from '../images/ask2.PNG'
import ask3 from '../images/ask3.PNG'


// import ans1 from '../'
const Faq = () => {
  return (
    <div className="faqWrap" >
      <section >
        <div className="text">
          <h1>
            Do you have any questions? <span>Ask us</span>{" "}
          </h1>
          <p>
            Please read questions bellow and if you can not find your answer,
            please send us your question, we will answer you as soon as
            possible.

             
          </p>
        </div>

       <div className="gridForm">
       <div className="flexWrap">
          <div className="subTextAndFormWrap padding">
            <div className="imgAndText">
              <div>
                <img src={ask1} alt="testimonial-img" />
              </div>

              <div>
                <h5  className="as">Ask Us  </h5>
                <p className="question">Have questions?  </p>
              </div>
            </div>
            <p>
              i am a text block you can edit, Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Proin eget tortor risus.
              Vivamus suscipit tortor felis.
            </p>

            <div>
              <div>
              <label htmlFor="name">
                {" "}
                <p>Your Name {"(*)"}</p>
              </label>
              <input id="name" type="text" required/>
              </div>
              <div>
              <label htmlFor="email" >
                {" "}
                <p>Your Email {"(*)"}</p>
              </label>
              <input id="email" type="email" required/>
              </div>
              <div>
              <label htmlFor="subject">
                {" "}
                <p>Subject</p>
              </label>
              <input id="subject" type="text" />
              </div>

              <div>
                <label htmlFor="department"><p>Department</p> </label>
                <select name="" id="department">
                    <option value="Business Department ">Business </option>
                    <option value="Personal Department ">Personal Department</option>
                    <option value="Support Department ">Support  Department</option>
                    <option value="Others  ">Others </option>



                </select>

                <div className="yourQuestion">
              <label htmlFor="question">
               
                <p>Your question </p>
              </label>
              <textarea name="" id="question" cols="30" rows="10"></textarea>

              <div className="ask">
                <button>Ask</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
        <div className="imgAndText">
              <div>
                <img src={ask2} alt="testimonial-img" />
              </div>

              <div>
                <h5 className="change2">Ask Us  </h5>
                <p className="question">Frequently asked questions   </p>
              </div>
            </div>
        {questions.map((eachQuestion)=>{
            return <QandA  key={eachQuestion.id} {...eachQuestion} />
        })}
         <div className="answer2">
         <div className="imgAndText">
              <div>
                <img src={ask3} alt="testimonial-img" />
              </div>

              <div>
                <h5 className="change2">Other Questions   </h5>
                <p className="question">General question   </p>
              </div>
            </div>
        {questions2.map((eachQuestion2)=>{
            return <SecondQuestion  key={eachQuestion2.id} {...eachQuestion2} />
        })}
         </div>
      </div>
       </div>
      </section>

     
    </div>
  );
};

export default Faq;
