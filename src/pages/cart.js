import React from "react";
import Column from "../containers/columns/columns";
import CartItemSkeleton from "../components/skeletons/cart-item/cart-item-skeleton";
import CartItem from "../components/cart-item/cart-item";
import Checkout from "../components/checkout/checkout";
import EmptyState from "../components/empty-cart/empty-cart";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../src/redux/cart/cart.selectors";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Cart = ({ cartItems, cartTotal }) => {
  const [isDataFetching, setIsDataFetching] = React.useState(true);

  const hideSkeleton = () => {
    setIsDataFetching(false);
  };

  const renderSkeletons = () => {
    setTimeout(hideSkeleton, 5000);
    return Array(5)
      .fill()
      .map((item, index) => <CartItemSkeleton key={index} />);
  };

  const renderFoodItems = () => {
    return cartItems.map((item) => <CartItem key={item.id} item={item} />);
  };

  return (
    <div>
      <Column>
        {isDataFetching === true ? renderSkeletons() : renderFoodItems()}
        {cartItems.length > 0 ? (
          <Checkout cartTotal={cartTotal} />
        ) : (
          <EmptyState />
        )}
      </Column>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

Cart.propTypes = {
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
};

export default connect(mapStateToProps)(Cart);
