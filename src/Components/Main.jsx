import styled from '@emotion/styled';
import img from '../assets/ok.jpg';
import Nav from './Nav'
import Searchbar from './Searchbar';
import Blog from './Blog'
import React from 'react';
const Mains = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${img}); /* Use the imported image */
    background-repeat:no-repeat;
    background-size: cover; 
`;
const Main = () => {
    return (
        <Mains>
            <Nav></Nav>
            <Searchbar></Searchbar>
            <Blog></Blog>
        </Mains>
    );
};

export default Main;
