import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const Carousel = ({ children }) => {
  const containerRef = useRef(null);
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const handleScroll = () => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    setIsPreviousButtonDisabled(scrollContainer.scrollLeft === 0);
    setIsNextButtonDisabled(
      scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.offsetWidth - 20
    );
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToPrevious = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };

  const scrollToNext = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  return (
    <ScrollContainer ref={containerRef}>
      <ScrollButtonLeft
        onClick={scrollToPrevious}
        disabled={isPreviousButtonDisabled}
        className="flex items-center justify-center"
      >
        <PiCaretLeftBold className="h-5" />
      </ScrollButtonLeft>
      <Container className="space-x-3">{children}</Container>
      <ScrollButtonRight
        onClick={scrollToNext}
        disabled={isNextButtonDisabled}
        className="flex items-center justify-center"
      >
        <PiCaretRightBold className="h-5" />
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

  &:disabled {
    visibility: hidden;
    cursor: default;
  }
`;

const ScrollButtonLeft = styled(ScrollButton)`
  left: 0;
`;

const ScrollButtonRight = styled(ScrollButton)`
  right: 0;
`;

export default Carousel;
