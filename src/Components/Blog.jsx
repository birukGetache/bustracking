import styled from "@emotion/styled";
import React from "react";
const Blog =()=>{
    const H= styled.h1`
    font-size:40px;
   color:white;
   position:absolute;
   width:30%;
   padding:0;
   margin:0;
   background:black;
   padding:10px;
   margin-top:300px;
   opacity:0.3;
   border-radius:5px;
   margin-left:56px;`
    return(
        // framer motion
        <H>Efficient reservations, comfortable travel. Experience convenience.</H>
    )
}
export default Blog;