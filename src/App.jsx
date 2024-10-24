import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import User from './Pages/User';
import Create_property from './Pages/Create_property';
import Edit_property from './Pages/Edit_property';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import ViweProduct from './Pages/ViweProduct';
import RegisterProperty from './Pages/RegisterProperty';

const App = () => {
const [userId,setUserId]= useState(0)
const [token,setToken]= useState('')
//window.addEventListener("beforeunload", function() {
  //localStorage.clear();
//});


  return (
    <div>
      
   <BrowserRouter>
   
  <div>
  <ToastContainer />
  </div>
   <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/signin' element={<Signin setToken={setToken} />}/>
    
    <Route path='/about' element={<About/>}/>
    
    <Route path='/dashboard' element={<Dashboard setUserId={setUserId}/>}/>
   
    <Route path='/home' element={<Home   /> }/>
    <Route path='/user' element={<User token={token} />}/>
    <Route path = '/create' element={<Create_property/>}/>
    <Route path='/edit/:id' element={<Edit_property userId={userId}/>}/>
<Route path='/forgot-password' element={<ForgotPassword />}/>
<Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
<Route path='/view/:id' element={<ViweProduct/>}/>
<Route path='/register-property/:id' element={<RegisterProperty/>}/>

</Routes>
   <Footer />
   </BrowserRouter>
   </div>
  );
};

export default App;