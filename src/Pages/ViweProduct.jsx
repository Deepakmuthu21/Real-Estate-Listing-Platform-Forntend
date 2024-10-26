import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';

const ViweProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const  {id}  = useParams();
    useEffect(() => {
        fetchData()
    },[])


    const fetchData = async () => {
        await axios
          .get(`https://real-estate-listing-platform-backend.onrender.com/api/product/getproductbyId/${id}`)
          .then((res) => setProduct(res.data.result[0]))

          
          
          .catch((err) => console.log(err));
      }; 

      console.log(product);
      console.log(id);
      
    return (
        <div>
                    <Header/>

          <h1>Viwe Products</h1>  
          <h1>User ID: {id}</h1>
          <table class="table">
  
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Name :</td>
      <td>{product.name}</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Descripton :</td>
      <td>{product.description}</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Beds :</td>
      <td>{product.bed}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Baths :</td>
      <td>{product.baths}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Location :</td>
      <td>{product.location}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Price :</td>
      <td>{product.price}</td>
    </tr>

  </tbody>
  
</table>
<Button onClick={()=>{
    navigate(`/register-property/${product._id}`)
}}><Link>Register</Link></Button>
        </div>
    );
};

export default ViweProduct;