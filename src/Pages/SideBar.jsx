import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Aside.css";
import matrixLogo from "../Images/Group 1.png";

import orders from "../Images/Bag.png";
import customers from "../Images/2 User.png";
import inventory from "../Images/Bag.png";
import settings from "../Images/Setting.png";

import careerSupport from "../Images/fi_headphones.png";

import gift from "../Images/fi_gift.png";
import chevronDown from "../Images/fi_chevron-down.png";


const SideBar = () => {
  const [showAllMenuItems, setShowAllMenuItems] = useState(false);
  return (
    <div className="sideWrap">
        
      <aside className="aside1">
        <div className="menu" onClick={()=>{
            setShowAllMenuItems(!showAllMenuItems)
        }}>
            <div></div>
            <div></div>
            <div></div>

        </div>
        {showAllMenuItems ? (
          <aside className="aside">
            <div className="linkCarrier">
              <div className="subLinkCarrier">
                <Link>
                  <img src={matrixLogo} alt="icon" />
                </Link>
                <Link>
                  <h2>Metrix</h2>
                </Link>
              </div>

              <Link to="/" path="/" className="dashBoardLink">
                Dashboard
              </Link>

              <div className="subLinkCarrier">
                <Link>
                  <img src={orders} alt="icon" />
                </Link>
                <Link>orders </Link>
              </div>
              <div className="subLinkCarrier">
                <Link>
                  <img src={customers} alt="icon" />
                </Link>
                <Link>customers</Link>
              </div>

              <div className="subLinkCarrier">
                <Link>
                  <img src={inventory} alt="icon" />
                </Link>
                <Link>inventory</Link>
              </div>

              <div className="subLinkCarrier">
                <Link>
                  <img src={customers} alt="icon" />
                </Link>
                <Link>conversation</Link>
              </div>
              <div className="subLinkCarrier">
                <Link>
                  <img src={settings} alt="icon" />
                </Link>
                <Link>settings</Link>
              </div>
            </div>

            <div className="subLinkWrap">
              <div className="subLinkCarrier">
                <Link className="contactSupport">
                  {" "}
                  <Link>
                    <img src={careerSupport} alt="icon" />
                  </Link>
                  Contact Support{" "}
                </Link>
              </div>

              <div className="subLinkCarrier freeGift">
                <Link>
                  <img src={gift} alt="icon" />
                </Link>
                <Link>Free Gift Awaits You</Link> <br />
              </div>
              <strong>
                Upgrade your account <img src={chevronDown} alt="" />
              </strong>

              <em className="logout">logout</em>
            </div>
          </aside>
        ) : (
          ""
        )}
      </aside>
    </div>
  );
};

export default SideBar;
