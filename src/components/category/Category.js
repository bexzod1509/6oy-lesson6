import React from "react";
import "./Category.css";
import banner1 from "./banner-1.png";
import banner2 from "./banner-2.png";
import banner3 from "./banner-3.png";
function Category() {
  return (
    <div className="container">
      <div className="d">
        <div className="d1">
          <img src={banner1} alt="" />
          <div className="d2">
            <p>Everyday Fresh & Clean with Our Products</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="d1">
          <img src={banner2} alt="" />
          <div className="d2">
            <p>Make your Breakfast Healthy and Easy</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="d1">
          <img src={banner3} alt="" />
          <div className="d2">
            <p>The best Organic Products Online</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
