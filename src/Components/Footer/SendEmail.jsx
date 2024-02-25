import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  font-family: cursive;
`;

const Form = styled.form`
  margin-top: 20px;
  color:#000;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #000;
  font-size:18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
color:#000;;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
const H2= styled.h2`
color:#058029;`

function SendEmail() {
  // State variables to store email and message
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions like sending the email and message data
    console.log('Email:', email);
    console.log('Message:', message);
    // You can also send the data to a backend server for processing
    try{
    const reponse=  axios.post('http://localhost:3001/send-email',{
      to: email,
      text: message
    });
    console.log(reponse)
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <Container>
      <H2>Contact Us with Email</H2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Message:</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default SendEmail;
