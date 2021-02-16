import React from "react";
import PropTypes from "prop-types";
import {
  CartSummaryContainer,
  BoldText,
  Hover,
  Bold,
} from "./cart-summary.styles";
import { Link } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

const CartSummary = ({ cartItemsCount, cartItemTotal }) => {
  return (
    <CartSummaryContainer>
      <BoldText>
        <Bold>{cartItemsCount}</Bold> <span>Items Added</span>
      </BoldText>
      <BoldText>
        <span>Total Amt: </span>
        <Bold>₹. {cartItemTotal}</Bold>
      </BoldText>
      <Link to="/cart">
        <Hover>
          <BoldText>View In Cart</BoldText>
        </Hover>
      </Link>
    </CartSummaryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
  cartItemTotal: selectCartTotal,
});

CartSummary.propTypes = {
  cartItemsCount: PropTypes.number,
  cartItemTotal: PropTypes.number,
};

export default connect(mapStateToProps)(CartSummary);
