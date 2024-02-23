import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const Main = styled.div`
  width: 90%;
  gap: 5px;
  border-radius: 2%;
  background-color: #e3deeb;
  margin-bottom: 40px;
  position: relative;
`;

const dropAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Char = styled.span`
  display: inline-block;
  font-size: 40px;
  color: #5c64f3;
  animation: ${dropAnimation} 0.5s ease forwards;
`;

const GoesHistory = (props) => {
  const { count } = props;
  const [countState, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (isCounting) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === count) {
            clearInterval(timer);
            setIsCounting(false);
            return prevCount;
          } else {
            return prevCount + 1;
          }
        });
      }, 40);

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, isCounting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isCounting]);

  useEffect(() => {
    if (isCounting && displayedText.length < props.title.length) {
      const timer = setInterval(() => {
        setDisplayedText((prev) => prev + props.title[prev.length]);
        if (prev.length === props.title.length) {
          clearInterval(timer);
        }
      }, 10); // Delay for 100ms between each character
      return () => clearInterval(timer);
    }
  }, [isCounting, displayedText, props.title]);

  return (
    <Main ref={ref}>
      {displayedText.split('').map((char, index) => (
        <Char key={index}>{char}</Char>
      ))}
      <h1>{countState}</h1>
      <Box className="Component">{props.comp}</Box>
    </Main>
  );
};

export default GoesHistory;