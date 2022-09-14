import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});

export default connect(mapStateToProps)(Header);
