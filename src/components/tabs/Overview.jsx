import React from "react";
import { useSelector } from "react-redux";
import StyleBox from "../StyleBox";
import RainbowBar from "../RainbowBar";

const Overview = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <StyleBox>
      <h2 className="text-2xl font-semibold">{strings.overview.performance}</h2>
      <div
        className="grid grid-cols-3 gap-7 items-center py-7"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        <div className="flex flex-col justify-center w-max">
          <p className="text-xs">Today's Low</p>
          <h2 className="text-sm font-semibold">46930.22</h2>
        </div>
        <RainbowBar min={46930.22} max={49343.83} />
        <div className="flex flex-col justify-end text-right">
          <p className="text-xs">Today's High</p>
          <h2 className="text-sm font-semibold">49343.83</h2>
        </div>
        <div className="flex flex-col justify-center w-max">
          <p className="text-xs">T52W Low</p>
          <h2 className="text-sm font-semibold">16930.22</h2>
        </div>
        <RainbowBar min={16930.22} max={49743.83} />
        <div className="flex flex-col justify-end text-right">
          <p className="text-xs">52W High</p>
          <h2 className="text-sm font-semibold">49743.83</h2>
        </div>
      </div>
    </StyleBox>
  );
};

export default Overview;
