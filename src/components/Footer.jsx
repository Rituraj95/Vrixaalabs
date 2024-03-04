import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">

        <div className='vri'>
            <h1>VrixxaLabs</h1>
        </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li>Information</li>
          <li>Our Customer</li>
          <li>Blog Post</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Our Services</h3>
        <ul>
          <li>Private Tuitionst</li>
          <li>Free Courses</li>
          <li>Blog Post</li>
          <li>Featured Caurses</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Helpful Links</h3>
        <ul>
          <li>Blog Post</li>
          <li>Blog Post</li>
          <li>Blog Post</li>
          <li>Careers</li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
