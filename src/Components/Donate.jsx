import React, { useState } from "react";
import Pay from './Pay'
const Donate =()=>{
const [firstName, setFirstName]= useState('');
const [lastName,setlastName]=useState('');
const [amount ,setAmount]=useState('');
const [email ,setEmail]=useState('');

const public_key="CHAPUBK_TEST-XQxA1FKglJqifPTKFg1jBlNKYqHBlAgL"
return(
    <div>
        <label>First Name</label>
         <input type="text" value={firstName}onChange={(e)=>{
            setFirstName(e.target.value);
         }}></input>
         <label>Last Name</label>
         <input type="text" valule={lastName} onChange={(e)=>{
            setlastName(e.target.value);
         }}/>
         <label>Email</label>
         <input type="text" valule={email} onChange={(e)=>{
            setEmail(e.target.value);
         }}/>
         <label>Amount to Pay</label>
         <input type="number" value={amount} onChange={(e)=>{
            setAmount(e.target.value);
         }}/>
         <Pay firstName={firstName} lastName={lastName} amount={amount} email={email} public_key={public_key}></Pay>
    </div>
 
)
}
export default Donate;