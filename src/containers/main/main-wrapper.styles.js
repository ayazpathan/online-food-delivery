import styled from "styled-components";

export const MainWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  min-height: 300px;
  margin: auto;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  padding-top: 0px;
  padding-bottom: 10%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
