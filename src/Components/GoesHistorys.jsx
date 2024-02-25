import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const Main = styled.div`
  width: 90%;
  gap: 5px;
  border-radius: 2%;
  background-color: #06a636;
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


const P = styled.p`
  font-size: 40px;
  color: #06a636;
  animation: ${dropAnimation} 0.5s ease forwards;
`;
const GoesHistory = (props) => {
  const { count } = props;
  const [countState, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const ref = useRef(null);

  const writeText = (text, index) => {
    if (index <= text.length) {
      setDisplayedText(text.slice(0, index));
      setTimeout(() => writeText(text, index + 1), 100); // Delay for 100ms between each character
    }
  };

  useEffect(() => {
    writeText(props.title, 0); // Call the function to start typing the title
  }, [props.title]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting) {
          setIsCounting(true);
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
  }, [count, isCounting]);

  return (
    <Main ref={ref}>
      <P>{displayedText}</P>
      <h1>{countState}</h1>
      <Box className="Component">
        {props.comp}
      </Box>
    </Main>
  );
};

export default GoesHistory;