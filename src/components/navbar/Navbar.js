import React from "react";
import "./Navbar.css";
import menu from "./menu.png";
import list from "./list.png";
import phone from "./phone.png";
function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src={menu} alt="" />
            <div className="a">
              <a href="#">Home</a>
              <div className="a1">
                <a href="#">Category</a>
                <img src={list} alt="" />
              </div>
              <div className="a1">
                <a href="#">Products</a>
                <img src={list} alt="" />
              </div>
              <div className="a1">
                <a href="#">Pages</a>
                <img src={list} alt="" />
              </div>
              <div className="a1">
                <a href="#">Blog</a>
                <img src={list} alt="" />
              </div>
              <div className="a1">
                <a href="#">Elements</a>
                <img src={list} alt="" />
              </div>
            </div>
            <div className="a2">
              <img src={phone} alt="" />
              <p>+123 ( 456 ) ( 7890 )</p>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
