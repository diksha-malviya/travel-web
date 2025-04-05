import React from "react";
import "./../css/Header.css";
import Icon from "./../images/icon.jpeg";
import car1 from "./../images/car1.png";
import car2 from "./../images/car2.png";
import "./../css/About.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function About() {
  return(
    <div>
     <div>
   <header className="header">
      {/* Left Side Icon and Logo */}
      <div className="logo-container">
      <img src={Icon} className="icon"/>
        <h1 className="logo-text">Travel Trail</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>
    </header>
</div>
  
  


  <div style={{ display: 'flex', gap: 5, margin: 0, padding: 100, width:300 }}>
      <div style={{ margin: 0, padding: 0 }}>
      <img src={car1} alt="Image" style={{ width: 100 }} />
      </div>
      <div style={{ margin: 0, padding: 0 }}>
      <img src={car2} alt="Image" style={{ width: 100 }}/>
      </div>
    </div>


    </div>

  ); 
}

export default About;