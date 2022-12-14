import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Business.css'
const Business = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [refferalCode, setrefferalCode] = useState("");
  return (
    <div>

<div className="reg-div">
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            const userDetails = {
              userName: userName,
              fullName: fullName,
              email: email,
              PhoneNumber: PhoneNumber,
              refferalCode: refferalCode,
            };
            console.log(userDetails);
          }}>
          <h3>Welcome</h3>
           {/* <Link to='/Business' className="business-btn">Business</Link>  */}
          <Link className="individual-btn2" to='/Getstarted'>Individual</Link>
          <button  className="business-btn2">Business</button> <br /> <br />

          <input
            onChange={(event) => {
              {
                console.log(event.target.value);
                setUserName(event.target.value);
                
              }
              // console.log(setUserName);
            }}
            type="text"
            placeholder="Username"
          />
          <br /> <br />
          <input
            onChange={(event)=> {
              {
                console.log(event.target.value);
                setFullName(event.target.value);
              }
              // console.log(setFullName);
            }}
            type="text"
            placeholder="BusinessName"
          />
          <br /> <br />
          <input
            onChange={(event) => {
              {
                console.log(event.target.value);
                setEmail(event.target.value);
              }
            }}
            type="email"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              {
                console.log(event.target.value);
                setPhoneNumber(event.target.value);
              }
            }}
            type="number"
            placeholder="Phone Number (+234)"
          />
          <br /> <br />
          <input
            onChange={(event) => {
              {
                console.log(event.target.value);
                setrefferalCode(event.target.value);
              }
            }}
            type="number"
            placeholder="Referral Code (optional)"
          />
          <p>
            By clicking the Sign Up button below, you agree to TradExpress{" "}
            <Link className="link">terms and &nbsp; service</Link>
          </p>
          <button className="sign-up">sign up</button>
          {/* <Link className="sign-up"> Sign Up</Link> */}
        </form>
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="click">
            Click here
          </Link>
        </p>
      </div>


















        
    </div>
  )
}

export default Business