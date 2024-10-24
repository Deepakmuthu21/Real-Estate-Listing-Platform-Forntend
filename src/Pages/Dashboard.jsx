import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRupeeSign } from 'react-icons/fa6';
import { toast } from "react-toastify";

const Dashboard = ({setUserId}) => {

  const navigate = useNavigate()

  const [deletaProdect,setDeleteProdect] =useState([])

    const [products, setProducts] = useState([]);
    const userid = localStorage.getItem("mail");
    
useEffect(() => {
    fetchData();

  }, []);
  


  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/api/product/getproductdetail/${userid}`)
      .then((res) => setProducts(res.data.result))
      .catch((err) => console.log(err));
  };




 const handleEdit = (id)=>{
  localStorage.setItem("id",id)
   navigate(`/edit/${id}`)

 }

const handleDelete = async (id)=>{
  await axios.delete(`http://localhost:5000/api/product/delete-product/${id}`)
  .then((res)=>{toast.success(res.data.messege)},
  window.location.reload(true)
)
  .catch((err) => console.log(err));

}

    return (
        <div>
                     <Header/>

            
            <div className=''>
                <div className=''>
            <nav className="navbar bg-body-tertiary d-flex justify-content-center ">
                <p>What's Your Next Plan </p> &nbsp;
                
  <form className="d-flex justify-content-center "  >
    <button className="btn btn-outline-success me-2" type="button"><Link to="/home">Buy Property</Link></button>
    <button className="btn btn-outline-danger me-2" type="button"><Link to="/create">Sell Property</Link></button>
  </form>

</nav>
</div>
</div>
<div className='activities mt-32  ' >
   <h1 className='content fs-1 d-flex justify-content-center bg-success p-3 text-center '>Your Properties</h1>
        <div className='prperty bg-primary m-5'>
        <div className="m-5  row row-cols-1 row-cols-md-3 g-4">
      
      {products.map((element,index)=>{ 

        return(
            <div key={index}>
        <div className="col p-2">
         <div className="card p-2" style={{ width: "18rem" }}>
           <div className="card-body">
             <h5 className="card-title">{element.name}</h5>
             <p className="card-text">
               Descripition : {element.description}
             </p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Beds : {element.bed}</li>
             <li className="list-group-item">Baths  : {element.baths}</li>
             <li className="list-group-item">Location : {element.location}</li>
           </ul>
           <div className="card-body">
           <div className="flex flex-wrap gap-2">
           <div className ="badge text-blue-500 text-wrap">
   <span><FaRupeeSign/></span> {element.price}
</div>
    </div>
             
              <button  className="btn btn-success mr-2" 
              onClick={
                ()=>{
                  handleEdit(element._id)
                }
              }

              >Edit</button>
             
             
              <button className="btn btn-danger "  onClick={
                ()=>{
                  handleDelete(element._id)
                }
              }>Delete</button>
            
             
           </div>
         </div>
       </div>
       </div>
      
        )

})}
           
            
          
      </div>
            </div>
</div>
        </div>
    );
};

export default Dashboard;