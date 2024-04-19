import React from "react";
import "./Bgsection.css";
import leaf from "./leaf.png";
import tomato from "./tomato.png";
import soup from "./soup.png";
import fruit from "./fruit.png";
import banner from "./banner-13.png.png";
import send from "./bx-send.svg";
import dele from "./x.png";
function Bgsection() {
  return (
    <div className="c">
      <div className="container">
        <div className="c1">
          <img src={leaf} alt="" />
          <img src={tomato} alt="" />
        </div>
        <div className="c2">
          <div>
            <p>
              <b>100%</b>
              Organic Vegetables
            </p>
            <h1>The best way to stuff your wallet.</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </h2>
            <div className="c3">
              <img src={send} alt="" />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your emaill address"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="c4">
            <div className="c5">
              <img src={dele} alt="" />
              <p>Shopping</p>
            </div>
            <div className="c6">
              <img src={dele} alt="" />
              <p>Recips</p>
            </div>
            <div className="c5">
              <img src={dele} alt="" />
              <p>Kitchen</p>
            </div>
            <div className="c5">
              <img src={dele} alt="" />
              <p>News</p>
            </div>
            <div className="c5">
              <img src={dele} alt="" />
              <p>Food</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c7">
        <img className="c10" src={soup} alt="" />
        <div className="c8">
          <img src={fruit} alt="" />
          <img className="c9" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bgsection;
