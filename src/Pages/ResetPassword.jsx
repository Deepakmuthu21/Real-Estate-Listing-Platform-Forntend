import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import Header from '../Components/Header';

const ResetPassword = () => {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {id,token} = useParams()

    const initialValues={
       
          password:''
          
  
      }
  
      const validationSchema= Yup.object().shape({
        
        password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'weak password').required('Password Should Not be empty'),
       
      })
  
    
      const handleSubmit = async (value) => {
        //e.preventDefault();
       //console.log(value);
      
       const password =value.password
  
      
       
  
       const payload = {password}
      
     const response =  await axios.post(`https://real-estate-listing-platform-backend.onrender.com/api/user/reset-password/${id}/${token}`,payload)
       .then((res) =>toast.success(res.data.status)
       )
  .catch((error) => {
    
  console.log(error);
       toast.error(error.response.data.messege);
  
  
  });
  setTimeout(() =>{navigate('/signin')},2000)
  
  
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
         Enter Yor New Password
        </p>
      </div>
      <div className="flex-1 ">
      <div className="row g-3">
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                
                <Form className="flex flex-col ">
          <div>
          <p className='m-4'>
                        <label >Password  <span className='color' >*</span></label>
                        <br />
                        <Field type="password" name="password" />
                        <ErrorMessage name='password' component='h6' className='color'/>
                        </p>
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
</div>
        
        </div>
      </div>
      
    </div>   

         

        </div>
    );
};

export default ResetPassword;

