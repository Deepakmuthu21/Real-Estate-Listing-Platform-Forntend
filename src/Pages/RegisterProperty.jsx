import React, { useState } from 'react';
import {
    Button,
    Dropdown,
    Navbar,
    NavbarCollapse,
    NavbarLink,
    TextInput,
  } from "flowbite-react";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';
import Header from '../Components/Header';


const RegisterProperty = () => {

    const [date,setDate]=useState()
    const [number,setNumber]=useState()
    const[location,setLocation]=useState()
    const buyer = localStorage.getItem("mail");
   const{id}=useParams()
    console.log(buyer);
    
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
       
            const response=await axios.post("https://real-estate-listing-platform-backend.onrender.com/api/product/register-Proprety",{date,number,location,buyer,id})
            .then((res) =>toast.success(res.data.message)
        )
   .catch((error) => {
     
   console.log(error);
        toast.error(error.response.data.message);
   
   
   });

       

    }


    return (
        <div>
                      <Header/>

            <h1>RegisterProperty</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Book Appointment:</label>
                &nbsp;&nbsp;
                <input type="Date" onChange={(e)=>setDate(e.target.value)} />
                <br />
                <br />
                <label htmlFor="">Contact Number:</label>
                &nbsp;&nbsp;
                <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
                <br />              

                <br />
                <label htmlFor="">Location :</label>
                &nbsp;&nbsp;
                <input type="text" onChange={(e)=>setLocation(e.target.value)}/>
                <br />
                <br />
                <Button type="submit" > Register </Button>
            </form>
            

        </div>
    );
};

export default RegisterProperty;