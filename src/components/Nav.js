import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import Style  from "./Nav.css"

const Nav = () => {

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    // border: "3px solid black",
    padding: "8px",
    width: "100%",
    margin: "auto",
    backgroundColor: "#a35233",
    // color: "white",
  };
 
 
  return (
    
      <nav style={navStyle}>
              <Link to="/" >
                <img width={60} className="logo"  src="https://c8.alamy.com/comp/2FNYMBG/cargo-containers-with-moroccan-flag-freight-shipping-in-morocco-3d-rendering-isolated-on-white-background-2FNYMBG.jpg"  alt='log'/>
              </Link>
              <Link to="/">
                <div><span>Ozz</span> Shipping</div>
                </Link>
              <Link to="/packages">
                <div>Ship A package</div>
              </Link>
              <Link to="/user">
                <div>Profile</div>
              </Link>
              <Link to="/signin">
                <div>Sign in</div>
              </Link>
              <Link to="/signup">
                <div>Create account</div>
              </Link>
        
      </nav>
   
  );
}

export default Nav;