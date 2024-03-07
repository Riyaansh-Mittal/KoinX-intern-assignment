import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Overview = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <Root>
      <h2 className="text-2xl font-semibold">{strings.overview.performance}</h2>
    </Root>
  );
};

export default Overview;

const Root = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`;
