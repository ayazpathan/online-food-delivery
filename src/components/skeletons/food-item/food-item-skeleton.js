import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  FoodItemContainer,
  FoodInfoContainer,
  ButtonAndDiscountContainer,
} from "./food-item-skeleton.styles";

const FoodItemSkeleton = () => {
  return (
    <FoodItemContainer>
      <Skeleton width={200} height={130} />
      <FoodInfoContainer>
        <Skeleton width={200} height={20} />
        <Skeleton width={200} height={20} />
        <Skeleton width={200} height={15} count={2} />

        <ButtonAndDiscountContainer>
          <Skeleton width={60} height={15} />
          <Skeleton width={60} height={15} />
          <Skeleton width={60} height={15} />
        </ButtonAndDiscountContainer>

        <Skeleton width={80} height={15} />
      </FoodInfoContainer>
    </FoodItemContainer>
  );
};

export default FoodItemSkeleton;
