import styled from '@emotion/styled';
import img from '../assets/ok.jpg';
import Nav from './Nav'
import Searchbar from './Searchbar';
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
        </Mains>
    );
};

export default Main;
