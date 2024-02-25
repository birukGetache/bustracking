
import styled from "@emotion/styled";
import Main from './Components/Main';
import Companies from "./Components/Companies";
import Cards from "./Components/Cards";
import React, { useState } from "react";
import MainFooter from "./Components/Footer/Mains";
import img from './assets/selam.png'
import img2 from './assets/goldon.png'
import img3 from './assets/tata1.png'
import abay from './assets/abay.png'
import Form from './Components/TravelForm';
import GoesHistory from "./Components/GoesHistory";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import Ticket from './Components/Ticket';
import {Button} from '@mui/material';


// Define styled components outside the functional component
const Comps = styled.div`
margin-left: 5%;
margin-right:5%;
  display: grid;
  justify-content: space-between;
  gap:10px;
  grid-template-columns:1fr 1fr 1fr 1fr;
  cursor: ${({ hasForm }) => (hasForm ? 'not-allowed' : 'auto')};
  pointer-events: ${({ hasForm }) => (hasForm ? 'none' : 'auto')};
`;

const P = styled.p`
  display: block;
  text-align: center;
  color: #767895;
  font-size: 30px;
  font-family: cursive;
  margin: 10px 0;
  line-height: 1.5;
color:green;
font-weight:bold;
`;

const Divgsoes = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
function App() {
  // Define event handle
const [form,setForm] = useState('');
const [FormToCity,setFormToCity] = useState(false);
const [Btn,setBtn] = useState(true);
const HandleForm = (data)=>{
  setForm(data);
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  filter: ${({ hasForm }) => (hasForm ? 'blur(5px)' : 'none')};
`;

const BlurContainer = styled.div`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const CompIcon = <AccountCircleIcon style={{
  color:"#06a636",
  fontSize:"105px"
}}></AccountCircleIcon>;
const CompIcon1 = <FontAwesomeIcon icon={faBus} style={{
  color:"#06a636",
  fontSize:"105px",
}}/> 
const CompIcon2 = <FontAwesomeIcon icon={faBuilding} style={{
  color:"#06a636",
  fontSize:"105px",
}}/> 
const H1 = styled.h1`
text-align:center;
font-family: cursive;
color: #058029;
`
  return (
    <>
   
    <Container hasForm={!!form}>
    <Main />
    {Btn&&<Button onClick={()=>{
      setFormToCity(true)
      setBtn(false)
    }}>Order To Go</Button>}
   {FormToCity&&<Ticket setFormToCity={setFormToCity} setBtn={setBtn}></Ticket>} 
      <P> If You want to Choose Companies to Go</P>
      <div>
     
      <Comps hasForm={!!form}>
       
        <Companies name="tata" img={img} HandleForm={HandleForm} form={form}></Companies>
        <Companies name="golden" img={img3} HandleForm={HandleForm} form={form}></Companies>
        <Companies name="selam" img={img2} HandleForm={HandleForm} form={form}></Companies>
        <Companies name="abay" img={abay} HandleForm={HandleForm} form={form}></Companies>
       
      </Comps>
      <BlurContainer>
          {form && <Form form={form} setForm={setForm} />}
      </BlurContainer>
      </div>
      <H1>Statstics</H1>
      <Divgsoes>
      
      <GoesHistory comp={CompIcon} count={57} title="helo"></GoesHistory>
   <GoesHistory comp={CompIcon1} count={2} title="the bus that ready to go"></GoesHistory>
   <GoesHistory comp={CompIcon2}count={57} title="A person goes with us"></GoesHistory>
      </Divgsoes>

      <Cards></Cards>
     
      <MainFooter></MainFooter>
    </Container>
    {form && <Form form={form} setForm={setForm} />}
    </>
  );
}

export default App;
