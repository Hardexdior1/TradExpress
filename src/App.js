import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar1.jsx";
import LandingPage from "./Pages/LandingPage";



import SideBar from "./Pages/SideBar";
import Conversations from "./Pages/Conversations";

import Header from "./Pages/Header";

import img1 from './Images/Group 1.png'
import img2 from './Images/Setting.png'
import img3 from './Images/fi_chevron-down.png'
import img4 from './Images/fi_gift.png'
import img5 from './Images/fi_headphones.png'
import img6 from './Images/icon (1).png'
import img7 from './Images/icon (2).png'
import img8 from './Images/icon.png'
import img9 from './Images/profile 1.png'


import img10 from './Images/2 User.png'
import img11 from './Images/Bag.png'
import img13 from './Images/Setting.png'












function App() {


  return (
    <div className="App">
    
      

      <BrowserRouter>
<Header />
        <SideBar />
        <Routes>
          <Route path="/" element={ <LandingPage  /> } />
          <Route path="/Conversations" element={<Conversations />} />

          

        </Routes>
      </BrowserRouter>

      
      <a href="">refresh</a>
      











      <a href="">REFRESH</a>
    </div>
  );
}

export default App;
