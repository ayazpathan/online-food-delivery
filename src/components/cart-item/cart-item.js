import React from "react";
import PropTypes from "prop-types";
import {
  CartItemContainer,
  CartImg,
  BoldText,
  ButtonAndDiscountContainer,
  UpdateCartButtons,
  CounterText,
  Hover,
} from "./cart-item.styles";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

const CartItem = ({ item, addItem, removeItem }) => {
  const { image, name, price, quantity } = item;

  const addToCarHandler = () => {
    addItem(item);
  };

  const removeCartItemhandler = () => {
    removeItem(item);
  };

  return (
    <div>
      <CartItemContainer>
        <CartImg src={image} />
        <BoldText>{name}</BoldText>
        <BoldText>₹. {price}</BoldText>
        <ButtonAndDiscountContainer>
          <UpdateCartButtons>
            <Hover>
              <FaMinusCircle onClick={removeCartItemhandler} />
            </Hover>
            <CounterText>{quantity}</CounterText>
            <Hover>
              <FaPlusCircle onClick={addToCarHandler} />
            </Hover>
          </UpdateCartButtons>
        </ButtonAndDiscountContainer>
        <BoldText>Total: </BoldText>
        <BoldText>₹. {quantity * price}</BoldText>
      </CartItemContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

CartItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CartItem);
