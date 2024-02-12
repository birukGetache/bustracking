// NavBar.js
import React from 'react';
import styled from '@emotion/styled';

const NavbarContainer = styled.nav`
  color: white;
`;
const Unoderlist = styled.ul`
float:right;
margin-right:50px;
`
const List = styled.li`
display:inline;
margin:10px;
text-decoration:none;
`
const Anchor = styled.a`
text-decoration:none;
font-size:20px;
`
const Logo= styled.div`
`
const Nav = () => {
  return (
    <NavbarContainer>
        <Logo>Logo</Logo>
      <Unoderlist>
        <List><Anchor href="#">Home</Anchor></List>
        <List><Anchor href="#">About</Anchor></List>
        <List><Anchor href="#">Services</Anchor></List>
        <List><Anchor href="#">Contact</Anchor></List>
      </Unoderlist>
    </NavbarContainer>
  );
};

export default Nav;
