import React from "react";
import { RowContainer } from "./row.styled";

const Row = ({ children, width }) => {
  return <RowContainer width={width}>{children}</RowContainer>;
};

export default Row;
