import React from "react";
import "./Footer.css";
import Logo from "../navbar2/logo.png";
import location from "./location.png";
import mail from "./mail.png";
import Phone from "./Phone.png";
import tg from "./tg.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import ball from "./ball.png";
import instagram from "./insagram.png";
import meal1 from "./meal1.png";
import meal2 from "./meal2.png";
import meal3 from "./meal3.png";
import meal4 from "./meal4.png";
import meal5 from "./meal5.png";
function Footer() {
  return (
    <div className="g">
      <div className="g1 container">
        <div className="g2">
          <img src={Logo} alt="" />
          <p>
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="g4">
            <div className="g3">
              <img src={location} alt="" />
              <p>
                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                USA.
              </p>
            </div>
            <div className="g3">
              <img src={mail} alt="" />
              <p>example@email.com</p>
            </div>
            <div className="g3">
              <img src={Phone} alt="" />
              <p>+91 123 4567890</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Company</h1>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>contact Us</p>
          <p>Support Center</p>
        </div>
        <div>
          <h1>Category</h1>
          <p>Dairy & Bakery</p>
          <p>Fruits & Vegetable</p>
          <p>Snack & Spice</p>
          <p>Juice & Drinks</p>
          <p>Chicken & Meat</p>
          <p>Fast Food</p>
        </div>
        <div className="g5">
          <h1>Subscribe Our Newsletter</h1>
          <div className="g6">
            <input type="search" placeholder="Search here..." />
            <img src={tg} alt="" />
          </div>
          <div className="g7">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={ball} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="g8">
            <img src={meal1} alt="" />
            <img src={meal2} alt="" />
            <img src={meal3} alt="" />
            <img src={meal4} alt="" />
            <img src={meal5} alt="" />
          </div>
        </div>
      </div>
      <h2 className="g9">
        © 2024 <b>FoodTrove</b>, All rights reserved.
      </h2>
    </div>
  );
}

export default Footer;
