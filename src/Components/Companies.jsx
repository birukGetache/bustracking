import styled from '@emotion/styled';
import img from '../assets/ok.jpg';
import React from 'react';
import { space, color, typography } from 'styled-system';
const Companies =(props)=>{
    const Box = styled.div`
  ${space}
  ${color}
  ${typography}
`;
    const H = styled.h1`
    display:blocks;
    background-color:black;
    width:100%;
    height:50px;
    color:white;
    text-align:center;
    display:none;
    `
    // const Comp= styled.div`
    // height: auto;
    // display:block;
    // margin:10px;
    // margin-top:10px;
    // padding:10px;
    // border-radius:5px;
    // &:hover {
    //     cursor:pointer;
      
    //     ${H}{
    //             display:block;
    //         }
    // }
    // `
    const Comp = styled.div`
    height: auto;
    display:block;
    margin:10px;
    margin-top:10px;
    padding:10px;
    border-radius:5px;
  &:hover{
    .hi {
        display: block;
      }
  }
  
`;

   
    const Image = styled.div`
    background-size: cover;
    width: 400px; /* Adjusted to 100% */
    height: 300px; /* Adjusted to auto */
    border-radius:5%;
    background-image: url(${img});
    display:flex;
    jusify-content:center;
    align-items: flex-end; 
    margin:bottom:5px;
    `
    const P = styled.p`
    text-align:center;`
 const hos=()=>{
    console.log("hellow")
 }
    const {name}= props;
    return(
        <Comp onClick={
        ()=>(
            console.log("hellow")
        )
        }>
            <Image>
            <H className='hi'>hellow</H>
            </Image>
        
            <P>{name}</P>
           
        </Comp>
    )
}
export default Companies;