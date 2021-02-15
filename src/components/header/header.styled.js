import styled from "styled-components";

export const LogoHolder = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartHolder = styled.div`
  position: relative;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const CartCountHolder = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: -15px;
  top: -6px;
  background-color: #ffa300;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 30px;
  z-index: 100;
`;

export const LogoText = styled.span`
  font-size: 27px;
  font-weight: bold;
  color: #f64558;
`;

export const CartImg = styled.img`
  width: 32px;
  height: 32px;
`;
