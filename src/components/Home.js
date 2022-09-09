import React from "react";
import iphone from "./iphone.webp";
import cart from "./cart.png";
const Home = () => {
  return (
    <div>
      <h3>Home Component</h3>
      <div className="add-to-cart">
        <img src={cart} alt="cart" />
      </div>
      <div className="cart-wrapper ">
        <div className="img-wrapper item">
          <img src={iphone} alt="iphone" />
        </div>
        <div className="text-wrapper item">
          <span>Iphone 14</span>
          <span> Price : 65000</span>
        </div>
        <div className="btn-wrapper">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
