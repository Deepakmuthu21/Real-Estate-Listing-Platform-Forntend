import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const User = ({ token }) => {
  const userToken = localStorage.getItem("token");
  const navigate =useNavigate()

  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/api/user/getuser`, {
        headers: { Authorization: userToken },
      })

      .then(
        (res) => setUser(res.data.data)
      )
      .catch((err) => console.log(err));
  };


  const handleClick = () =>{
    localStorage.clear(),
    navigate('/')
  }

  const handleDelete = async(id) =>{

    
      await axios.delete(`http://localhost:5000/api/user/delete-user/${id}`)
      .then((res)=>{toast.success(res.data.message)},
      localStorage.clear(),
      navigate('/')
    )
      .catch((err) => console.log(err));
    
    


  }

  return (
    <div>
                <Header/>
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
          Thank You For Register Our Website This Website Help to you Sell Or Buy Prperties , Land , House
        </p>
      </div>
      <div className="flex-1 ">
      <div className="content">
        <div>
          {user.map((ele, index) => {
            return (
              <div key={index}>
                <table className="table table-success table-striped">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th scope="row">User Name</th>
                      <td>
                        <input
                          type="text"
                          defaultValue={ele.username}
                          readOnly
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Name</th>
                      <td>
                        <input type="text" defaultValue={ele.name} readOnly />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>
                        <input type="text" defaultValue={ele.email} readOnly />
                      </td>
                    </tr>
                    <tr>
                      <td scope="row"> <Button gradientMonochrome="teal" color="dark" pill onClick={handleClick}>SignOut</Button></td>
                      <td>
                      <Button gradientMonochrome="failure" pill onClick={
                        ()=>{
                          handleDelete(ele._id)
                        }}>Delete Account</Button>
                      </td>
                    </tr>
                    
 
                      
                  </tbody>
                </table>
                <Button  gradientDuoTone="redToYellow"> <Link to="/forgot-password"  >Change Password</Link></Button>

              </div>
            );
          })}
        </div>
      </div>
         
        
        </div>
      </div>
      
    </div> 
    </div>


   
  );
};

export default User;

