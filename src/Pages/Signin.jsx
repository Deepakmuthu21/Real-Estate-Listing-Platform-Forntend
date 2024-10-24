import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Signin = ({setToken}) => {

const [userName,setUserName] = useState('')

    const initialValues={
     
        email:'',
        password:''
        

    }

    const validationSchema= Yup.object().shape({
     
      email:Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,'invalid email').required('Email Should Not be empty'),
      password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'weak password').required('Password Should Not be empty'),
      
    })

const [msg,setMsg] = useState('')
 const navigate = useNavigate()




    const handleSubmit = async (value) => {
     
     
     const email =value.email
     const password =value.password
     
    
     //console.log(email);
     

     

     const payload = {email,password}
    
    const response =await axios.post("https://real-estate-listing-platform-backend.onrender.com/api/user/login",payload)
     .then((res) =>{toast.success(res.data.messege)
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("mail",email)

      

     setTimeout(() =>{navigate('/home')},2000)
    }
     )
.catch((error) => {
console.log(error);
     toast.error(error.response.data.messege);

});



    }




  return (
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
          You can signin with your Email and password **This is the Demo Project
        </p>
      </div>
      <div className="flex-1 ">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                
                <Form className="flex flex-col ">
               
                    <div>
                        <p className='m-4'>
                        <label >Email  <span className='color' >*</span></label>
                        <br />
                        <Field type="email" name="email" />
                        <ErrorMessage name='email' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Password  <span className='color' >*</span></label>
                        <br />
                        <Field type="password" name="password" />
                        <ErrorMessage name='password' component='h6' className='color'/>
                        </p>
                    </div>
                   <div className="flex flex-wrap gap-2">
                    <Button gradientMonochrome="success" type='submit'>Signin</Button>
                    <Button gradientMonochrome="teal"> <Link to="/"  >Back</Link></Button>
                    <Button gradientDuoTone="redToYellow"> <Link to="/forgot-password"  >Forget Password</Link></Button>
                    </div>
                </Form>
            </Formik>
           
        <div className="flex gap-2 text-sm mt-6">
            <span>You don't Have An Account?</span>
            <Link to="/" className="text-blue-500" >Signup</Link>
        </div>
        </div>
      </div>
     
    </div>
  );
};

export default Signin;