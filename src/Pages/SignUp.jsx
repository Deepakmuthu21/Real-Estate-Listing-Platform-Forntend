import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 
const SignUp = () => {

    const initialValues={
      username:'',
        name:'',
        email:'',
        password:''
        

    }

    const validationSchema= Yup.object().shape({
      name:Yup.string().required('Name Should Not be empty'),
      email:Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,'invalid email').required('Email Should Not be empty'),
      password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'weak password').required('Password must contains one special character,numbers,mixed cases'),
      username:Yup.string().required('User Name Should Not be empty')
    })

const [msg,setMsg] = useState('')
 const navigate = useNavigate()

/*const handleChance = (e) => {
//console.log(e.target.value);
setFormData({...formData,[e.target.id]: e.target.value.trim()});
  //console.log(formData);
  
}*/


    const handleSubmit = async (value) => {
      //e.preventDefault();
     //console.log(value);
     const username =value.username
     const name =value.name
     const email =value.email
     const password =value.password

    
     

     const payload = {username,name,email,password}
    
     await axios.post("https://real-estate-listing-platform-backend.onrender.com/api/user/register-user",payload)
     .then((res) =>toast.success(res.data.messege)
     )
.catch((error) => {
  
console.log(error);
     toast.error(error.response.data.messege);


});
setTimeout(() =>{navigate('/signin')},2000)


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
          You can sign up with your Email and password **This is the Demo Project
        </p>
      </div>
      <div className="flex-1 ">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                
                <Form className="flex flex-col ">
                <div>
                        <p className='m-4'>
                        <label >Username <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="username" placeholder=""/>
                        <ErrorMessage name='username' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Name  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="name" />
                        <ErrorMessage name='name' component='h6' className='color'/>
                        </p>
                    </div>
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
                   
                    <Button gradientMonochrome="success" type='submit'>Submit</Button>
                </Form>
            </Formik>

        <div className="flex gap-2 text-sm mt-6">
            <span>Already Have An Account?</span>
            <Link to="/signin" className="text-blue-500" >Signin</Link>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;

/*<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Username"/>
            <TextInput type="text" id="username" placeholder="Enter Your User Name" onChange={handleChance} />
          </div>
          <div>
            <Label value="Email"/>
            <TextInput type="email" id="email" placeholder="name@gmail.com" onChange={handleChance}/>
          </div>
          <div>
            <Label value="Password"/>
            <TextInput type="password" id="password" placeholder="Enter Your User Name" onChange={handleChance} />
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit" > SignUp</Button>
        </form>*/
        