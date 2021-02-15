import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../../animation/order-completed";
import {
  OrderPlacedContainer,
  ContinueShopButton,
  BoldText,
} from "./order-placed.styles";

const OrderPlaced = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <OrderPlacedContainer>
      <Lottie options={defaultOptions} height={400} width={400} />
      <BoldText>You order has been successfully placed</BoldText>
      <Link to="/">
        <ContinueShopButton>CONTINUE SHOPPING</ContinueShopButton>
      </Link>
    </OrderPlacedContainer>
  );
};

export default OrderPlaced;
