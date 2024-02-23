import React from 'react';
import styled from '@emotion/styled';
const Div = styled.div`

opacity:0.5;
margin:auto;
color:black;
font-size:70px;
background: white;
width:100%;
height:50%;

`
const Header = () => {
    return (
        <Div>
            <h2>Easy booking</h2>
            <p>Your travel companion</p>
        </Div>
    );
};

export default Header;
