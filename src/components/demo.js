import React from "react";
import carImage from  "./../images/image.png";
import { useNavigate } from "react-router-dom";
import Direction from "./../images/direction.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Demo() {
    const navigate = useNavigate();
  return(
   
<header className="App-header">
    <div className='container'>
    <img src={carImage} alt="Image" className='right-img' />
    </div>
    <div className='left-div'>
    <h1 style={{ fontSize: "50px"}}>Welcome to Travel Trail <img src={Direction} className="custom-image"/></h1>
    <p style={{ fontSize: "18px" }}> Plan and book your perfect trip with expert advice, <br/>

    travel tips, destination information and inspiration from us.</p>
    <div>
      <button onClick={() => navigate("/home")} className="blue-button">Explore More</button>
    </div>
      </div>
      </header>
  ); 
}

export default Demo;