import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };
  return (
    <div className="container">
      <div className="headingright ">
        <h3 style={{ color: '#105652' }}>Ankitha</h3>
      </div>

      <div className="headingleft" ref={navRef}>
        <a href="#home" className="hire">
          Home
        </a>
        <a href="#about" className="hire">
          About
        </a>
        <a href="#portfolio" className="hire">
          Portfolio
        </a>
        <a href="#resume" className="hire">
          Resume
        </a>
        <a href="#contact" className="hire">
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};
export default Navbar;
