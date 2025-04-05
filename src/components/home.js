import React from "react";
import "./../css/Header.css";
import "./../css/Footer.css";
import Icon from "./../images/icon.jpeg";
import ReactPlayer from "react-player";
import carimg from "./../images/homecar.png"
import ContactForm from "./contact";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
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
    <div>
   <img src={carimg} className='img' />
   <div className="text-overlay">Experience <br/>
   The best trip ever</div>
   <button id="transparent-button" className="open-button" onClick={() => setIsOpen(true)}>Contact Us</button>
   {isOpen && <ContactForm onClose={() => setIsOpen(false)} />}
    </div>
    <div>
    <footer className="footer">
      <div className="footer-content">
        <p>
          Website: <a href="https://www.justdial.com/Khandwa/Maa-Ambey-Tour-Travels-Taxi-Services-In-Khandwa-Near-Arya-Samaj-School-Khandwa-HO/9999P7332-7332-210512162011-N1Q7_BZDET" target="_blank" rel="noopener noreferrer" className="custom-link1">Ma Ambe Tours and Travels</a>
        </p>
        <p>Created by: Your Name</p>
        <p>© 2025 All Rights Reserved</p>
       
      </div>
    </footer>
    </div>
</>
  ); 
}

export default Home;