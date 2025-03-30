import logo from './logo.svg';
import './App.css';
import carImage from "./image.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home"; 
function App() {
  return (
    <div className="App">
    
      <header className="App-header">
     <div className='container'>
    <img src={carImage} alt="Image" className='right-img' />
    </div>
    <div className='left-div'>
    <h1 style={{ fontSize: "52px"}}>Welcome to Travel Tails</h1>
    <p style={{ fontSize: "18px" }}> Plan and book your perfect trip with expert advice, <br/>

    travel tips, destination information and inspiration from us.</p>
    <a href="/home" className="custom-link">Go to Home</a>
      </div>
      </header>
    </div>
  );
}

export default App;
