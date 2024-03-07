import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <Root>
      <h2 className="text-2xl font-semibold">Performance</h2>
    </Root>
  );
};

export default Overview;

const Root = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;
