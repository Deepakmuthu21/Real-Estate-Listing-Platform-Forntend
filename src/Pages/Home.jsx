import axios from "axios";
import {
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa6";
import Header from '../Components/Header';
import { Link, useNavigate } from "react-router-dom";

const Home = ({email}) => {

  const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);
  
  const fetchData = async () => {
    await axios
      .get("https://real-estate-listing-platform-backend.onrender.com/api/product/get-product")
      .then((res) => setProducts(res.data.result))
      .catch((err) => console.log(err));
  };
  //console.log(email);
  //const path = useLocation().pathname;
  const handleClick=(id)=>{
    navigate(`/view/${id}`)
  }
    

  


  return (
    <div>
          <Header/>

      <div className="m-5  row row-cols-1 row-cols-md-3 g-4">
      
      {products.map((element,index)=>{ 

        return(
            <div key={index}>
        <div className="col  p-2">
         <div className="card  p-2" style={{ width: "18rem" }}>
           <div className="card-body">
             <h5 className="card-title">{element.name}</h5>
             <p className="card-text">
               Description : {element.description}
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
            <Button gradientMonochrome="purple" pill onClick={()=>{
              handleClick(element._id)
            }}><Link to='/view/:id'>View</Link></Button>
           </div>
         </div>
       </div>
       </div>
      
        )

})}
           
            
          
      </div>
    </div>
  );
};

export default Home;
