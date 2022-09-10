import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/action";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  //this send data from store to component
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
