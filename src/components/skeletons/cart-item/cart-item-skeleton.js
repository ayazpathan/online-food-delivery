import React from "react";
import Skeleton from "react-loading-skeleton";
import {
  CartItemContainer,
  ButtonAndDiscountContainer,
} from "./cart-item-skeleton.styles";

const CartItemSkeleton = () => {
  return (
    <div>
      <CartItemContainer>
        <Skeleton width={100} height={90} />
        <Skeleton width={150} height={20} />
        <Skeleton width={120} height={20} />
        <ButtonAndDiscountContainer>
          <Skeleton width={30} height={20} />
        </ButtonAndDiscountContainer>
        <Skeleton width={70} height={20} />
        <Skeleton width={70} height={20} />
      </CartItemContainer>
    </div>
  );
};

export default CartItemSkeleton;
