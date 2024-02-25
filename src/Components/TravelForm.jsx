import React, { useState } from 'react';
import styled from '@emotion/styled';
import {initializeApp} from 'firebase/app';
import {collection, getFirestore,addDoc,serverTimestamp} from "firebase/firestore";
import { Close } from "@mui/icons-material";
function TravelForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    startCity: '',
    destinationCity: '',
    startDate: ''
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev=>({
      ...prev,
      [name]: value
    }));
  };

  const { form,setForm } = props;
  const firebaseConfig = {
    apiKey: "AIzaSyADRIgfLRJcIyaPTfTs39T6CdiHhpesZSU",
    authDomain: "busticket-6849f.firebaseapp.com",
    projectId: "busticket-6849f",
    storageBucket: "busticket-6849f.appspot.com",
    messagingSenderId: "817025702585",
    appId: "1:817025702585:web:ccd37d913a04734e871968",
    measurementId: "G-28L2LK13BY"
  };
  const app = initializeApp(firebaseConfig)
  const db=getFirestore(app);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions like submitting the form data
    console.log(formData);
    console.log("this is" + JSON.stringify(form));

    if(form.name==='golden'){
      console.log("hellow")
      const collref= collection(db,'BusTicketForGolden');
      addDoc(collref,{
        formData,
        createdAt:serverTimestamp()
      })
    }
  };

  // Styled components
  const StyledForm = styled.form`
    display: block;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
   
  `;

  const FormGroup = styled.div`
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `;

  const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
const Div= styled.div`
width:100%;
height:100%;
`
const Cls =styled.div`
text-align: right;
`
const array= [{city:"jimma"},{city:"adama"},{city:"gonder"},{city:"mekele"},{city:"adigrat"},{city:"aseb"},"asmera","bahirdar","addisabeba","hawwasa","shashemene","asosa","sidama","semera"] ;
  return (
    <Div>
      {form && (<>
       
        <StyledForm onSubmit={handleSubmit}>
          <Cls><Close onClick={()=>{setForm('')}}></Close></Cls>
        <p>Well come to {form.name} Form</p>
          <FormGroup>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Start City:</label>
            <select
              name="startCity"
              value={formData.startCity}
              onChange={handleChange}
            >
         {array.forEach(arr=>{
          <option value={arr.city}>{arr.city}</option>
         })}
            </select>
          </FormGroup>
          <FormGroup>
            <label>Destination City:</label>
            <select
              name="destinationCity"
              value={formData.destinationCity}
              onChange={handleChange}
            >
              <option value="Adama">adama</option>
              <option value="Bahirdar">bahirdar</option>
              <option value="addis abeba">addis abeba</option>
              <option value="Bishoftu">Bishoftu</option>
              <option value="Mekele">Mekele</option>
              <option value="Asmera">Asmera</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Giggiga">Giggiga</option>
              <option value="Semera">Semera</option>
              <option value="Sidama">Sidama</option>
              <option value="Asosa">Asosa</option>
              <option value="Jima">Jima</option>
              <option value="Gonder">Gonder</option>
              <option value="Aseb">Aseb</option>
             
            </select>
          </FormGroup>
          <FormGroup>
            <label>Date to Start:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
        </>
      )}
    </Div>
  );
}

export default TravelForm;
