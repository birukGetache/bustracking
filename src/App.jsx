
import styled from "@emotion/styled";
import Main from './Components/Main';
import Companies from "./Components/Companies";
import Cards from "./Components/Cards";
import React, { useState } from "react";
import MainFooter from "./Components/Footer/Mains";
import img from './assets/photo1.jpg'
import img2 from './assets/photo2.jpg'
import img3 from './assets/goldon.jpg'
import Form from './Components/TravelForm';
import GoesHistory from "./Components/GoesHistory";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
// Define styled components outside the functional component
const Comps = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns:1fr 1fr 1fr;
  cursor: ${({ hasForm }) => (hasForm ? 'not-allowed' : 'auto')};
  pointer-events: ${({ hasForm }) => (hasForm ? 'none' : 'auto')};
`;

const P = styled.p`
  display: block;
  text-align: center;
  color: #767895;
  font-size: 16px;
  margin: 10px 0;
  line-height: 1.5;
  /* Add more styles as needed */
`;

const Divgsoes = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
function App() {
  // Define event handle
const [form,setForm] = useState('');
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
  color:"#6aaaf9",
  fontSize:"105px",
}}></AccountCircleIcon>;
const CompIcon1 = <FontAwesomeIcon icon={faBus} style={{
  color:"#6aaaf9",
  fontSize:"105px",
}}/> 
const CompIcon2 = <FontAwesomeIcon icon={faBuilding} style={{
  color:"#6aaaf9",
  fontSize:"105px",
}}/> 
  return (
    <>
   
    <Container hasForm={!!form}>
    <Main />
      <P>Choose Companies to Go</P>
      <div>
     
      <Comps hasForm={!!form}>
       
        <Companies name="tata" img={img2} HandleForm={HandleForm}></Companies>
        <Companies name="golden" img={img3} HandleForm={HandleForm}></Companies>
        <Companies name="selam" img={img2} HandleForm={HandleForm}></Companies>
        <Companies name="abay" img={img} HandleForm={HandleForm}></Companies>
        <Companies name="abay" img={img} HandleForm={HandleForm}></Companies>
        <Companies name="abay" img={img} HandleForm={HandleForm}></Companies>
       
      </Comps>
      <BlurContainer>
      <Form form={form}></Form>
      </BlurContainer>
      </div>
      <Divgsoes>
      <GoesHistory comp={CompIcon} count={57} title="helo"></GoesHistory>
   <GoesHistory comp={CompIcon1} count={2} title="the bus that is already to go"></GoesHistory>
   <GoesHistory comp={CompIcon2}count={57} title="A person goes with us"></GoesHistory>
      </Divgsoes>

      <Cards></Cards>
      <MainFooter></MainFooter>
    </Container>
    {form && <Form form={form} />}
    </>
  );
}

export default App;
