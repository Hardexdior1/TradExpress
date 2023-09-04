import React from "react";
import "../Styles/Section2.css";
import features from "../images/features.jpg";
import waterproof from '../images/waterProof.PNG'
import battery from '../images/batteryLife.PNG'
import alarm from '../images/alarm.PNG'
import weather from '../images/weather.PNG'


import clock from "../images/clock.PNG";
import batteryLife from '../images/battery.PNG'
import link from '../images/linkicon.PNG'

import calender from '../images/calender.PNG'

import clock2 from '../images/clock2.PNG'


import dollars from '../images/dollars.PNG'

const Section2 = () => {
  return (
    <div>
      <section className="section2Wrap ">
        <div className="secondWrap">
          <div className="subCarrier">
            <div>
              <img src={clock} alt="clockImg" />
            </div>
            <div>
              <h4>Extraordinery performance </h4>
              <p>
                A smart watch is a wearable computer in the form of a watch{" "}
              </p>
            </div>
          </div>

          <div className="subCarrier wrapCheck">
            <div>
              <img src={batteryLife} alt="clockImg" />
            </div>
            <div>
              <h4>Excellent battery life </h4>
              <p>A smartwatch is a wearable computer in the form of a watch.</p>
            </div>
          </div>

          <div className="subCarrier">
            <div>
              <img src={link} alt="clockImg" />
            </div>
            <div>
              <h4>Connectable to android/ios </h4>
              <p>
                A smart watch is a wearable computer in the form of a watch{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="imgCarrier">
          <img className="clockImg" src={features} alt="featuresImg" />
        </div>

        <div className="secondWrap secondWrap2">
          <div className="subCarrier">
            <div>
              <img src={calender} alt="clockImg" />
            </div>
            <div>
              <h4>Show time & date</h4>
              <p>
                A smart watch is a wearable computer in the form of a watch{" "}
              </p>
            </div>
          </div>

          <div className="subCarrier">
            <div>
              <img src={dollars} alt="clockImg" />
            </div>
            <div>
              <h4>Affordable price </h4>
              <p>
                A smart watch is a wearable computer in the form of a watch{" "}
              </p>
            </div>
          </div>

          <div className="subCarrier">
            <div>
              <img src={clock2} alt="clockImg" />
            </div>
            <div>
              <h4>Best Quality and design </h4>
              <p>
                A smart watch is a wearable computer in the form of a watch{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gadget">
        <div className="gadgetDemo">
          <h1>Gadget Demo Video </h1>

          <p className="gadgetPara">
            A smartwatch is a wearable computer in the form of a watch; modern
            smartwatches provide a local touchscreen interface for daily use,
            while an associated smartphone app provides for management and
            telemetry  {'('}such as long-term bio-monitoring{')'}
          </p>

          <div className="imgFlex">
            <div>
            <img src={waterproof} alt="waterproofImg" />

            <p>Water proof </p>
            </div>
            <div>
            <img src={battery} alt="battery-img" />

            <p>Battery life  </p>
            </div>

            <div>
            <img src={alarm} alt="alram-img" />

            <p>Alarm</p>
            </div>

            <div>
            <img src={weather} alt="weather-img" />

            <p>Weather  </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
