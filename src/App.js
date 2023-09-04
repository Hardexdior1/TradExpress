import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
// import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Footer from "./Components/Footer";

import { Link } from "react-router-dom";
import { useRef, useState } from "react";

import dark from "./images/darlmode.png";
import light from "./images/lightmode.png";
import Faq from "./Components/Faq";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Components/Testimonial";
import Watches from "./Components/Watches";
import WatchPage from "./Components/WatchPage";
import Contact from "./Components/Contact";

// ren .git .git_backup

// Create your own styling

//

//   return (
//
//   );
// };

//

function App() {
  const background = useRef();
  const change = useRef();
  const change2 = useRef();
  const change3 = useRef();
  const change4 = useRef();

  const [mode, setMode] = useState(true);
  const [img, setImg] = useState();

  // const[m,setM]=useState('nn')
  // home
  const changeToBlack = () => {
    background.current.classList.remove("App");
    background.current.classList.add("AppBlack");

    // change.current.classList.remove("change");
    // change.current.classList.add("changeToWHite");

    // change2.current.classList.remove("change2");
    // change2.current.classList.add("changeToWHite");

    // change3.current.classList.remove("change3");
    // change3.current.classList.add("changeToWhite");

    // change4.current.classList.remove("home");
    // change4.current.classList.add("changeToWhite");
  };

  const changeToDark = () => {
    background.current.classList.add("App");
    background.current.classList.remove("AppBlack");

    // change.current.classList.add("change");
    // change.current.classList.remove("changeToWHite");

    // change2.current.classList.add("change2");
    // change2.current.classList.remove("changeToWHite");

    // change3.current.classList.add("change3");
    // change3.current.classList.remove("changeToWhite");

    // change4.current.classList.add("home");
    // change4.current.classList.remove("changeToWhite");
  };
  const [drag, setDrag] = useState(true);

  return (
    <div className="App" ref={background}>

         

      {mode ? (
        <img
          className="mode"
          onClick={() => {
            changeToBlack();
            setMode(false);
          }}
          src={dark}
          alt="dark-img"
        />
      ) : (
        <img
          className="mode"
          onClick={() => {
            changeToDark();
            setMode(true);
          }}
          src={light}
          alt="light-img"
        />
      )}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<LandingPage change={change} change2={change2} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/WatchPage" element={<WatchPage />} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>
        <Footer />

      </BrowserRouter>

      <a className="top" href="#">
        ^
      </a>
      <a className="a2" href="">
        REFRESH
      </a>
    </div>
  );
}

export default App;
