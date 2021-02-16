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

export const CartImg = styled.img`
  width: 110px;
  height: 100px;
  border-radius: 5px;
`;

export const BoldText = styled.span`
  color: #3e4152;
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonAndDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

export const CounterText = styled.span`
  color: #3e4152;
  font-size: 23px;
`;

export const UpdateCartButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 30px;
  font-size: 25px;
  color: #f64558;

  @media (max-width: 500px) {
    font-size: 40px;
    width: 160px;
  }
`;

export const Hover = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
