import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FoodItemContainer,
  FoodImg,
  FoodInfoContainer,
  Suggestion,
  BoldText,
  FoodDescription,
  ButtonAndDiscountContainer,
  BasePrice,
  DiscountPercent,
  AddButton,
  UpdateCartButtons,
  CounterText,
  Hover,
} from "./food-item.styles";
import { FaStar, FaPlus, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

const FoodItem = ({ item, addItem, removeItem, cartItems }) => {
  let itemCount = 0;

  const {
    id,
    name,
    image,
    description,
    suggestion,
    baseprice,
    discount,
    price,
  } = item;

  const addToCarHandler = () => {
    addItem(item);
  };

  const removeCartItemhandler = () => {
    removeItem(item);
  };

  const selectIsItemExistInCart = () => {
    var isAvail = false;
    if (cartItems !== null) {
      cartItems.forEach((item) => {
        if (id === item.id) {
          isAvail = true;
          itemCount = item.quantity;
        }
      });
    }
    return isAvail;
  };

  return (
    <FoodItemContainer>
      <FoodImg src={image} />
      <FoodInfoContainer>
        <Suggestion>
          <FaStar /> {suggestion}
        </Suggestion>
        <BoldText>{name}</BoldText>
        <FoodDescription>{description}</FoodDescription>
        <ButtonAndDiscountContainer>
          <BasePrice>Rs. {baseprice}</BasePrice>
          <DiscountPercent>{discount}</DiscountPercent>
          {selectIsItemExistInCart() ? (
            <UpdateCartButtons>
              <Hover>
                <FaMinusCircle onClick={removeCartItemhandler} />
              </Hover>

              <CounterText>{itemCount}</CounterText>
              <Hover>
                <FaPlusCircle onClick={addToCarHandler} />
              </Hover>
            </UpdateCartButtons>
          ) : (
            <AddButton onClick={addToCarHandler}>
              <span>ADD</span> <FaPlus />
            </AddButton>
          )}
        </ButtonAndDiscountContainer>
        <BoldText>₹. {price}</BoldText>
      </FoodInfoContainer>
    </FoodItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

FoodItem.propTypes = {
  item: PropTypes.object,
  cartItems: PropTypes.array,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
