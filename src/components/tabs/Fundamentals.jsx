import React from "react";
import { useSelector } from "react-redux";
import StyleBox from "../StyleBox";
import RainbowBar from "../RainbowBar";

const Fundamentals = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <StyleBox>
      <h2 className="text-xl font-semibold text-slate-900">{strings.overview.performance}</h2>
    </StyleBox>
  );
};

export default Fundamentals;
