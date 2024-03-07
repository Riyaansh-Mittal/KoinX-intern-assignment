import React from "react";
import { useSelector } from "react-redux";
import StyleBox from "../StyleBox";

const Overview = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <StyleBox>
      <h2 className="text-2xl font-semibold">{strings.overview.performance}</h2>
    </StyleBox>
  );
};

export default Overview;
