import styled from '@emotion/styled';
import React from 'react';
const Search = styled.input`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  box-sizing: border-box;
  border-radius: 40px;
  height: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #f8f8f8;
opacity:0.5;
  &:focus {
    border-color: #058029;;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 14px;
  }
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
