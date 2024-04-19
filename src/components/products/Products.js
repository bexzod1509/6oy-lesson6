import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import rate from "./product-rate.png";
import Product from "./poduct.png";
import nut from "./nut.png";
const Api = "https://dummyjson.com/products";
function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(Api)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  let cards = data?.slice(0, 10).map((el) => (
    <div key={el.id} className="e3">
      <img className="e6" src={el.images[0]} alt="" />
      <p>{el.category}</p>
      <h1>{el.title}</h1>
      <div className="e4">
        <img src={rate} alt="" />
        <span>({el.rating})</span>
      </div>
      <div className="e5">
        <div className="e7">
          <h3>${el.price}</h3>
          <h4>-{el.discountPercentage}%</h4>
        </div>
        <button>
          <img src={Product} alt="" />
          <h2>Add</h2>
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="e">
        <h1>Popular Products</h1>
        <div className="e1">
          <p>All</p>
          <h4>Milks & Dairies</h4>
          <h4>Coffes & Teas</h4>
          <h4>Pet Foods</h4>
          <h4>Meats</h4>
          <h4>Vegetables</h4>
          <h4>Fruits</h4>
        </div>
      </div>
      <div className="e2">{cards}</div>
    </div>
  );
}

export default Products;
