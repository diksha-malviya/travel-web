import React from "react";
import "./../css/Contact.css";

function ContactForm({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2><b>Contact Us</b></h2>
        <br></br>
        <form>
          <label>Name: Mr. Anil Malviya</label><br/>
          

          <label>Email: anilmalviya@gmail.com</label><br/>

          <label>Address: 17, Rama colony near Arya Samaj school, Khandwa,<br/> MP-450001</label><br></br>
          <br></br>
        
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;