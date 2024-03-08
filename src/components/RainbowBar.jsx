import React, { useState } from "react";
import styled from "styled-components";

const RainbowBar = ({ min, max }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [percentage, setpercentage] = useState(0);
  const section = document.getElementById("range");

  const handleClick = (event) => {
    const barWidth = event.currentTarget.offsetWidth;
    const sectionRect = section.getBoundingClientRect();
    const distanceFromScreenStart = sectionRect.left;
    const clickPosition = event.clientX - distanceFromScreenStart;
    const arrowWidth = 5;

    const percentage = (clickPosition / barWidth) * 100;
    setpercentage(percentage);
    const adjustedPosition = percentage - arrowWidth / (barWidth / 100);

    setSelectedPosition(adjustedPosition);
  };

  return (
    <Root id="range">
      <div className="bar" onClick={handleClick}></div>
      {selectedPosition !== null && (
        <>
          <div className="arrow" style={{ left: `${selectedPosition}%` }}></div>
          <div
            className="number-label text-center text-xs pt-1"
            style={{ left: `${selectedPosition}%` }}
          >
            {`$${(min + ((max - min) * percentage) / 100).toFixed(2)}`}
          </div>
        </>
      )}
    </Root>
  );
};

export default RainbowBar;

const Root = styled.section`
  position: relative;
  height: 6px;
  background: #eee;

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(to right, #ff4b4b, #7bf600);
    cursor: pointer;
  }

  .arrow {
    position: absolute;
    bottom: -8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000000;
  }

  .number-label {
    position: absolute;
    top: 15px;
    transform: translateX(-30%);
  }
`;
