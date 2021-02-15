import React from "react";
import CartSummary from "../components/cart-summary/cart-summary";
import Grid from "../containers/grid/grid";
import FoodItemSkeleton from "../components/skeletons/food-item/food-item-skeleton";
import FoodItem from "../components/food-item/food-item";

import PropTypes from "prop-types";
import foodItemsList from "../data/food-data";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../src/redux/cart/cart.selectors";

import { connect } from "react-redux";

const Home = ({ cartItemsCount }) => {
  const [isDataFetching, setIsDataFetching] = React.useState(true);

  const hideSkeleton = () => {
    setIsDataFetching(false);
  };

  const renderSkeletons = () => {
    setTimeout(hideSkeleton, 5000);
    return Array(10)
      .fill()
      .map((item, index) => <FoodItemSkeleton key={index} />);
  };

  const renderFoodItems = () => {
    return foodItemsList.map((item) => <FoodItem key={item.id} item={item} />);
  };
  return (
    <div>
      {cartItemsCount > 0 ? <CartSummary /> : null}
      <Grid>
        {isDataFetching === true ? renderSkeletons() : renderFoodItems()}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

Home.propTypes = {
  cartItemsCount: PropTypes.number,
};

export default connect(mapStateToProps)(Home);
