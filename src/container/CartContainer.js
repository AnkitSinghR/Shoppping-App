import { connect } from "react-redux";
import Cart from "../components/Cart";
import { removeToCart } from "../services/actions/action";

const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
