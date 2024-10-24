import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import axios from 'axios';
import { toast } from "react-toastify";
import Header from '../Components/Header';

const Edit_property = () => {

    const [products, setProducts] = useState({
    name: "",
    descripition: "",
    bed: "",
    baths: "",
    location: "",
    price:"",


});



    
  

    useEffect(() => {
        fetchData()
    },[])
    
    const userId = localStorage.getItem("id");
    

    const fetchData = async () => {
        await axios
          .get(`https://real-estate-listing-platform-backend.onrender.com/api/product/getproductbyId/${userId}`)
          .then((res) => setProducts(res.data.result[0]))

          
          
          .catch((err) => console.log(err));
      }; 
      //console.log(products);
    //  console.log(products);
      

      /*const handleChange = (e) => {
        //e.target.value
        const { name, value } = e.target; //e.target.name e.target.value
        setProducts((preData) => ([{
          ...preData,
          [name]: value, //product_name:iphone
        }]));
      };*/
      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://real-estate-listing-platform-backend.onrender.com/api/product/update-product/${userId}`,products)
        .then((res) => {toast.success(res.data.messege)})
        .catch((error) => {toast.success(error.data.messege)});
        console.log(products);
        
        navigate('/dashboard')
      };
   
   
     /* const initialValues=  {
        name: "",
        descripition:'',
        bed:'',
        baths:'',
        location:'',
        price:''
 
   
       }


       const validationSchema= Yup.object().shape({
        name:Yup.string().required('Name Should Not be empty'),
        descripition:Yup.string().required('Descripition Should Not be empty'),
        bed:Yup.string().required('Bed Should Not be empty'),
        baths:Yup.string().required('Baths Name Should Not be empty'),
        location:Yup.string().required('Location Name Should Not be empty'),
        price:Yup.string().required('Price Name Should Not be empty')


      })*/
  
  
   const navigate = useNavigate()
  
  /*const handleChance = (e) => {
  //console.log(e.target.value);
  setFormData({...formData,[e.target.id]: e.target.value.trim()});
    //console.log(formData);
    
  }*/
/* const handleSubmit = async (value) => {
        //e.preventDefault();
       //console.log(value);
      const name =value.name
       const descripition =value.descripition
       const bed =value.bed
       const baths =value.baths
       const location =value.location
        const price =value.price
       
  
       
  
       const payload = {name,descripition,bed,baths,location,price}
      
       await axios.post("http://localhost:5000/api/product/register-product",payload)
       .then((res) =>toast.success(res.data.messege)
       )
  .catch((error) => {
    
  console.log(error);
       toast.error(error.response.data.messege);
  
  
  });
  //setTimeout(() =>{navigate('/signin')},2000)
  
  
      }*/
    return  (
        <div>
                    <Header/>

<div className='activities m-2 ' >
<h1 className='content fs-1 d-flex justify-content-center bg-success p-3 text-center '>Enter Property</h1>
</div>
<div className="m-5">
      <form onSubmit={handleSubmit}>
       
        <p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Eg:2BHK , 3BHk"
              value={products.name}
              onChange={e=>setProducts({...products, name: e.target.value})}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Description:
            <input
              type="text"
              name="description"
              required
              placeholder="Eg : Land with House "
              value={products.description}
              onChange={e=>setProducts({...products, descripition: e.target.value})}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Beds:
            <input
              type="text"
              name="bed"
              required
              placeholder="Eg: 2 Beds , 3Beds"
              value={products.bed}
              onChange={e => setProducts({...products, bed: e.target.value})}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Baths:
            <input
              type="text"
              name="baths"
              required
              placeholder="Eg : 3 Baths , 4Baths"
              value={products.baths}
              onChange={e=>setProducts({...products, baths: e.target.value})}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Location:
            <input
              type="text"
              name="location"
              required
              placeholder="Eg : Tirupur / Chennai ..."
              value={products.location}
              onChange={e=>setProducts({...products, location: e.target.value})}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Price:
            <input
              type="text"
              name="price"
              required
              placeholder="Eg : 12 Lac / 1200000"
              value={products.price}
              onChange={e=>setProducts({...products, price: e.target.value})}
            />
          </label>
        </p>
        <br />
        <br />
        
        <p>
          <button className="btn btn-danger " type="submit">
            Update
          </button>
        </p>
      </form>
    </div>
        </div>
    );
};

export default Edit_property;

/*<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                
                <Form className="flex flex-col ">
               
                    <div>
                        <p className='m-4'>
                        <label >Name  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="name"  placeholder="Eg:2BHK , 3BHk" />
                        <ErrorMessage name='name' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Descripition  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="descripition" placeholder="Eg : Land with House " />
                        <ErrorMessage name='descripiton' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Beds  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="bed" placeholder="Eg: 2 Beds , 3Beds"/>
                        <ErrorMessage name='beds' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Baths  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="baths" placeholder="Eg : 3 Baths , 4Baths" />
                        <ErrorMessage name='baths' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >location  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="location" placeholder="Eg : Tirupur / Chennai ..." />
                        <ErrorMessage name='location' component='h6' className='color'/>
                        </p>
                    </div>
                    <div>
                        <p className='m-4'>
                        <label >Price  <span className='color' >*</span></label>
                        <br />
                        <Field type="text" name="price" placeholder="Eg : 12 Lac / 1200000"/>
                        <ErrorMessage name='price' component='h6' className='color'/>
                        </p>
                    </div>
                   
                    <Button type='submit'>Submit</Button>
                </Form>
            </Formik>*/
            