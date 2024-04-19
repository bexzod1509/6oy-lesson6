import React from "react";
import "./Stayhome.css";
import send from "../bgsection/bx-send.svg";
import man from "./man.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
function Stayhome() {
  return (
    <div className="container">
      <div className="f">
        <div className="f1">
          <div>
            <h1>Stay home & get your daily needs from our shop</h1>
            <p>
              Start You'r Daily Shopping with <b>Nest Mart</b>
            </p>
          </div>
          <div className="c3">
            <img src={send} alt="" />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your emaill address"
            />
            <button style={{ background: "#F53E32" }}>Subscribe</button>
          </div>
        </div>
        <img src={man} alt="" />
      </div>
      <div className="f2">
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="f3">
          <img src={icon1} alt="" />
          <div>
            <h1>Best prices & offers</h1>
            <p>Orders $50 or more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stayhome;
