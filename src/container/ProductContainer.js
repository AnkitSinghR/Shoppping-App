import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/action";
import ProductDetails from "../components/ProductDetails";

const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
