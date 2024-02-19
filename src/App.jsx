
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
  text-align:center;
  font-size: 30px;
  color: #767895;
`;
const Company = styled.div`
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
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
      <Cards></Cards>
      <MainFooter></MainFooter>
    </Container>
    {form && <Form form={form} />}
    </>
  );
}

export default App;
