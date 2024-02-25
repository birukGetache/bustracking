import styled from '@emotion/styled';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact =()=>{
    const MainFotter= styled.div`
    color: #;
  font-size:18px;
  font-family: cursive;
    `
    const Main = styled.div`
    font-family: cursive;
    `
    const P = styled.p`
    font-family: cursive;
   `
   const H2= styled.h2`
   color:#058029;`
 return(
   <Main>
      <H2>Contact</H2>
    <MainFotter><PhoneIcon></PhoneIcon>+25141330816</MainFotter>
    <MainFotter><EmailIcon></EmailIcon>burab1742@gmail.com</MainFotter>
    <MainFotter><TwitterIcon/>good baby</MainFotter>
    <MainFotter><TelegramIcon/>Telegram baby</MainFotter>
    <MainFotter><InstagramIcon/>Instagram baby</MainFotter>
   </Main>
 )
}
export default Contact;