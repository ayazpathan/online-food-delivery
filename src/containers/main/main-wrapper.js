import React from "react";
import { MainWrapperContainer } from "./main-wrapper.styles";

const MainWrapper = ({ children }) => {
  return <MainWrapperContainer>{children}</MainWrapperContainer>;
};

export default MainWrapper;
