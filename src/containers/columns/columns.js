import React from "react";
import { ColumnContainer } from "./columns.styled";

const Column = ({ children }) => {
  return <ColumnContainer>{children}</ColumnContainer>;
};

export default Column;
