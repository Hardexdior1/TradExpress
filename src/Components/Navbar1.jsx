import React, { useRef, useState } from "react";
// import tradExpressLogo from "../Images/TradExpress (1).png";
// import Navbarcss from '../styles/Navbar.css';
// import "../styles/Navbar.css";
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
// import '../Pages/Sellbuy'
// const useRef=(nav);
const Navbar1 = () => {
  const nav =useRef()

  const [true1,setTrue1]=useState(false)

  const Click=()=>{
    if(nav.current.classList.contains('ul')){
      nav.current.classList.remove('ul')
      nav.current.classList.add('showUl')
      setTrue1(true)


    }
    else{
      nav.current.classList.remove('showUl')

      nav.current.classList.add('ul')
      setTrue1(false)

    }
  }
  // const style = {
  //   backgroundColor: "#7C20BE",
  // };
  return (
    <div>
      <nav className="navBar" >
        <div>
          
          <Link to='/' path='/'>
  
            {/* <img src={tradExpressLogo} alt="logo" /> */}
          </Link>
        </div>
        <ul className="ul" ref={nav}>
          <li>
            <Link className="Link" to="/Menu"> Menu </Link>
          </li>
      
          <li>
              <Link className="getStartedLink"to="/AchieveMentAndEdu" > AchieveMent&Edu</Link>
          </li>
        </ul>
        {true1?<h1 onClick={()=>{
          Click()
        }}>Click</h1>:<div className="menu" onClick={()=>{
          Click()
        }}>
          <div></div>
          <div></div>
          <div></div>      
        </div>}
      </nav>

      
      
    </div>
  );
};

export default Navbar1;
