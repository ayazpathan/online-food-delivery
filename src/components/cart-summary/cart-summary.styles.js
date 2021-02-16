import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  width: 475px;
  height: 25px;
  padding: 15px;
  border-radius: 15px;
  background-color: #60b246;
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  user-select: none;

  @media (max-width: 500px) {
    width: 300px;
    height: 50px;
  }
`;

export const BoldText = styled.span`
  color: white;
  font-size: 21px;

  @media (max-width: 500px) {
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Hover = styled.span`
  &:hover {
    cursor: pointer;
    color: #ffa300;
  }
`;
