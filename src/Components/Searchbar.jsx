import styled from '@emotion/styled';

const Search = styled.input`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    box-sizing: border-box;
    border-radius: 40px;
    height: 100%;
`;

const Main = styled.div`
    margin-top:60px;
    height: 50px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
`;

const Searchbar = () => {
    return (
        <>
         <Main>
         <Search type='text' name='weather' placeholder="weather....." />
           </Main>

           </>
       
    );
};

export default Searchbar;
