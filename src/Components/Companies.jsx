import styled from '@emotion/styled';
import React from 'react';
import { space, color, typography } from 'styled-system';
const Companies =(props)=>{
    const Box = styled.div`
  ${space}
  ${color}
  ${typography}
`;
const {name,img,HandleForm}= props;
    const H = styled.button`
    display:blocks;
    background-color:#767895;
    width:100%;
    height:50px;
    color:white;
    text-align:center;
    display:none;
    `
    // const Comp= styled.div`
    // height: auto;
    // display:block;
    // margin:10px;
    // margin-top:10px;
    // padding:10px;
    // border-radius:5px;
    // &:hover {
    //     cursor:pointer;
      
    //     ${H}{
    //             display:block;
    //         }
    // }
    // `
    const Comp = styled.div`
    height: auto;
    display:block;
    margin:10px;
    margin-top:10px;
    padding:10px;
    border-radius:5px;
  &:hover{
    .hi {
        display: block;
      }
  }
  
`;
const Compan = styled.div`
`
   
    const Image = styled.div`
    background-size: cover;
    width: 400px; /* Adjusted to 100% */
    height: 300px; /* Adjusted to auto */
    border-radius:5%;
    background-image: url(${img});
    display:flex;
    jusify-content:center;
    align-items: flex-end; 
    margin:bottom:5px;
    `
    const P = styled.p`
    text-align:center;
    font-size: 30px;
    color: #fff;
   background-color:#767895;
    border-radius:12px; `
 const hos=()=>{
    console.log("hellow")
 }
  
    return(
      <>
      <Compan>
        <Comp onClick={
        ()=>(
            HandleForm({name})
        )
        }>
            <Image>
            <H className='hi'>Go with us</H>
            </Image>
        
            <P>{name}</P>
           
        </Comp>
        <button onClick={()=>{console.log("hellow world to me")}}>See List
       &nbsp; {name}</button>
        </Compan>
      </>
      
    )
}
export default Companies;

// const Companies = (props) => {
//   const { name, img, HandleForm } = props;

//   const Comp = styled.div`
//     height: auto;
//     display: block;
//     margin: 10px;
//     margin-top: 10px;
//     padding: 10px;
//     border-radius: 5px;
//     &:hover {
//       .hi {
//         display: block;
//       }
//     }
//   `;

//   const Image = styled.div`
//     background-size: cover;
//     width: 400px;
//     height: 300px;
//     border-radius: 5%;
//     background-image: url(${img});
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
//     margin-bottom: 5px;
//   `;

//   const P = styled.p`
//     text-align: center;
//     font-size: 30px;
//     color: #fff;
//     background-color: #767895;
//     border-radius: 12px;
//   `;

//   return (
//     <>
//       <Comp
//         onClick={() => {
//           HandleForm({ name });
//         }}
//       >
//         <Image>
//           <H className="hi">Go with us</H>
//         </Image>

//         <P>{name}</P>
//       </Comp>
//     </>
//   );
// };

// const CompaniesContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//   gap: 20px;
// `;

// const CompaniesList = (props) => {
//   const companies = props.companies;

//   return (
//     <CompaniesContainer>
//       {companies.map((company, index) => (
//         <Companies
//           key={index}
//           name={company.name}
//           img={company.img}
//           HandleForm={company.HandleForm}
//         />
//       ))}
//     </CompaniesContainer>
//   );
// };

// export default CompaniesList;
