import Header from "../components/Header";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  //this send data from store to component
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
