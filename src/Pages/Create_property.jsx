import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const Create_property = () => {
  const userid = localStorage.getItem("mail");

  



  const initialValues = {
    name: "",
    description: "",
    bed: "",
    baths: "",
    location: "",
    price: "",
    userid: userid,
    
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name Should Not be empty"),
    description: Yup.string().required("description Should Not be empty"),
    bed: Yup.string().required("Bed Should Not be empty"),
    baths: Yup.string().required("Baths  Should Not be empty"),
    location: Yup.string().required("Location  Should Not be empty"),
    price: Yup.string().required("Price Name Should Not be empty"),
  });

  const navigate = useNavigate();

  /*const handleChance = (e) => {
  //console.log(e.target.value);
  setFormData({...formData,[e.target.id]: e.target.value.trim()});
    //console.log(formData);
    
  }*/
  const handleSubmit = async (value) => {
    // value.preventDefault();
    //console.log(value);
    const name = value.name;
    const user_id = value.userid;
    const description = value.description;
    const bed = value.bed;
    const baths = value.baths;
    const location = value.location;
    const price = value.price;
    
    const payload = {
     name,
      user_id,
      description,
      bed,
      baths,
      location,
      price, 
      
     
    };

    await axios
      .post("https://real-estate-listing-platform-backend-1.onrender.com/api/product/register-product", payload)
      .then((res) => toast.success(res.data.messege), navigate("/dashboard"))
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.messege);
      });
    window.location.reload(true);
  };

  return (
    <div>
      <Header />

      <div className="activities m-2 ">
        <h1 className="content fs-1 d-flex justify-content-cente bg-success p-3 text-center ">
          Register Your Property
        </h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col ">
          <div>
            <p className="m-4">
              <label>
                Name <span className="color">*</span>
              </label>
              <br />
              <Field type="text" name="name" placeholder="Eg:2BHK , 3BHk" />
              <ErrorMessage name="name" component="h6" className="color" />
            </p>
          </div>
          <div>
            <p className="m-4">
              <label>
                Description <span className="color">*</span>
              </label>
              <br />
              <Field
                type="text"
                name="description"
                placeholder="Eg : Land with House "
              />
              <ErrorMessage
                name="description"
                component="h6"
                className="color"
              />
            </p>
          </div>
          <div>
            <p className="m-4">
              <label>
                Beds <span className="color">*</span>
              </label>
              <br />
              <Field type="text" name="bed" placeholder="Eg: 2 Beds , 3Beds" />
              <ErrorMessage name="bed" component="h6" className="color" />
            </p>
          </div>
          <div>
            <p className="m-4">
              <label>
                Baths <span className="color">*</span>
              </label>
              <br />
              <Field
                type="text"
                name="baths"
                placeholder="Eg : 3 Baths , 4Baths"
              />
              <ErrorMessage name="baths" component="h6" className="color" />
            </p>
          </div>
          <div>
            <p className="m-4">
              <label>
                location <span className="color">*</span>
              </label>
              <br />
              <Field
                type="text"
                name="location"
                placeholder="Eg : Tirupur / Chennai ..."
              />
              <ErrorMessage name="location" component="h6" className="color" />
            </p>
          </div>
          <div>
            <p className="m-4">
              <label>
                Price <span className="color">*</span>
              </label>
              <br />
              <Field
                type="text"
                name="price"
                placeholder="Eg : 12 Lac / 1200000"
              />
              <ErrorMessage name="price" component="h6" className="color" />
            </p>
          </div>



          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Create_property;
