import React from "react";
import Burgerlogo from '../images/burgerlogo.png';
import { NavLink } from "react-router-dom";
import '../Styles/NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <img src={Burgerlogo} alt=""/>
        <div className="mainLink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contactUs">Contact Us</NavLink>
          <NavLink to="aboutUs">About Us</NavLink>
        </div>
      </div>
    </nav>
  );
};
