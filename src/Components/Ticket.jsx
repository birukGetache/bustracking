import styled from "@emotion/styled";
import React from "react";
import { Input } from "@mui/material";
import { Close } from "@mui/icons-material";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const Div = styled.div`
display:flex;
align-items:center;
justify-content:right;`
const Ticket = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Div ><Close onClick={()=>{props.setFormToCity(false)
                               props.setBtn(true)}}></Close></Div>   
      <Label htmlFor="first">First name:</Label>
      <Input type="text" id="first " name="first_name" required />
      <Label htmlFor="startCity">Last Name:</Label>
      <Input type="text" id="startCity" name="startCity" required />
      <Label htmlFor="startCity">Start City:</Label>
      <Input type="text" id="startCity" name="startCity" required />

      <Label htmlFor="destinationCity">Destination City:</Label>
      <Input type="text" id="destinationCity" name="destinationCity" required />

      <Label htmlFor="date">Date:</Label>
      <Input type="date" id="date" name="date" required />

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default Ticket;
