
import styled from "@emotion/styled";
import Main from './Components/Main';
import Companies from "./Components/Companies";
import Cards from "./Components/Cards";
import React from "react";
import MainFooter from "./Components/Footer/Mains";
// Define styled components outside the functional component
const Comps = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  display: block;
  text-align: center;
`;

function App() {
  // Define event handle

  return (
    <>
      <Main />
      <P>Choose Companies to Go</P>
      <Comps>
        <Companies name="tata"></Companies>
        <Companies name="golden"></Companies>
        <Companies name="selam"></Companies>
      </Comps>
      <Cards></Cards>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;
