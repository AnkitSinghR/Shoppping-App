import React from "react";
import iphone from "./iphone.webp";

const Home = (props) => {
  console.log("props", props);
  return (
    <div>
      <h3>Home Component</h3>

      <div className="cart-wrapper ">
        <div className="img-wrapper item">
          <img src={iphone} alt="iphone" />
        </div>
        <div className="text-wrapper item">
          <span>Iphone 14</span>
          <span> Price : 65000</span>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 65000, name: "Iphone14" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
