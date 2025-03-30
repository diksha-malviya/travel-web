import React from "react";
import "./Header.css";
import Icon from "./icon.jpeg";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Blog() {
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

  hello blog page
</div>
    </div>

  ); 
}

export default Blog;