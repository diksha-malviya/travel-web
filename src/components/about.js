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
  
  
 
  
  <div style={{ display: 'flex', gap: 5,marginTop:110, width:300 , marginLeft: 500 }}>
  <div className="card-container"> 
      <div className="card">
        <h2>This is a Card</h2>
        <p>You can write your text here inside the card.</p>
      </div>
    </div>
      <div >
      <img src={car2} alt="Image" style={{ width: 200, height:250 , marginLeft:5, marginTop:25, borderRadius: 16}}/>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 5, width:300 , marginLeft: 500 }}>
      <div style={{  }}>
      <img src={car1} alt="Image" style={{ width: 200 , height:250, borderRadius: 16}} />
      </div>
      <div style={{ }}>
      <img src={car2} alt="Image" style={{ width: 200, height:250, borderRadius: 16}}/>
      </div>
      
    </div>
    </div>

  ); 
}

export default About;