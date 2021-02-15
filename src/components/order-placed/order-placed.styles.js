import styled from "styled-components";

export const OrderPlacedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  width: 100%;
  align-items: center;
`;

export const ContinueShopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  background-color: #f64558;
  color: white;
  font-size: 21px;
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
`;

export const BoldText = styled.span`
  color: #3e4152;
  font-size: 25px;
  font-weight: bold;
`;
