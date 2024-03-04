import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <div className={`wrapper navbar ${showNavbar && "active"}`}>
        <a href="#" className="logo">VrixaaLabs</a>
        <nav>
          <ul>
            <li><a href="#">Networking</a></li>
            <li><a href="#">Learning</a></li>
            <li><a href="#">Projects Building</a></li>
            <li><a href="#">Mentors</a></li>
            <li><a href="#">Job</a></li>
          </ul>
        </nav>
        <div className="btn">
          <button type="submit">
            <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            <p>Sign in</p>
          </button>
        </div>
      </div>
     
    </header>
  );
};



export default Navbar;
