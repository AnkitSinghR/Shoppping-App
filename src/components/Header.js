import React from "react";
import cart from "./cart.png";
const Header = (props) => {
  //   console.log("props", props);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.cartData.length}</span>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};
export default Header;
