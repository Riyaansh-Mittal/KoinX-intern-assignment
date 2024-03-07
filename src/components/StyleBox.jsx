import React from "react";
import styled from "styled-components";

const StyleBox = ({ children }) => {
  return <Root>{children}</Root>;
};

export default StyleBox;

const Root = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;
