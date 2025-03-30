import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Demo from "./demo"; 
import Home from "./home"; 
import AboutUs from "./about"; 
import Blog from "./blog"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
