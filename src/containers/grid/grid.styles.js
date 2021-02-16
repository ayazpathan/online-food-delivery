import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 3em;
  padding-top: 60px;
  box-shadow: inset 0px 20px 23px -23px #ccc;

  @media (max-width: 500px) {
    padding: 35px 20px 35px 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
