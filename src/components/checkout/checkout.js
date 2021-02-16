import { CheckoutButton, BoldText, CheckoutContainer } from "./checkout.styles";
import Row from "../../containers/rows/row";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const Checkout = ({ cartTotal, clearItemFromCart }) => {
  const history = useHistory();

  const placeOrder = () => {
    clearItemFromCart();
    history.push("/order-sucessed");
  };

  return (
    <CheckoutContainer>
      <CheckoutButton onClick={placeOrder}>PLACE ORDER</CheckoutButton>
      <BoldText>GRAND TOTAL: ₹. {cartTotal}</BoldText>
    </CheckoutContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: () => dispatch(clearItemFromCart()),
});

Checkout.propTypes = {
  cartTotal: PropTypes.number,
  clearItemFromCart: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Checkout);
