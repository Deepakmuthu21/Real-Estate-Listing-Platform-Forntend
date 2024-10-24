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
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = ({ email }) => {
 
  
  
//console.log(user);


  return (
    <Navbar className="border-b-2">
      <Link
        to="/home"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-lg text-white ">
          Haven
        </span>
        Land!
      </Link>
      
      <div className="flex gap-2 md:order-2">


<div className="m-2">
      <Button gradientDuoTone="purpleToPink">


          <Dropdown label="Your Account"inline>
            <Link to="/dashboard">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Link to="/user">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
          </Dropdown>
        </Button>
      </div>

  
    
     
        <Navbar.Toggle />
      </div>
      <NavbarCollapse>
        <Navbar.Link  as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link  as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
      </NavbarCollapse>
    </Navbar>
    
  );
};

export default Header;
