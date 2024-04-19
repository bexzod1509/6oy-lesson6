import React from "react";
import "./Navbar2.css";
import cart from "./cart.png";
import down from "./down.png";
import heart from "./heart.png";
import logo from "./logo.png";
import search from "./search.png";
import user from "./user.png";
function Navbar2() {
  return (
    <div className="container">
      <div className="b">
        <img src={logo} alt="" />
        <div className="b1">
          <input type="search" placeholder="Search For items..." />
          <button>
            <p>All Categories</p>
            <img src={down} alt="" />
          </button>
          <img className="b4" src={search} alt="" />
        </div>
        <div className="b2">
          <div className="b3">
            <img src={user} alt="" />
            <p>Account</p>
          </div>
          <div className="b3">
            <img src={heart} alt="" />
            <p>Wishlist</p>
          </div>
          <div className="b3">
            <img src={cart} alt="" />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
