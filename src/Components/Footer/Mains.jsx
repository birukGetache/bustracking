import React from "react";
import Contact from "./Contact";
import MainFotter from "./MainFooter";
import SendEmail from "./SendEmail";
import styled from '@emotion/styled'
const Mains =()=>{
    const Man = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    background-color:#e3deeb;;
    margin-top:60px;
    padding:5px;
  `;
return(
    <Man>
    <Contact/>
<MainFotter></MainFotter>
<SendEmail></SendEmail>
    </Man>

)
}
export default Mains;