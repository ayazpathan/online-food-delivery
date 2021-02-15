import styled from "styled-components";

export const FoodItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 460px;
`;

export const FoodImg = styled.img`
  width: 200px;
  height: 130px;
  border-radius: 10px;
`;

export const FoodInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
  min-height: 150px;
  align-items: flex-start;
  overflow: visible;
`;

export const Suggestion = styled.span`
  color: #ffa300;
  font-size: 15px;
  font-weight: bold;
`;

export const BoldText = styled.span`
  color: #3e4152;
  font-size: 22px;
  font-weight: bold;
`;

export const FoodDescription = styled.span`
  width: 100%;
  color: #686b78;
  font-size: 19px;
  width: 200px;
  height: 50px;
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ButtonAndDiscountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 240px;
`;

export const BasePrice = styled.span`
  color: #686b78;
  font-size: 21px;
  font-weight: bold;
  text-decoration: line-through;
`;

export const DiscountPercent = styled.span`
  color: #60b246;
  font-size: 19px;
  font-weight: bold;
`;

export const CounterText = styled.span`
  color: #3e4152;
  font-size: 23px;
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 28px;
  background-color: #f64558;
  color: white;
  font-size: 17px;
  border-radius: 12px;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0px 15px;
`;

export const UpdateCartButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 30px;
  font-size: 25px;
  color: #f64558;
`;

export const Hover = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
