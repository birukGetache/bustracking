import styled from '@emotion/styled';
import Nav from './Nav'
import Searchbar from './Searchbar';
import Blog from './Blog'
import Header from './Header';
import React from 'react';
import video from '../../public/BusSystem.mp4'; // Import your video file

const Mains = styled.div`
    height: 100vh; /* Adjust the height as needed */
    width: 100%;
    margin-left: 0;
    padding: 0;
    position: relative; /* Ensure proper positioning */
`;

const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire container */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* Put the video behind other content */
`;

const Main = () => {
    return (
        <Mains>
            <VideoBackground autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <Nav />
            <Searchbar />
            {/* <Header></Header> */}
            <Blog />
        </Mains>
    );
};

export default Main;
