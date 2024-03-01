import styled from "@emotion/styled";
import React,{useState} from "react";
import { Input, Select, MenuItem } from "@mui/material";
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
  const {setList,setDesCity,setStartCity,setSearch} = props;
  const [form, setForm] = useState({startCity: 'Addis Abeba', destinationCity: 'Bishoftu'})

  const handleSubmit = (event) => {
    event.preventDefault();
  
  setList(true);
  setSearch(prev => !prev);
  };

  const onCityChange = (mode, city) => {
    if(mode === 'start') {
      setForm(prev => ({...prev, startCity: city}))
      setStartCity(city)
    }
    if(mode === 'destination') {
      setForm(prev => ({...prev, destinationCity: city}))
      setDesCity(city)
    }
  }
 const Cities=["Adama","Addis Abeba","Bishoftu","Debrebirhan","Jimma","Aseb","Asmera","Nairobi","Hawasa"]
  return (
    <Form onSubmit={handleSubmit}> 
<Label htmlFor="startCity">Start City:</Label>
   
{/* <Select onChange={(e) => { setStartCity(e.target.value) }}>
  {Cities.map(city => (
    <MenuItem key={city} value={city}>{city}</MenuItem>
  ))}
</Select> */}
<Select value={form.startCity} onChange={(e) => onCityChange('start', e.target.value)}>
  {Cities.map(city => (
    <MenuItem key={city} value={city}>{city}</MenuItem>
  ))}
</Select>

<Label htmlFor="destinationCity">Destination City:</Label>
{/* <Select  onChange={(e) => { setDesCity(e.target.value) }}>
  {Cities.map(city => (
    <MenuItem key={city} value={city}>{city}</MenuItem>
  ))}
</Select> */}
<Select value={form.destinationCity} onChange={(e) => onCityChange('destination', e.target.value)}>
  {Cities.map(city => (
    <MenuItem key={city} value={city}>{city}</MenuItem>
  ))}
</Select>


      <Label htmlFor="date">Date:</Label>
      <Input type="date" id="date" name="date" required />

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default Ticket;
