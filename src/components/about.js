import React from "react";
import "./../css/Header.css";
import Icon from "./../images/icon.jpeg";
import car1 from "./../images/car1.png";
import car2 from "./../images/car2.png";
import taxi1 from "./../images/taxi1.png";
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
    <div style={{ display: 'flex', gap: 5,marginTop:29, width:300 , marginLeft: 500 }}>
  <div className="card-container"> 
      <div className="card">
        <h3 style={{ color: 'white' }}>WHEREVER YOU GO, WE’LL DRIVE YOU THERE 😉</h3>
        <h6 style={{ color: 'brown' }}>Fast, safe, and reliable cab bookings at your fingertips.</h6>
        <p>Book a ride in seconds and enjoy seamless travel—anytime, anywhere.</p>

      </div>
    </div>
      <div >
      <img src={car2} alt="Image" style={{ width: 250, height:250 , marginLeft:256, marginTop:25, borderRadius: 16}}/>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 5, width:300 , marginLeft: 500 }}>
      <div style={{  }}>
      <img src={car1} alt="Image" style={{ width: 250 , height:250, borderRadius: 16}} />
      </div>
      <div style={{ }}>
      <img src={taxi1} alt="Image" style={{ width: 250, height:250, borderRadius: 16}}/>
      </div>
      
    </div>
    <div>
      <h1 style={{textAlign:'center'}}>ABOUT US</h1>
      <p style={{ color: 'brown', textAlign:'center' }}>'RIDES THAT MATCH YOUR TRAVEL STYLE'</p>
      <p style={{ color: 'black', textAlign:'center' }}>Welcome to Travel Trail, your trusted travel partner!
We specialize in hassle-free cab bookings and personalized trip planning.
<br/>
Whether you’re commuting across the city, heading to the airport, or planning a weekend escape—we’re here to make your journey smooth, safe, and reliable.
<br/>
With a user-friendly booking system, 24/7 customer support, and a wide fleet of vehicles, we bring convenience to your fingertips.
<br/>
Join thousands of happy travelers who choose us every day.<br/>
Wherever you go—we’ll get you there.</p>
</div>
</div>
    </div>


  ); 
}

export default About;