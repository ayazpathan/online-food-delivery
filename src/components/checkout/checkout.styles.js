import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 68%;
  padding: 10px 0px;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    padding: 35px 25px 10px 15px;
    align-items: center;
    height: 110px;
  }
`;

export const CheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
  background-color: #f64558;
  color: white;
  font-size: 21px;
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
`;

export const BoldText = styled.span`
  color: #3e4152;
  font-size: 25px;
  font-weight: bold;
`;
