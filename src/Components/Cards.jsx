import styled from "@emotion/styled";
import React from "react";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Cards =()=>{
    const CardsOne= styled.div`
    position:relative;
    width:90%;
    height:300px;
    gap:20px;
    border: solid 2px white;
    background-color:#e3deeb;
    border-radius: 50px;
    padding-top: 50px;
    padding-left:10px;
 font-size:20px;   `
    const P= styled.p`
    text-align:center;`
    const AllCards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
   
    gap:20px;
    justfy-content:center;
`;
    const Button = styled.div`
    width: 120px;
    height: 120px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    margin: auto;
    bottom: -60px; /* Half the height of the button */
    left: 50%;
    transform: translateX(-50%);
    overflow: visible; 
padding: 25px;
color:#959def;
    `
return(
    <>
    <P>services we gave you</P>
       <AllCards>
        <CardsOne>our Companies prioritize providing comfortable seating options for their clients during the journey. This includes
             spacious seating arrangements, ergonomic designs, and 
             amenities such as reclining seats and legroom.<Button>Comfortable Seating<br></br>
             <AirlineSeatReclineNormalIcon style={{ fontSize: '60px',color:"wheat" }}/></Button> </CardsOne>
        <CardsOne>Safety is paramount in transportation services. Companies may implement strict safety protocols, including 
            regular vehicle maintenance, adherence to traffic regulations, 
            and trained staff to ensure passenger safety throughout the journey.<Button>Safety Measures<WarningOutlinedIcon style={{ fontSize: '60px',color:"wheat"}}></WarningOutlinedIcon></Button></CardsOne>
        <CardsOne>Transportation companies strive to make their services accessible to a wide range of clients, including individuals with disabilities. This may involve 
            offering wheelchair-accessible vehicles, assistance with boarding and disembarking, 
            and accommodating special needs passengers.<Button>Accessibility<AlarmIcon style={{ fontSize: '60px',color:"wheat",paddingTop:"30px"}}></AlarmIcon></Button></CardsOne>
        <CardsOne> Offering competitive and transparent pricing is crucial for transportation companies.
             Clients expect fair and reasonable pricing options for their journeys, 
            along with clear information on fares, discounts, and payment methods.<Button>Affordable Pricing<br></br><MonetizationOnOutlinedIcon style={{ fontSize: '60px',color:"wheat" }}></MonetizationOnOutlinedIcon></Button></CardsOne>
    </AllCards>
    </>
 
)
}
export default Cards;