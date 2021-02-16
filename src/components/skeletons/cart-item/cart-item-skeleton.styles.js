import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 800px;
  height: 110px;
  align-items: center;
  box-shadow: 0px 0px 1px 0px #888888;
  padding: 15px;
  margin-bottom: 25px;

  @media (max-width: 500px) {
    width: 280px;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    box-shadow: 0px 0px 5px 0px #888888;
  }
`;

export const ButtonAndDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;
