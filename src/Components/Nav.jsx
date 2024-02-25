// NavBar.js
import React from 'react';
import styled from '@emotion/styled';
import img from '../../public/EBUS.png'
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
color:white;
&:hover{
  color:lightgreen;
}
`
const Logo= styled.img`
width:100px;
height:auto;
margin:10px;
border-radius:15%;
`
const DIV= styled.div`
border-radius:50%;
backgound-color:blue;
`
const Nav = () => {
  return (
    <NavbarContainer>
   <Logo src={img} alt=""></Logo>
      <Unoderlist>
        <List><Anchor href="#">HOME</Anchor></List>
        <List><Anchor href="#">ABOUT</Anchor></List>
        <List><Anchor href="#">SERVICES</Anchor></List>
        <List><Anchor href="#">CONTACT</Anchor></List>
      </Unoderlist>
    </NavbarContainer>
  );
};

export default Nav;
