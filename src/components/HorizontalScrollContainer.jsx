import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

const HorizontalScrollContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleScroll = (direction) => {
    const scrollAmount = 200;

    setScrollPosition((prevScrollPosition) => {
      if (direction === "left") {
        return prevScrollPosition - scrollAmount;
      } else {
        return prevScrollPosition + scrollAmount;
      }
    });
  };

  return (
    <ScrollContainer id="scrollContainer" ref={containerRef}>
      <ScrollButtonLeft
        onClick={() => handleScroll("left")}
        className="flex items-center justify-center"
      >
        <PiCaretLeftBold className="h-5" />
      </ScrollButtonLeft>
      <Container className="space-x-3">{children}</Container>
      <ScrollButtonRight
        onClick={() => handleScroll("right")}
        className="flex items-center justify-center"
      >
        <PiCaretRightBold className="h-5"/>
      </ScrollButtonRight>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const ScrollButton = styled.button`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  border: solid transparent;
  cursor: pointer;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollButtonLeft = styled(ScrollButton)`
  left: 0;
`;

const ScrollButtonRight = styled(ScrollButton)`
  right: 0;
`;

export default HorizontalScrollContainer;
