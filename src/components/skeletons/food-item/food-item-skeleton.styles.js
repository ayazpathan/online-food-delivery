import styled from "styled-components";

export const FoodItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 460px;

  @media (max-width: 500px) {
    width: 100%;
    height: 370px;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FoodInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
  min-height: 150px;
  align-items: flex-start;
  overflow: visible;

  @media (max-width: 500px) {
    height: 200px;
  }
`;

export const ButtonAndDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 240px;
`;
