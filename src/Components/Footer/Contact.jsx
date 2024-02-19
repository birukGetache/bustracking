import styled from '@emotion/styled';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact =()=>{
    const MainFotter= styled.div`
    color: #5c64f3;
  font-size:18px;
    `
    const Main = styled.div`
 
    `
    const P = styled.p`
   `
 return(
   <Main>
      <h2>Contact</h2>
    <MainFotter><PhoneIcon></PhoneIcon>+25141330816</MainFotter>
    <MainFotter><EmailIcon></EmailIcon>burab1742@gmail.com</MainFotter>
    <MainFotter><TwitterIcon/>good baby</MainFotter>
    <MainFotter><TelegramIcon/>Telegram baby</MainFotter>
    <MainFotter><InstagramIcon/>Instagram baby</MainFotter>
   </Main>
 )
}
export default Contact;