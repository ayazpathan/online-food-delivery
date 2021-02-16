import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: 70px;
  box-sizing: border-box;
  padding: 10px 0px;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px 25px 10px 15px;
  }
`;
