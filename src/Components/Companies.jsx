import styled from '@emotion/styled';
import React from 'react';
import { space, color, typography } from 'styled-system';
import { keyframes } from '@emotion/react';
const Companies = (props) => {
    const { name, img, HandleForm } = props;

    const Box = styled.div`
        ${space}
        ${color}
        ${typography}
    `;

   // Define keyframes for animation
const moveLeftToMiddle = keyframes`
0% {
  transform: translateX(-100%);
  opacity: 0; /* Initially fully transparent */
}
50% {
  opacity: 0.5; /* Halfway through the animation, becomes more visible */
}
100% {
  transform: translateX(0);
  opacity: 1; /* Fully visible */
}
`;

const moveRightToMiddle = keyframes`
from {
  transform: translateY(100%);
  opacity: 0; /* Initially fully transparent */
}
50% {
  opacity: 0.5; /* Halfway through the animation, becomes more visible */
}
to {
  transform: translateY(0);
  opacity: 1; /* Fully visible */
}
`;

const Comp = styled.div`
height: auto;
display: block;
margin: 10px;
gap:10px;
margin-top: 10px;
padding: 10px;
border-radius: 5px;
width:100%;
animation-duration: 1.5s;
animation-fill-mode: forwards;

&:nth-child(odd) {
  animation-name: ${moveLeftToMiddle};
}

/* Animation for right company */
&:nth-child(even) {
  animation-name: ${moveRightToMiddle};
}

&:hover {
  cursor: pointer;
  .hi {
    display: block;
  }
}
`;


    const Image = styled.div`
        background-size: cover;
        width: 100%;
        height: 300px;
        border-radius: 5%;
        background-image: url(${img});
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 5px;
    `;

    const H = styled.button`
        display: block;
        background-color: #68e48d;
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
        display: none;
        font-size:30px;
        border:none;
        font-family:arial;
        border-radius:5px;
    `;

    const P = styled.p`
        text-align: center;
        font-size: 20px;
        color: #fff;
        font-family: cursive;
        background-color: #06a636;
        border-radius: 12px;
    `;

    return (
        <>
            <Comp onClick={() => HandleForm({ name })}>
                <Image>
                    <H className='hi'>BOOK Now</H>
                </Image>
                <P>{name}</P>
            </Comp>
        </>
    );
};

export default Companies;
