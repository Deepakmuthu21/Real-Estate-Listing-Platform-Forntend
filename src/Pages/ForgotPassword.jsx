import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Header from '../Components/Header';



const ForgotPassword = () => {

    const[email,setEmail]=useState()
    const navigate = useNavigate()


    const handleSubmit= async(e)=>{
        e.preventDefault();
        
            await axios.post("http://localhost:5000/api/user/forgot-password",{email})
            .then((res) =>toast.success(res.data.message)
        )
   .catch((error) => {
     
   console.log(error);
        toast.error(error.response.data.messege);
   
   
   });
    }
    return (
        <div>
            <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
        <div className="font-bold text-4xl">
          <span className="px-2 py-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-lg text-white ">
            Haven
          </span>
          Land!
        </div>
        <p className="text-sm mt-6">
            Enter Your Register Email And Click Submit Button You Will Recive Email To Reset Password
        </p>
      </div>
      <div className="flex-1 ">
         
      <form onSubmit={handleSubmit}>
          <div className="row g-3 m-5">
  <div className="col">
  <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
 <input type="email" className="form-control rounded-0" id="email" placeholder='enter your email'   onChange={(e)=>setEmail(e.target.value)}/>  </div>
  
</div>

  
  <button type="submit" className="btn btn-primary ml-20">Send mail</button>
</form>

        
        </div>
      </div>
      
    </div>         

           
        </div>
    );
};

export default ForgotPassword;

